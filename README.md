# 🤖 Discord Welcome Bot

A lightweight, production-ready Discord welcome bot built with **Node.js** and **Discord.js v14**. It automatically greets new members with personalized messages and embeds, helping community managers increase member retention and engagement.

---

## ✨ Features

- 🚀 **Automated Welcomes**: Instant greeting triggers when a new user joins (`guildMemberAdd`).
- 🎨 **Rich Embeds**: Clean, customizable embed designs showcasing member avatars, server stats, and guild rules.
- 🔒 **Secure Configuration**: Uses environment variables (`.env`) for zero token exposure.
- ⚡ **Optimized Performance**: Built on modern `discord.js` v14 with strict Gateway Intents (`GuildMembers`, `Guilds`).

---

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/) (v16.9.0+)
- **Library**: [Discord.js](https://discord.js.org/) v14
- **Environment Management**: [dotenv](https://github.com/motdotla/dotenv)

---

## 📁 Project Structure

```text
welcome-bot/
├── .env.example       # Example environment configuration (safe to commit)
├── .gitignore         # Prevents committing node_modules and .env
├── index.js           # Main bot application logic & event handlers
├── package.json       # Dependencies and start scripts
└── README.md          # Project documentation
