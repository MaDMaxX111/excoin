import { all, takeEvery, put, call, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import actions from './actions';
import ws from '../../api/binance_ws';
import wsConfig from '../../api/binance_config';

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

        while (true) {
            const data = yield take(channel);
            if (data) {
                const { s: symbol } = data;
                yield put(actions.updateTicket({symbol, ticker: data}));
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
