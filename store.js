import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    test: function (state={}, action) {
        return state;
    }
});

const configureStore = createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;