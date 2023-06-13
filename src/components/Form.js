import React, { useState } from 'react';
import { TodoForm, TodoInput, TodoSubmit } from '../styles/AppStyle';

const Form = ({ todoData, setTodoData }) => {
  const [value, setValue] = useState('');

  const addTodo = e => {
    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    e.preventDefault();
    setTodoData([...todoData, newTodo]);
    setValue('');
  };

  return (
    <TodoForm>
      <TodoInput
        type="text"
        name="value"
        placeholder="할 일을 입력해주세요."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <TodoSubmit type="submit" value="입력" onClick={addTodo} />
    </TodoForm>
  );
};

export default Form;
