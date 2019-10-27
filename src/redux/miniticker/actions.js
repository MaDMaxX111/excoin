const actions = {
    SUBSCRIBE_MINI_TICKERS: 'SUBSCRIBE_MINI_TICKERS',
    subscribeMiniTickers: ({ tickers }) => {
        return {
            type: actions.subscribeMiniTickers,
            tickers,
        }
    }
}

export default actions;
