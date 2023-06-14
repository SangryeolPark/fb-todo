import styled from '@emotion/styled';
import tw from 'twin.macro';

const Container = tw.div`flex items-center justify-between w-full mb-2 px-4 py-1 text-gray-600 bg-gray-100 border rounded`;

const TodoInfo = styled.div`
  ${tw`items-center`};
  padding: '10px';
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

const Button = tw.div`px-4 py-2 float-right`;

export { Container, TodoInfo, Button };
