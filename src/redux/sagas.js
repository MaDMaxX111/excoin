import {all} from 'redux-saga/effects';
import tickersSagas from './tickers/sagas'

export default function* rootSaga() {
    yield all([
        tickersSagas(),
    ]);
}
