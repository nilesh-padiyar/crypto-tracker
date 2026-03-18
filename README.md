# Crypto Tracker CLI 🚀

A lightweight and fast CLI tool to fetch real-time cryptocurrency prices directly from your terminal.

Built with TypeScript using the public CoinGecko API — no API key required.

---

## ✨ Features

* 📈 Real-time cryptocurrency prices
* ⚡ Fast and minimal CLI output
* 🔒 Input validation & error handling
* 🧠 Strong typing with TypeScript
* 🌍 Supports multiple fiat & crypto currencies
* 🔓 No API key required (uses CoinGecko public API)

---

## 📦 Installation

Install globally via npm:

```bash
npm install -g @nilesh-padiyar/crypto-tracker
```

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

```
BITCOIN price: 46662 USD
```

---

## 💱 Supported Currencies

```
usd, inr, eur, gbp, jpy,
aud, cad, cny, chf, sgd,
aed, btc, eth
```

> Defined in the source code via `SUPPORTED_CURRENCIES`

---

## 🧠 How It Works

* Fetches live price data from the CoinGecko API
* Processes and validates user input
* Displays clean output directly in the terminal

---

## 🛠️ Development Setup

If you want to work on the project locally:

```bash
git clone https://github.com/your-username/crypto-tracker.git
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

You can link it globally for development:

```bash
npm link
```

Then run:

```bash
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
