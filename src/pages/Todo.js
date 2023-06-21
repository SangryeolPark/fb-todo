import { useEffect, useState } from 'react';
import { Container, DeleteAllButton, Screen, Title, TitleBar } from '../styles/Todo/TodoStyle';
import List from '../components/Todo/List';
import Form from '../components/Todo/Form';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import { deleteAllTodo, getTodo } from '../axios/axios';

const Todo = ({ userInfo }) => {
  const navigate = useNavigate();
  const [todoData, setTodoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // const data = localStorage.getItem('fb-todo-data');
  //   // data ? setTodoData(JSON.parse(data)) : localStorage.setItem('fb-todo-data', JSON.stringify([]));
  // }, []);

  useEffect(() => {
    // localStorage.setItem('fb-todo-data', JSON.stringify(todoData));
    getTodo(userInfo, setTodoData, navigate, setIsLoading);
  }, []);

  const handleDeleteAll = () => {
    deleteAllTodo();
    setTodoData([]);
  };

  return (
    <Screen>
      {isLoading && <Loading />}
      <Container>
        <TitleBar>
          <Title>Firebase Todo List</Title>
          <DeleteAllButton onClick={handleDeleteAll}>Delete All</DeleteAllButton>
        </TitleBar>
        <List todoData={todoData} setTodoData={setTodoData} />
        <Form todoData={todoData} setTodoData={setTodoData} userInfo={userInfo} />
      </Container>
    </Screen>
  );
};

export default Todo;
