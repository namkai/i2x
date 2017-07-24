import { createStore } from 'redux';
import rootReducer from '../reducers/';
import createEnhancer from './createEnhancer';


const configureStore = () => createStore(rootReducer, {}, createEnhancer());

export default configureStore;
