
let Provider = ReactRedux.Provider;
let store = Redux.createStore(todoAppReducer);

ReactDOM.render(
    <Provider store={store}>
        <Todo />
    </Provider>,
    document.getElementById('to-do')
);