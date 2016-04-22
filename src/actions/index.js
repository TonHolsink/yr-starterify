import { combineReducers } from 'redux';
import datalist from './datalist';
import reddit from './reddit';

export default combineReducers({
    datalist,
    reddit
});
