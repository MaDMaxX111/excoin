import {all} from 'redux-saga/effects';
import tickersSagas from './tickers/sagas'
import exchangeInfoSagas from './exchangeInfo/sagas'

export default function* rootSaga() {
    yield all([
        tickersSagas(),
        exchangeInfoSagas(),
    ]);
}
