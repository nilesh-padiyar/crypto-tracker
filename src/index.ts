#!/usr/bin/env node

// src/index.ts
import chalk from "chalk";
import ora from "ora";
import { fetchPrice, getSupportedCurrencies, Currency } from "./services/api";

const DEFAULT_CURRENCY: Currency = "usd";

function showHelp() {
  console.log(
    chalk.cyan(`
--- Crypto Tracker CLI ---

Usage:
  crypto <coin> [currency]

Examples:
  crypto bitcoin
  crypto ethereum inr
  crypto dogecoin eur

Commands:
  --currencies    Show all supported currencies
  --help, -h      Show help

Notes:
  - Default currency is USD
`)
  );
}

async function main() {
  const coin = process.argv[2];
  const currencyInput = (process.argv[3] || DEFAULT_CURRENCY).toLowerCase();

  // Help
  if (!coin || coin === "--help" || coin === "-h") {
    showHelp();
    process.exit(0);
  }

  // Show all currencies
  if (coin === "--currencies") {
    const spinner = ora("Fetching supported currencies...").start();

    try {
      const currencies = await getSupportedCurrencies();
      spinner.succeed("Currencies fetched!");
      console.log(chalk.green("\nSupported currencies:\n"));
      console.log(chalk.yellow(currencies.join(", ")));
      console.log();
    } catch (err) {
      spinner.fail("Failed to fetch currencies");
      console.error(chalk.red((err as Error).message));
    }

    process.exit(0);
  }

  const spinner = ora("Validating currency...").start();

  try {
    const supportedCurrencies = await getSupportedCurrencies();

    if (!supportedCurrencies.includes(currencyInput)) {
      spinner.fail("Invalid currency");
      const suggestion = supportedCurrencies.find(c => c.startsWith(currencyInput.slice(0, 2)));
      console.error(chalk.red(`\n❌ Unsupported currency: ${currencyInput}`));
      if (suggestion) console.log(chalk.yellow(`👉 Did you mean: ${suggestion}?`));
      console.log(chalk.cyan("\nRun `crypto --currencies` to see all options.\n"));
      process.exit(1);
    }

    spinner.text = "Fetching crypto price...";
    const price = await fetchPrice(coin, currencyInput);
    spinner.succeed("Price fetched successfully!");

    console.log(chalk.green("\n✅ Result:\n"));
    console.log(`${chalk.blue(coin.toUpperCase())} → ${chalk.yellow(price)} ${chalk.magenta(currencyInput.toUpperCase())}\n`);

  } catch (err) {
    spinner.fail("Something went wrong");
    console.error(chalk.red("\n❌ Error:"), chalk.white((err as Error).message), "\n");
  }
}

main();
