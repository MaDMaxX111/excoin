export default {
  apiUrl: 'https://api.binance.com/api/v3/',
  stream: 'wss://stream.binance.com:9443/stream?streams=',
  streams: {
    ticker: 'ticker',
  },
  methods: {
    exchangeInfo: {
      url: 'exchangeInfo',
      method: 'GET',
    }
  },
}
