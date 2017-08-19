/*
 * Main app - action types
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const SET_EDIT_TASK_ID = 'SET_EDIT_TASK_ID';

/*
 * Main app - action creators
 */

export function addTodo(task) {
    return { type: ADD_TODO, task }
}

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}

export function editTodo(task){
	return { type: EDIT_TODO, task};
}

export function setEditTaskId(id) {
    return { type: SET_EDIT_TASK_ID, id}
}


/*
 * Undo Redo edit task - action types
 */
export const CHANGE_DESCRIPTION = "CHANGE_DESCRIPTION";
export const CHANGE_ASSIGNEE = "CHANGE_ASSIGNEE";
export const CHANGE_DUE_DATE = "CHANGE_DUE_DATE";
export const EDIT_TASK = "EDIT_TASK";

/*
 * Undo Redo edit task - action creators
 */

export function changeDescription(description) {
    return { type: CHANGE_DESCRIPTION, description };
}

export function changeAssignee(assignee) {
    return { type: CHANGE_ASSIGNEE, assignee };
}

export function doEdit(task) {
    return { type: EDIT_TASK, task }
}

export function changeDueDate(dueDate) {
    return { type: CHANGE_DUE_DATE, dueDate };
}
