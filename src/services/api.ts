
export const SUPPORTED_CURRENCIES = [
  `usd`, `inr`, `eur`, `gbp`, `jpy`, `aud`, `cad`, 
  `cny`, `chf`, `sgd`, `aed`, `btc`, `eth`
] as const;

export type Currency = typeof SUPPORTED_CURRENCIES[number];

export async function fetchPrice(
  coin: string,
  currency: Currency
): Promise<number> {
  const baseUrl = "https://api.coingecko.com/api/v3/simple/price";
  const apiUrl = `${baseUrl}?ids=${coin}&vs_currencies=${currency}`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data: Record<string, Record<Currency, number>> =
    await response.json();

  const price = data[coin]?.[currency];

  if (price === undefined) {
    throw new Error("Invalid coin name or data not available.");
  }

  return price;
}
