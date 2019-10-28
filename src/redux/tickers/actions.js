const actions = {
    SUBSCRIBE_MINI_TICKERS: 'SUBSCRIBE_MINI_TICKERS',
    UNSUBSCRIBE_MINI_TICKERS: 'UNSUBSCRIBE_MINI_TICKERS',
    UPDATE_TICKER: 'UPDATE_TICKER',
    subscribeMiniTickers: ({ tickers }) => {
        return {
            type: actions.SUBSCRIBE_MINI_TICKERS,
            tickers,
        }
    },
    unsubscribeMiniTickers: ({ tickers }) => {
        return {
            type: actions.UNSUBSCRIBE_MINI_TICKERS,
            tickers,
        }
    },
    updateTicket: ({ symbol, ticker }) => {
        return {
            type: actions.UPDATE_TICKER,
            payload: {symbol, ticker},
        }
    },
}

export default actions;
