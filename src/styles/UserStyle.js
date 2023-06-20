import styled from '@emotion/styled';
import tw from 'twin.macro';

const Screen = tw.div`p-6 mt-5 shadow rounded-md bg-white`;

const Form = styled.form`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  gap: 10px 0;
`;

const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

const Label = styled.label`
  display: block;
  width: 25%;
  font-weight: 700;
`;

const Input = styled.input`
  display: block;
  width: 60%;
  border: 1px solid #ddd;
`;

const ButtonContainer = tw.div`flex justify-center gap-5 w-full`;

const Button = tw.button`border rounded px-3 py-2 shadow`;

export { Screen, Form, Div, Label, Input, ButtonContainer, Button };
