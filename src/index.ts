#!usr/bin/env node

import { fetchPrice, Currency, SUPPORTED_CURRENCIES } from "./services/api";

const DEFAULT_CURRENCY: Currency = `usd`;

function showHelp() {
  console.log(`
--- Cryto Tracker CLI ---
        
Usage: crypto <coin> [currency]

Example:
  crypto ethereum inr
  crypto bitcoin
  crypto dogecoin eur
  etc...

Notes:
  - Currency defaults to USD
  - Supported currencies - USD, INR, EUR, GBP, JPY, AUD, CAD,
      CNY, SGD, AED, BTC, and ETH
  `);
}

async function main() {
  const coin = process.argv[2];

  const currencyInut = (process.argv[3] || DEFAULT_CURRENCY).toLowerCase();
  if (!SUPPORTED_CURRENCIES.includes(currencyInut as Currency)) {
    console.error(`Unsupported Currency!`);
    console.log(`Supported Currencies -`);
    console.log(SUPPORTED_CURRENCIES.join(`,`));
    process.exit(1);
  }

  const currency = currencyInut as Currency;

  if (!coin) {
    showHelp();
    process.exit(1);
  }

  if (coin == `--help` || coin == `-h`) {
    showHelp();
    process.exit(1);
  }

  try {
    const price = await fetchPrice(coin, currency);
    console.log(`${coin.toUpperCase()} price: ${price} ${currency.toUpperCase()}`);
  } catch (err) {
    console.error("Error:", (err as Error).message);
  }
}

main();

