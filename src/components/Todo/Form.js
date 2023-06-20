import React, { useState } from 'react';
import { Container, Input, Submit } from '../../styles/Todo/FormStyle';
import { addTodo, axiosInstance } from '../../axios/axios';

const Form = ({ todoData, setTodoData, userInfo }) => {
  const [value, setValue] = useState('');

  const handleAdd = e => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
      author: userInfo.displayName,
      email: userInfo.email,
    };

    if (value.trim() === '') {
      alert('내용을 입력하세요.');
      return;
    }

    addTodo(newTodo);
    setTodoData([...todoData, newTodo]);
    setValue('');
  };

  return (
    <Container onSubmit={handleAdd}>
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
