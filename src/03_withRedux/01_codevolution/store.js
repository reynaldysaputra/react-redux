import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/rootReducer';

export const cakeStore = createStore(rootReducer, composeWithDevTools(
   applyMiddleware(logger,thunk)
));