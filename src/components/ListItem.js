import React from 'react';
import { Button, Container, TodoInfo } from '../styles/ListItemStyle';

const ListItem = ({ todo, deleteTodo, toggleTodo }) => {
  console.log('ListItem');
  return (
    <Container>
      <TodoInfo completed={todo.completed}>
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {todo.title}
      </TodoInfo>
      <div className="items-center">
        <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
      </div>
    </Container>
  );
};

export default ListItem;
