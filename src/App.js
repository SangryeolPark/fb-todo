import { useState } from 'react';
import { Container, Screen, Title, TitleBar } from './styles/AppStyle';
import List from './components/List';
import Form from './components/Form';

function App() {
  const [todoData, setTodoData] = useState([
    { id: 1, title: '할 일 1', completed: false },
    { id: 2, title: '할 일 2', completed: false },
    { id: 3, title: '할 일 3', completed: false },
    { id: 4, title: '할 일 4', completed: false },
  ]);

  return (
    <Screen>
      <Container>
        <TitleBar>
          <Title>Firebase Todo List</Title>
        </TitleBar>
        <List todoData={todoData} setTodoData={setTodoData} />
        <Form todoData={todoData} setTodoData={setTodoData} />
      </Container>
    </Screen>
  );
}

export default App;
