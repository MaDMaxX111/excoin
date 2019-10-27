import {all} from 'redux-saga/effects';
import minitickerSagas from './miniticker/sagas'

export default function* rootSaga(getState) {
    yield all([
        minitickerSagas(),
    ]);
}
