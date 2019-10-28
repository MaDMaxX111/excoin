import config from  './binance_config'

const api = async (endpoint, method = 'POST', payload = {}) => {
    const url = new URL(`${config.proxy}${config.apiUrl}${endpoint}`);

    if (method === 'GET' && Object.keys(payload).length) {
        url.search = new URLSearchParams(JSON.parse(JSON.stringify(payload)));
    }

    let options = {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }

    if (method === 'POST' && payload && Object.keys(payload).length) {
        options.data= JSON.stringify(payload)
    }
    const responce = await fetch(url.toString(), options);
    const {ok, statusText } = responce;

    if (ok) {
        return await responce.json();
    } else {
        throw statusText;
    }

};

export function getExchangeInfo() {
    return api(config.methods.exchangeInfo.url, config.methods.exchangeInfo.method);
}

export function getKlines({symbol, interval, startTime, endTime, limit}) {
    return api(config.methods.klines.url, config.methods.klines.method, {symbol, interval, startTime, endTime, limit});
}
