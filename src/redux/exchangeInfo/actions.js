const actions = {
    GET_EXCHANGE_INFO: 'GET_EXCHANGE_INFO',
    RECIVE_EXCHANGE_INFO: 'RECIVE_EXCHANGE_INFO',
    getExchangeInfo: () => {
        return {
            type: applicationCache.GET_EXCHANGE_INFO,
        }
    },
    reciveExchangeInfo: (data) => {
        return {
            type: actions.RECIVE_EXCHANGE_INFO,
            payload: data,
        }
    },
}

export default actions;
