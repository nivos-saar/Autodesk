import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './redux/combinedReducers';
import Todo from './toDo/todo.component';


let store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <Todo />
    </Provider>,
    document.getElementById('to-do')
);