import styled from '@emotion/styled';
import tw from 'twin.macro';

const Screen = tw.div`p-6 mt-5 shadow rounded-md bg-white`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  gap: 10px 0;
`;

const Label = styled.label`
  display: block;
  width: 30%;
  font-weight: 700;
`;

const Input = styled.input`
  display: block;
  width: 70%;
  border: 1px solid #ddd;
`;

const ButtonContainer = tw.div`flex justify-center gap-5 w-full`;

const Button = tw.button`border rounded px-3 py-2 shadow`;

export { Screen, Form, Label, Input, ButtonContainer, Button };
