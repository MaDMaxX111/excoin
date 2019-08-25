import _ from 'lodash';

let config  = {};

const saveToLocalStore = (key, data) => {
    try {
        const serializedState = JSON.stringify(data);
        localStorage.setItem(key, serializedState);
        return true;
    } catch (e) {
        return false;
    }
}

const loadFromLocalStore = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return null;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return null;
    }
}

const createPersistingStore = ({ storeKey = 'key', storePath = null }) => {

    config = Object.assign({}, { storeKey, storePath });
    let previewState = null;

    const selectObjectPath = (object, path) => {
        const { [path]: results } = object;
        return results;
    }

    const selectStorePath = (state, storePath) => {
        return Object.keys(storePath).reduce((result, currentKey) => {

            const subPath = selectObjectPath(state, currentKey);

            if (subPath && storePath[currentKey] && Object.keys(storePath[currentKey]).length) {
                return Object.assign({}, result, {[currentKey]: selectStorePath(subPath, storePath[currentKey])});
            } else if (subPath) {
                return Object.assign({}, result, {[currentKey]: subPath});
            }

            return result;
        }, {});
    }

    return (store) => next => action => {

        let result = next(action);
        const storeState = selectStorePath(store.getState(), storePath);

        if (!_.isEqual(storeState, previewState)) {
            saveToLocalStore(storeKey, storeState);
            previewState = Object.assign({}, storeState);
        }

        return result;
    }
}

export default createPersistingStore;

export const loadState = (state) => {

    const restoreState = (currentState, savedState) => {
        return Object.keys(savedState).reduce((result, currentKey) => {

            if (!_.isEqual(result[currentKey], savedState[currentKey])) {
               if (typeof savedState[currentKey] === 'object') {
                   return Object.assign({}, result, {[currentKey]: restoreState(result[currentKey], savedState[currentKey])});
               } else {
                   return Object.assign({}, result, {[currentKey]: savedState[currentKey]});
               }
            }

            return result;
        }, currentState);
    }

    let { storeKey }  = config;
    const savedPath = loadFromLocalStore(storeKey);

    return restoreState(state, savedPath);
}
