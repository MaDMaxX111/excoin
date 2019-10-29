import { all, takeEvery } from 'redux-saga/effects';
import actions from './actions';
import { getExchangeInfo } from '../../api/binance';
import { store } from '../store';

export function* sagaGetExchangeInfo() {

    try {
        const exchangeInfo = yield getExchangeInfo();
        yield store.dispatch(
            actions.reciveExchangeInfo(
                Object.assign({}, exchangeInfo,
                    {symbols: exchangeInfo.symbols.reduce((obj, symbol) => {
                        const { symbol: sym} = symbol;
                        obj[sym] = symbol;
                        return obj;
                        }, {})}
                )
            )
        );
    } catch (e) {
        console.log(e)
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(actions.GET_EXCHANGE_INFO, sagaGetExchangeInfo),
    ])
}
