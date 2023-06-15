import React, { useState } from 'react';
import { Button, Container, EditItem, ItemTitle, TodoInfo } from '../styles/ListItemStyle';

const ListItem = ({ todo, todoData, setTodoData }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const deleteTodo = id => {
    const newTodoData = todoData.filter(todo => todo.id !== id);
    setTodoData(newTodoData);
  };

  const toggleTodo = id => {
    const newTodoData = todoData.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoData(newTodoData);
  };

  const editTodo = id => {
    const newTodoData = todoData.map(todo =>
      todo.id === id ? { ...todo, title: editTitle } : todo
    );
    setTodoData(newTodoData);
    setIsEdit(false);
  };

  return (
    <Container>
      <TodoInfo completed={todo.completed}>
        {isEdit ? (
          <EditItem type="text" value={editTitle} onChange={e => setEditTitle(e.target.value)} />
        ) : (
          <>
            <input
              type="checkbox"
              defaultChecked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <ItemTitle>{todo.title}</ItemTitle>
          </>
        )}
      </TodoInfo>
      <div>
        <Button onClick={isEdit ? () => setIsEdit(false) : () => deleteTodo(todo.id)}>
          {isEdit ? 'Cancel' : 'Delete'}
        </Button>
        <Button onClick={isEdit ? () => editTodo(todo.id) : () => setIsEdit(true)}>
          {isEdit ? 'Save' : 'Edit'}
        </Button>
      </div>
    </Container>
  );
};

export default ListItem;
