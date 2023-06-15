import React, { useState } from 'react';
import { Container, Input, Submit } from '../styles/FormStyle';

const Form = ({ todoData, setTodoData }) => {
  const [value, setValue] = useState('');

  const addTodo = e => {
    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    e.preventDefault();

    if (value.trim() === '') {
      alert('내용을 입력하세요.');
      return;
    }

    setTodoData([...todoData, newTodo]);
    setValue('');
  };

  return (
    <Container onSubmit={addTodo}>
      <Input
        type="text"
        name="value"
        placeholder="할 일을 입력해주세요."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Submit type="submit" value="입력" />
    </Container>
  );
};

export default Form;
