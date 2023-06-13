import React from 'react';
import ListItem from './ListItem';

const List = ({ todoData, setTodoData }) => {
  const deleteTodo = id => {
    setTodoData(todoData.filter(todo => todo.id !== id));
  };

  const toggleTodo = id => {
    setTodoData(
      todoData.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  return (
    <>
      {todoData.map(todo => (
        <ListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
    </>
  );
};

export default List;
