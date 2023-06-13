import { useState } from 'react';
import {
  DeleteButton,
  TodoBlock,
  TodoForm,
  TodoInput,
  TodoItem,
  TodoSubmit,
} from './styles/AppStyle';

function App() {
  const [todoData, setTodoData] = useState([
    { id: 1, title: '할 일 1', completed: false },
    { id: 2, title: '할 일 2', completed: false },
    { id: 3, title: '할 일 3', completed: false },
    { id: 4, title: '할 일 4', completed: false },
  ]);
  const [value, setValue] = useState('');

  const deleteTodo = id => {
    setTodoData(todoData.filter(todo => todo.id !== id));
  };

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

  const toggleTodo = id => {
    setTodoData(
      todoData.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  return (
    <div style={{ margin: 'auto', maxWidth: '960px' }}>
      <TodoBlock>
        <h1>할 일 목록</h1>
        {todoData.map(todo => (
          <TodoItem key={todo.id} completed={todo.completed}>
            <input
              type="checkbox"
              defaultChecked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.title}
            <DeleteButton onClick={() => deleteTodo(todo.id)}>X</DeleteButton>
          </TodoItem>
        ))}
        <div>
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
        </div>
      </TodoBlock>
    </div>
  );
}

export default App;
