import actions from './actions';

const initState = {};

export default function (state = initState, {type, payload}) {
    switch (type) {
        case actions.GET_EXCHANGE_INFO:
            return initState;
        case actions.RECIVE_EXCHANGE_INFO:
            return {
                ...payload
            }
        default:
            return state;
    }
}
