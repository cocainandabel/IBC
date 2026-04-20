const BASE_URL = process.env.CMC_BASE_URL || "https://pro-api.coinmarketcap.com";

async function fetchCoinMarketCapQuote(symbol) {
  const apiKey = process.env.CMC_API_KEY;
  if (!apiKey) {
    throw new Error("CMC_API_KEY is not configured");
  }

  const url = `${BASE_URL}/v1/cryptocurrency/quotes/latest?symbol=${encodeURIComponent(symbol)}&convert=USD`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-CMC_PRO_API_KEY": apiKey,
      Accept: "application/json"
    }
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`CoinMarketCap API failed (${response.status}): ${body}`);
  }

  const payload = await response.json();
  const quote = payload?.data?.[symbol]?.quote?.USD;

  if (!quote) {
    throw new Error(`CoinMarketCap returned no USD quote for symbol ${symbol}`);
  }

  return {
    symbol,
    price: Number(quote.price),
    marketCapUsd: Number(quote.market_cap || 0),
    volume24hUsd: Number(quote.volume_24h || 0),
    percentChange24h: Number(quote.percent_change_24h || 0),
    fetchedAt: new Date().toISOString()
  };
}

async function syncLatestTokenPrices(projectSymbols) {
  const updates = [];
  for (const item of projectSymbols) {
    const quote = await fetchCoinMarketCapQuote(item.symbol);
    updates.push({
      ...item,
      symbol: item.symbol,
      price: quote.price
    });
  }

  return updates;
}

module.exports = {
  fetchCoinMarketCapQuote,
  syncLatestTokenPrices
};
