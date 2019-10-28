import config from  './binance_config'

const api = async (endpoint, method = 'POST', payload = {}) => {

    const url = new URL(`${config.apiUrl}${endpoint}`);
    if (method === 'GET' && Object.keys(payload).length) {
        url.search = new URLSearchParams(JSON.stringify(payload));
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
    debugger;
    return fetch(options)
        .then(async (res) => {

            const {status} = res
debugger;
            // if (status >= 200 && status < 300) {
            //     const { data } = res;
            //     return data;
            // } else {
            //     throw res.data;
            // }
        }, error => {
            const { response } = error;
            const { data, status } = response || {};

            if (status === 401 || status === 403) {
                logout()
            }

            if (status === 500 || status === 400) {
                throw data || error;
            }

            throw data || error
        });
};

export function getExchangeInfo() {
    return api(config.methods.exchangeInfo.url, config.methods.exchangeInfo.method);
}
