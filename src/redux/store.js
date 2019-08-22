import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import reducers from '../redux/reducers';
// import rootSaga from '../redux/sagas';

const history = typeof window === 'object' ? createBrowserHistory({basename: process.env.PUBLIC_URL || ''}) : {}
const routeMiddleware = typeof window === 'object' ? routerMiddleware(history) : {}

const sagaMiddleware = createSagaMiddleware();
const middlewares = typeof window === 'object' ? [sagaMiddleware, routeMiddleware] : [sagaMiddleware];

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;


const store = typeof window === 'object' ? createStore(
    combineReducers({
        ...reducers,
        router: connectRouter(history),
    }),
    composeEnhancers(applyMiddleware(...middlewares)))
    : createStore(
        combineReducers({
            ...reducers
        }),
        composeEnhancers(applyMiddleware(...middlewares)));

// sagaMiddleware.run(rootSaga);
export { store, history };
