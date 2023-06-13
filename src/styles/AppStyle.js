import styled from '@emotion/styled';

const TodoBlock = styled.div`
  padding: 30px;
  margin-top: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: -9px 17px 13px rgb(0 0 0 / 16%);
`;

const TodoItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

const DeleteButton = styled.button`
  color: #fff;
  float: right;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
`;

const TodoForm = styled.form`
  display: flex;
`;

const TodoInput = styled.input`
  flex: 10;
  padding: 5px;
`;

const TodoSubmit = styled.input`
  flex: 1;
`;

export { TodoBlock, TodoItem, DeleteButton, TodoForm, TodoInput, TodoSubmit };
