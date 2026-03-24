# Crypto Tracker CLI 🚀

A lightweight and fast CLI tool to fetch real-time cryptocurrency prices directly from your terminal.

Built with TypeScript using the CoinGecko public API — no API key required.

---

## ✨ Features

* 📈 Real-time cryptocurrency prices
* ⚡ Fast and minimal CLI output
* 🔒 Input validation & error handling
* 🧠 Strong typing with TypeScript
* 🌍 Supports multiple fiat & crypto currencies
* 🔓 No API key required

---

## 📦 Installation

Install globally via npm:

```bash
npm install -g @nilesh-padiyar/crypto-tracker
```

Before installing, make sure you have

* [Node.js](https://nodejs.org) (v14 or higher recommended)
* npm (comes with Node.js)

---

## ⚡ Usage

```bash
crypto <coin> <currency>
```

### Examples

```bash
crypto bitcoin usd
crypto ethereum inr
crypto dogecoin usd
```

### Example Output

```bash
BITCOIN price: 46662 USD
```

---

## 💱 Supported Currencies

Supports all currencies available from the CoinGecko API.  
To see the full list of supported currencies, run:

```bash
crypto --currencies
```

---

## 🧠 How It Works

* Fetches live price data from the CoinGecko API
* Validates user input
* Displays clean output in the terminal

---

##  Notes on Rate-Limiting

CoinGecko public API allows up to 50 requests per minute per IP.

* If you hit the limit, the CLI will automatically retry with exponential backoff.
* Example warning:

```bash
⚠ 429 Rate limit hit, retrying in 1000ms...
⚠ 429 Rate limit hit, retrying in 2000ms...
⚠ 429 Rate limit hit, retrying in 4000ms...
✖ Something went wrong
```

* This ensures users understand their usage limits while preventing the CLI from failing silently.
* Cached and fallback currencies help reduce unnecessary API calls.

---

## 🛠️ Development Setup

If you want to work on the project locally:

```bash
git clone https://github.com/nilesh-padiyar/crypto-tracker.git
cd crypto-tracker
npm install
npm run build
```

Run locally:

```bash
node dist/index.js bitcoin usd
```

---

## 🔗 Using Locally (Optional)

```bash
npm link
crypto bitcoin usd
```

---

## ⚙️ CLI Configuration

Make sure your `package.json` includes:

```json
"bin": {
  "crypto": "dist/index.js"
}
```

And your entry file starts with:

```bash
#!/usr/bin/env node
```

---

## 🔄 Updating

```bash
npm update -g @nilesh-padiyar/crypto-tracker
```

---

## 🧪 Tech Stack

* Node.js
* TypeScript
* Async/Await
* CoinGecko Public API

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Please keep commits clean and meaningful.

---

## 📜 License

MIT — free to use, modify, and distribute

---

## 🙌 Author

Nilesh Padiyar

---
