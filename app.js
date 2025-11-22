const container = document.getElementById("crypto-container");

async function getCrypto() {
    try {
        const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,dogecoin");

        const data = await res.json();
        console.log(data);

        container.innerHTML = "";

        data.forEach(coin => {
            const div = document.createElement("div");

            div.innerHTML = `
                <h2>${coin.name}</h2>
                <p>Price: $${coin.current_price}</p>
            `;

            container.appendChild(div);
        });

    } catch (error) {
        container.innerHTML = "Error loading data";
        console.log(error);
    }
}

getCrypto();
