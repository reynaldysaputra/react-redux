import { createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';

export const cakeStore = createStore(rootReducer);