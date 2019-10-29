import config from  './cryptocompare_config'

const api = async (endpoint, method = 'POST', payload = {}) => {
    const url = new URL(`${config.apiUrl}${endpoint}`);

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

// export function getLatestNews({lang = 'EN', sortOrder = 'latest', excludeCategories = 'NO_EXCLUDED_NEWS_CATEGORIES'}) {
export function getLatestNews() {
    return api(config.methods.latestNews.url, config.methods.latestNews.method);
}
