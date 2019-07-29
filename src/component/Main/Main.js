import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Main = () => {
  const [listName, setListName] = useState('');
  const todoList = useSelector(state => state.todoList);
  const dispatch = useDispatch();
  const addTodoList = () => {
    dispatch({
      type: 'ADD_TODOLIST',
      payload: { listName, },
    });
  };

  return (
    <>
      <input
        value={listName}
        onChange={(e) => { setListName(e.target.value); }}
      />
      <button type="button" onClick={addTodoList}>
        增加待辦事項
      </button>
      <ul>
        {todoList.map(todo => <li key={todo}>{todo}</li>)}
      </ul>
    </>
  );
};

export default Main;
