import API_URL from './config';
const api = (endpoint, payload = {}, method = 'POST') => {

    const url = new URL(`${endpoint}/`);

    if (method === 'GET') {
        url.search = new URLSearchParams(JSON.stringify(payload));
    }

    let options = {
        url,
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }

    if (method === 'POST' && payload && Object.keys(payload).length) {
        options.data= JSON.stringify(payload)
    }

    return fetch(options)
        .then(async (res) => {

            const {status} = res

            if (status >= 200 && status < 300) {
                const { data } = res;
                return data;
            } else {
                throw res.data;
            }
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

export function fetchData({
                              datasource,
                              rows,
                              columns,
                              metrics,
                              filters,
                              dateTimeFilters,
                              sorts
                          }) {

    const source = CancelToken.source();
    return {
        source,
        data: api(API_URL.fetchData(datasource), {
            columns: getArrayField(columns, 'code'),
            rows: getArrayField(rows, 'code'),
            metrics: getArrayField(metrics, 'value'),
            filters: filterGetter(filters),
            dateTimeFilters: filterGetter(dateTimeFilters),
            order_by: getSortValues(sorts)
        }, undefined, source.token)
    }

}

export function login({username, password}) {
    return api(API_URL.login, {username, password})
}

export function userMe() {
    return api(API_URL.userMe, null, 'get')
}

export function logoutUser() {
    return api(API_URL.logout, null, 'get')
}

export function metadata() {
    return api(API_URL.metadata, null, 'get')
}

export function getfetchDataExportURL({dataSource, rows, columns, metrics, filters, dateTimeFilters}) {

    const { value: datasourceValue } = dataSource;
    const url = new URL(`${BASE_URL}/${API_URL.fetchDataExport(datasourceValue)}/`);

    url.search = new URLSearchParams({
        form_data: JSON.stringify({
            columns: getArrayField(columns, 'code'),
            rows: getArrayField(rows, 'code'),
            metrics: getArrayField(metrics, 'value'),
            filters: filterGetter(filters),
            dateTimeFilters: filterGetter(dateTimeFilters),
        })
    });

    return url;
}
