import { combineReducers } from 'redux';
import counter from './counter';
import reddit from './reddit';

export default combineReducers({
    todos,
    reddit
});
