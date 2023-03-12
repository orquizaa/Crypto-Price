fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,tether,cardano,BNB,solana,dogecoin,ethereum&vs_currencies=BRL,USD&include_24hr_change=true')
    .then(res => res.json())
    .then(json => {
        const container = document.querySelector('.container');
        const coins = Object.getOwnPropertyNames(json);


        for (let coin of coins) {
            const coinInfo = json[`${coin}`];
            const price = coinInfo.brl;
            const change = coinInfo.brl_24h_change.toFixed(5);
            const price2 = coinInfo.usd;
            const change2 = coinInfo.usd_24h_change.toFixed(5);

            container.innerHTML += `
                <div class="coin ${change < 0 ? 'falling' : 'rising'}">
                    <div class="coin-logo">
                        <img src="images/${coin}.png">
                    </div>
                    <div class="coin-name">
                        <h3>${coin}</h3>
                        <span>/BRL</span>
                    </div>
                    <div class="coin-price">
                        <span class="price">R$${price}</span>
                        <span class="price2">$${price2}</span>
                        <span class="change">${change}</span>
                    </div>
                    
                </div>
        `;
        }
    });