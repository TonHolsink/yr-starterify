import { combineReducers } from 'redux';
import todos from './todos';
import counter from './counter';
import reddit from './reddit';

export default combineReducers({
    todos,
    counter,
    reddit
});
