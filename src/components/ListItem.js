import React from 'react';
import { DeleteButton, TodoItem } from '../styles/AppStyle';

const ListItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <TodoItem completed={todo.completed}>
      <input type="checkbox" defaultChecked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      {todo.title}
      <DeleteButton onClick={() => deleteTodo(todo.id)}>X</DeleteButton>
    </TodoItem>
  );
};

export default ListItem;
