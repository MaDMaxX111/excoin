const convertedKeys = {
    c: (v, { quotePrecision }) => round(v, quotePrecision),
    h: (v, { quotePrecision }) => round(v, quotePrecision),
    l: (v, { quotePrecision }) => round(v, quotePrecision),
    P: v => {
        const value = round(v, 2);
        if (parseFloat(value) > 0) {
            return '+' + value;
        }
        return value;
    },
    q: v => round(v, 2),
    quoteAssetToBaseCurrency: (v, { quotePrecision }) => round(v, quotePrecision / 2),
}
export const formatTicker = (ticker, symbolInfo) => {
    // if (symbolInfo.symbol === 'BNBUSDT') {
    //     console.log(symbolInfo, ticker)
    // }
    const sInfo = getSymbolInfo(symbolInfo);
    return Object.keys(ticker).reduce((object, key) => {
        object[key] = ticker[key] && Object.keys(convertedKeys).indexOf(key) > -1 ? convertedKeys[key](ticker[key], sInfo) : ticker[key];
        return object;
    }, {});
}

function getSymbolInfo(symbolInfo) {
    const { quotePrecision } = symbolInfo;
    return {
        quotePrecision: quotePrecision / 2,
    }

}
export const round = (value, pad = 0) => {
    const number = Math.round(parseFloat(value) * Math.pow(10, pad)) / Math.pow(10, pad);
    return number.toFixed(pad);
}
