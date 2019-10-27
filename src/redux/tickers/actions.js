const actions = {
    SUBSCRIBE_MINI_TICKERS: 'SUBSCRIBE_MINI_TICKERS',
    UNSUBSCRIBE_MINI_TICKERS: 'UNSUBSCRIBE_MINI_TICKERS',
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
    }
}

export default actions;
