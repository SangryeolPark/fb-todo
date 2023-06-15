import styled from '@emotion/styled';
import tw from 'twin.macro';

const Container = tw.div`flex items-center justify-between w-full mb-2 px-4 py-1 text-gray-600 bg-gray-100 border rounded`;

const TodoInfo = styled.div`
  ${tw`flex items-center w-3/4`};
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

const EditItem = tw.input`px-3 py-2 mr-3 text-gray-500 rounded`;

const Button = tw.div`px-4 py-2 float-right`;

const ItemTitle = tw.span`ml-3`;

export { Container, TodoInfo, EditItem, Button, ItemTitle };
