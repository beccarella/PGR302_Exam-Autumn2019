import {combineReducers} from 'redux';
import numberOfEmailsReducer from './numberOfEmailsReducer'

const allReducers = combineReducers({
    numberOfEmails: numberOfEmailsReducer
});

export default allReducers;