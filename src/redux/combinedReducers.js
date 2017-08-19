import { combineReducers } from 'redux';
import todoAppReducer from './toDoReducer';
import undoableEditTask from './undoRedoReducer';

const todoApp = combineReducers({
    todo: todoAppReducer,
    edit: undoableEditTask
});

export default todoApp;