import React, { useState } from 'react';
import { Button, Container, EditItem, ItemTitle, TodoInfo } from '../../styles/Todo/ListItemStyle';
import { deleteTodo, editTodo, toggleTodo } from '../../axios/axios';

const ListItem = ({ todo, todoData, setTodoData }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleDelete = id => {
    deleteTodo(id);
    const newTodoData = todoData.filter(todo => todo.id !== id);
    setTodoData(newTodoData);
  };

  const handleToggle = (id, todo) => {
    toggleTodo(id, todo);
    const newTodoData = todoData.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoData(newTodoData);
  };

  const handleEdit = (id, editTitle) => {
    editTodo(id, editTitle);
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
              onChange={() => handleToggle(todo.id, todo)}
            />
            <ItemTitle>{todo.title}</ItemTitle>
          </>
        )}
      </TodoInfo>
      <div>
        <Button onClick={isEdit ? () => setIsEdit(false) : () => handleDelete(todo.id)}>
          {isEdit ? 'Cancel' : 'Delete'}
        </Button>
        <Button onClick={isEdit ? () => handleEdit(todo.id, editTitle) : () => setIsEdit(true)}>
          {isEdit ? 'Save' : 'Edit'}
        </Button>
      </div>
    </Container>
  );
};

export default ListItem;
