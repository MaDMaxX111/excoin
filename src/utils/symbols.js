export const formatTicker = (ticker, symbolInfo) => {
    return Object.keys(ticker).reduce((object, key) => {
        object[key] = ticker[key].toString().replace(/0+$/g, '');
        return object;
    }, {});
}

export const round = (value, pad = 0) => {
    const number = Math.round(parseFloat(value) * Math.pow(10, pad)) / Math.pow(10, pad);
    return number.toFixed(pad);
}
