import { createStore } from 'redux';
import { ReducerCake } from './cakeReducer';

export const cakeStore = createStore(ReducerCake);