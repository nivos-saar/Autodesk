/*
 * reducers
 */
import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, SET_EDIT_TASK_ID } from './actions'
// Initializing the state with some defualt tasks, so you'll enjoy from the moment you'll load the app. There's nothig like good UX.
const initialState = {
    tasksTodo: [{ id: 1, description: "niv 1", assignee: "Niv Saar", dueDate: '2017-08-18', isCompleted: false },
        { id: 2, description: "niv 2", assignee: "Daniel Gefen", dueDate: '2017-08-18', isCompleted: false },
        { id: 3, description: "niv 3", assignee: "Gal Shelef", dueDate: '2017-08-18', isCompleted: false }],
    currentId: 4,
    taskIdToEdit:0
}

export default function todoAppReducer(state = initialState, action) {
    switch (action.type) {
        // Add new todo item
        case ADD_TODO:
            return Object.assign({}, state, {
                tasksTodo: [...state.tasksTodo, Object.assign({}, action.task, { id: state.currentId, isCompleted: false })],
                currentId: state.currentId + 1,
                taskIdToEdit: state.taskIdToEdit
            })
        // Toggle the todo item (completed / not completed).
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                tasksTodo: state.tasksTodo.map((todo, index) => {
                    // The tasks id start from one but the array index starts from zero.
                    if (index+1 === action.index) {
                        return Object.assign({}, todo, {
                            isCompleted: !todo.isCompleted
                        })
                    }
                    return todo;
                }),
                currentId: state.currentId,
                taskIdToEdit: state.taskIdToEdit
            });
        // Edit todo item
        case EDIT_TODO:
            return Object.assign({}, state, {
                tasksTodo: state.tasksTodo.map((todo, index) => {
                    // The tasks id start from one but the array index starts from zero.
                    if (index + 1 === state.taskIdToEdit) {
                        return Object.assign({}, action.task);
                    }
                    return todo;
                }),
                currentId: state.currentId,
                taskIdToEdit: state.taskIdToEdit
            });
        // Set the id with the item's id that should be edited
        case SET_EDIT_TASK_ID:
            return {
                tasksTodo: state.tasksTodo,
                currentId: state.currentId,
                taskIdToEdit: action.id
            }
        default:
            return state;
    }
}