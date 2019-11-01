import { all, takeEvery, put, call, take, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import actions from './actions';
import ws from '../../api/binance_ws';
import wsConfig from '../../api/binance_config';
import { formatTicker } from "../../utils";
import { BASE_CURRENCY_CODE } from '../../constants/common';
let channel = null;

function* createEventChannel(symbols) {
    return yield eventChannel(emit => {

        const callBack = (message) => {
            emit(message)
        }

        ws.subscribe(callBack, symbols, wsConfig.streams.ticker)

        return () => {
            ws.unsubscribe(callBack)
        }
    })
}

function* subscribeMiniTickers({ tickers }) {

    try {
        channel = yield call(createEventChannel, tickers)
        const symbolInfo = yield select(state => state.ExchangeInfo.symbols);
        while (true) {
            const data = yield take(channel);
            if (data) {
                const { s: symbol } = data;
                const { quoteAsset } = symbolInfo[symbol] || {};
                const tickerToBaseCurrency = quoteAsset !== BASE_CURRENCY_CODE ? yield select(state => state.Tickers[quoteAsset + BASE_CURRENCY_CODE]) : data;
                if (tickerToBaseCurrency) {
                    const { c: quoteAssetToBaseCurrency } = tickerToBaseCurrency;
                    data.quoteAssetToBaseCurrency = quoteAssetToBaseCurrency;
                } else {
                    data.quoteAssetToBaseCurrency = 'null';
                }
                yield put(actions.updateTicket({symbol, ticker: formatTicker(data, symbolInfo[symbol])}));
            }
                    }
    } catch (e) {
        console.log(e)
    }
}
//
// function* unSubscribeTournamentSaga() {
//     try {
//         yield channel.close()
//     } catch (e) {
//         console.log(e)
//     }
// }

export default function* rootSaga() {
    yield all([
        takeEvery(actions.SUBSCRIBE_MINI_TICKERS, subscribeMiniTickers),
        // takeEvery(UNSUBSCRIBE_TOURNAMENTS, unSubscribeTournamentSaga),
    ])
}
