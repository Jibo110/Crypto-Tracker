Crypto Tracker – JavaScript Project
Overview

The Crypto Tracker is a lightweight web application built using Vanilla JavaScript, HTML, and CSS, which fetches real-time cryptocurrency data from the CoinGecko API.

It displays live prices for popular cryptocurrencies like Bitcoin, Ethereum, Solana, and Dogecoin, providing a clean, responsive, and interactive interface.

Features

✅ Live cryptocurrency prices in USD

✅ Displays market cap and 24h price change

✅ Error handling for invalid API responses

✅ Minimalistic and responsive UI

✅ Built with pure JavaScript, no frameworks

Coins included:
Bitcoin, Ethereum, Solana, Dogecoin

Technologies Used

HTML5 – Structure

CSS3 – Styling

JavaScript (ES6+) – Logic & API interaction

Fetch API – REST API requests

CoinGecko API – Cryptocurrency data

Git / GitHub – Version control

Project Structure
JS-Crypto-Tracker/
│
├── index.html        # Main HTML file
├── style.css         # CSS styles
├── app.js            # JavaScript functionality
└── README.md         # Project documentation

How It Works

The app uses JavaScript fetch() to request data from CoinGecko API:

https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,dogecoin


The API returns JSON data with the current price, market cap, and other information.

JavaScript dynamically generates HTML cards for each cryptocurrency.

Error handling ensures proper messages are shown if the API fails.

How to Run

Clone or download the repository.

Open the folder and double-click index.html.

The crypto data will load automatically in the browser.

No installation required.

Future Improvements

📈 Add interactive price graphs for each coin

🌙 Implement Dark / Light mode

⭐ Favorite coins section

🔍 Search for any cryptocurrency

⚛️ Build a React.js version for advanced learning

Author

Jibran Khan
Frontend Developer | JavaScript Enthusiast
Part of my journey to become a full-stack developer in 2025

License

This project is open-source and free to use for learning purposes.
