import {createStore, applyMiddleware} from 'redux';
import reducer from './user';
import reduxPromiseMiddleware from 'redux-promise-middleware';

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));