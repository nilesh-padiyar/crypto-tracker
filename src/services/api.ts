// src/services/api.ts
export type Currency = string;

let cachedCurrencies: string[] | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

// Generic fetch with retry and backoff
async function fetchWithRetry(url: string, retries = 3, backoff = 1000): Promise<Response> {
  for (let attempt = 0; attempt < retries; attempt++) {
    const res = await fetch(url);

    if (res.status === 429) {
      // Rate limit hit — wait with exponential backoff
      const wait = backoff * Math.pow(2, attempt);
      console.warn(`⚠ 429 Rate limit hit, retrying in ${wait}ms...`);
      await new Promise(r => setTimeout(r, wait));
      continue;
    }

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return res;
  }

  throw new Error("Failed after multiple retries due to rate limiting.");
}

// Fetch all supported currencies from CoinGecko
export async function fetchSupportedCurrencies(): Promise<string[]> {
  const url = "https://api.coingecko.com/api/v3/simple/supported_vs_currencies";

  const res = await fetchWithRetry(url);
  const currencies: string[] = await res.json();

  if (!Array.isArray(currencies) || currencies.length === 0) {
    throw new Error("No currencies returned by API.");
  }

  return currencies;
}

// Cache currencies (with expiry)
export async function getSupportedCurrencies(): Promise<string[]> {
  const now = Date.now();

  if (!cachedCurrencies || !cacheTimestamp || now - cacheTimestamp > CACHE_DURATION) {
    try {
      cachedCurrencies = await fetchSupportedCurrencies();
      cacheTimestamp = now;
    } catch (err) {
      console.warn("⚠ Could not fetch currencies from API, using fallback:", (err as Error).message);
      cachedCurrencies = cachedCurrencies || ["usd", "eur", "inr"];
    }
  }

  return cachedCurrencies;
}

// Fetch crypto price with retry
export async function fetchPrice(coin: string, currency: Currency): Promise<number> {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}`;
  const res = await fetchWithRetry(url);

  const data: Record<string, Record<string, number>> = await res.json();
  const price = data[coin]?.[currency];

  if (price === undefined) {
    throw new Error("Invalid coin name or data not available.");
  }

  return price;
}
