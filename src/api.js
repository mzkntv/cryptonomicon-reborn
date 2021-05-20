const API_KEY =
  "11baf9225820554f017024eb66e99d4bfac5c6fcd05bee8b6272cd25db1e3547";

// TODO: refactor to user IRLSerachParams
export const loadTickers = (tickers) =>
  fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${tickers.join(
      ","
    )}&api_key=${API_KEY}`
  )
    .then((r) => r.json())
    .then((rawData) =>
      Object.fromEntries(
        Object.entries(rawData).map(([key, value]) => [key, 1 / value])
      )
    );
