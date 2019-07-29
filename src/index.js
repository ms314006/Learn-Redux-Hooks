import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Main from './component/Main';

const ADD_TODOLIST = 'ADD_TODOLIST';

const initState = {
  todoList: ['first'],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODOLIST: {
      const tempTodo = state.todoList.map(list => list);
      tempTodo.push(action.payload.listName);
      return {
        todoList: tempTodo,
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
