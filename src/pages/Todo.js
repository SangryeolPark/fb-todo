import { useEffect, useState } from 'react';
import { Container, DeleteAllButton, Screen, Title, TitleBar } from '../styles/Todo/TodoStyle';
import List from '../components/Todo/List';
import Form from '../components/Todo/Form';

const Todo = () => {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('fb-todo-data');
    data ? setTodoData(JSON.parse(data)) : localStorage.setItem('fb-todo-data', JSON.stringify([]));
  }, []);

  useEffect(() => {
    localStorage.setItem('fb-todo-data', JSON.stringify(todoData));
  }, [todoData]);

  const deleteAllTodo = () => {
    setTodoData([]);
  };

  return (
    <Screen>
      <Container>
        <TitleBar>
          <Title>Firebase Todo List</Title>
          <DeleteAllButton onClick={deleteAllTodo}>Delete All</DeleteAllButton>
        </TitleBar>
        <List todoData={todoData} setTodoData={setTodoData} />
        <Form todoData={todoData} setTodoData={setTodoData} />
      </Container>
    </Screen>
  );
};

export default Todo;
