
import { createStore } from 'redux';
import counterReducer from './counter';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export default store;