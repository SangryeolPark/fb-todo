import React from 'react';
import ListItem from './ListItem';

const List = ({ todoData, setTodoData }) => {
  return (
    <div>
      {todoData.map(todo => (
        <ListItem key={todo.id} todo={todo} todoData={todoData} setTodoData={setTodoData} />
      ))}
    </div>
  );
};

export default List;
