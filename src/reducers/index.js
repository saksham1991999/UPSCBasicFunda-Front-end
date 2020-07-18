import {combineReducers} from 'redux';
import notesReducer from './notesReducer';
import reducer from './auth';

export default combineReducers({
    notes:notesReducer,
    auth:reducer
})