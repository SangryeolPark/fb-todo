import { useState } from 'react';
import { TodoBlock } from './styles/AppStyle';
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
    <div style={{ margin: 'auto', maxWidth: '960px' }}>
      <TodoBlock>
        <h1>할 일 목록</h1>
        <List todoData={todoData} setTodoData={setTodoData} />
        <Form todoData={todoData} setTodoData={setTodoData} />
      </TodoBlock>
    </div>
  );
}

export default App;
