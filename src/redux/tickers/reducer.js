import actions from './actions';

const initState = {};

export default function(state = initState, {type, payload}) {
  switch (type) {
      case actions.UPDATE_TICKER:
      const { symbol, ticker } = payload;
      return {
        ...state,
        ...{[symbol]: ticker}
      };

    default:
      return state;
  }
}
