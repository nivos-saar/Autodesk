import undoable from 'redux-undo';
/*
 * Undo-Redo Reducer.
 */
import { CHANGE_DESCRIPTION, CHANGE_ASSIGNEE, CHANGE_DUE_DATE, EDIT_TASK } from './actions';

const editTaskInitialState = { description: undefined, dueDate: undefined, assignee: undefined, id: undefined };

const editTaskReducer = (state = editTaskInitialState, action) => {
    switch (action.type) {
        case CHANGE_DESCRIPTION:
            return Object.assign({}, state, { description: action.description });
        case CHANGE_DUE_DATE:
            return Object.assign({}, state, { dueDate: action.dueDate });
        case CHANGE_ASSIGNEE:
            return Object.assign({}, state, { assignee: action.assignee });
        case EDIT_TASK:
            return action.task;
        default:
            return state;
    }
}

const undoableEditTask = undoable(editTaskReducer); 

export default undoableEditTask;
