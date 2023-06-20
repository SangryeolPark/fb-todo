import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    Accept: '*/*',
  },
});

const getTodo = async (userInfo, setTodoData, navigate) => {
  if (!userInfo) {
    navigate('/login');
  } else {
    try {
      const res = await axiosInstance.get('/todos');
      const result = res.data.map(item => {
        item.id = JSON.parse(item.id);
        item.completed = JSON.parse(item.completed);
        return item;
      });
      setTodoData(result);
    } catch (err) {
      console.log(err);
      navigate('/about');
    }
  }
};

const addTodo = async newTodo => {
  try {
    await axiosInstance.post('/todos', newTodo);
  } catch (err) {
    console.log(err);
  }
};

const toggleTodo = async (id, todo) => {
  try {
    await axiosInstance.patch(`/todos/${id}`, { completed: !todo.completed });
  } catch (err) {
    console.log(err);
  }
};

const editTodo = async (id, editTitle) => {
  try {
    await axiosInstance.patch(`/todos/${id}`, { title: editTitle });
  } catch (err) {
    console.log(err);
  }
};

const deleteTodo = async id => {
  try {
    await axiosInstance.delete(`/todos/${id}`);
  } catch (err) {
    console.log(err);
  }
};

// DELETE ALL
const deleteAllTodo = async () => {
  try {
    const res = await axiosInstance.get('/todos');
    const result = res.data;
    result.forEach(item => {
      deleteTodo(item.id);
    });
  } catch (err) {
    console.log(err);
  }
};

export { axiosInstance, getTodo, addTodo, toggleTodo, editTodo, deleteTodo, deleteAllTodo };
