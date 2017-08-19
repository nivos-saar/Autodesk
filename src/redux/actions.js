/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
//export const TOGGLE_EDIT_FORM = 'TOGGLE_EDIT_FORM';
//export const TOGGLE_ADD_FORM = 'TOGGLE_ADD_FORM';
export const SET_EDIT_TASK_ID = 'SET_EDIT_TASK_ID';

/*
 * action creators
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

