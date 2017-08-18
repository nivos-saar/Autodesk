// Actions.
import { ADD_TODO, TOGGLE_TODO } from './actions'


function stateToProps(state) {
    return {
        tasksTodo: state.tasksTodo,
        id: state.id
    };
}

function dispatchToProps(dispatch) {
    return Redux.bindActionCreators({
        addAction: ADD_TODO,
        toggleAction: TOGGLE_TODO
    }, dispatch);
}

let TodoListContainer = ReactRedux.connect(stateToProps, dispatchToProps)(TasksList);
let TodoItemContainer = ReactRedux.connect(stateToProps, dispatchToProps)(TaskItem);
//let TodofiAddContainer = ReactRedux.connect(stateToProps, dispatchToProps)(TodofiAdd);