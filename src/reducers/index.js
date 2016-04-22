import { combineReducers } from 'redux';
import counter from './counter';
import reddit from './reddit';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    reddit,
    form: formReducer,
    counter
});
