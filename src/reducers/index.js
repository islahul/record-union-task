import notebook from '../modules/notebook/reducers';
import { combineReducers } from 'redux';

const combinedReducer = combineReducers({
  notebook
});

export default combinedReducer;
