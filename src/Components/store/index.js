import {applyMiddelWare,createStore} from 'redux';
import logger from 'redux-logger';
import rootReducer from '../../Reducer';


const store = createStore(rootReducer,applyMiddelWare(logger));

export default store;
