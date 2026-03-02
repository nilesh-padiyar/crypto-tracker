
# cryto-tracker

A lightweight TypeScript CLI tool that fetches real-time cryptocurrency prices using the CoinGecko public API.

Built as a clean backend practice project with proper typing, validation, and async handling.

> Version: v1.0.0

---

# Features

- Real-time crypto prices

- Controlled supported currencies

- Written in TypeScript

- Input validation & error handling

- CLI-first experience

- Uses public CoinGecko API (no API key required)

---

# Installation

1️⃣ Clone the repository

```git clone https://github.com/your-username/crypto-tracker.git```

```cd crypto-tracker```

2️⃣ Install dependencies

```npm install```

3️⃣ Build the project

```npm run build```

---

# Use It Globally (Recommended)

To use the CLI from anywhere in your terminal, use:

```npm link```

This creates a global symlink to your CLI.

After linking, you can run:

```crypto bitcoin usd```

From any directory

---

# Important: package.json Configuration

For npm link to work, your package.json must include:

```
{
  "bin": {
    "crypto": "dist/index.js"
  }
}
```

And your ```index.ts``` must start with:

```#!/usr/bin/env node```

After building and linking, your CLI becomes a real terminal command.

---

# Usage

- **Without global link:**
```node dist/index.js <coin> <currency>```

- **With npm link:**
```crypto <coin> <currency>```

---

# Example:

**Command:**
```crypto bitcoin usd```

**Output:**
```BITCOIN price: 46662 USD```

---

# Supported Currencies

```
usd, inr, eur, gbp, jpy,
aud, cad, cny, chf, sgd,
aed, btc, eth
```

(Defined via ```SUPPORTED_CURRENCIES``` in the source code.) 
**You can add or remove currencies as per your preferences.**

---

# Tech Stack

- Node.js

- TypeScript

- Async/Await

- CoinGecko Public API

---

# Contributing

 **Contributions** are welcome.

If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Submit a pull request

Please keep commit messages clean and descriptive.

---

# License

**MIT** - free to use, fork and distribute

---
