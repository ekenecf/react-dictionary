import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './Reducer';

const rootReducer = combineReducers({
  dataReducer,
});

const store = createStore(rootReducer,
  applyMiddleware(thunk));

export default store;
