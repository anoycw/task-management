import { createStore } from 'redux';
import taskReducer from './services/reducers/taskReducers';

const store = createStore(taskReducer);

export default store;