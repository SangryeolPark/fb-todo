import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonContainer, Form, Input, Label, Screen } from '../styles/UserStyle';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen>
      <h2>Login</h2>
      <Form>
        <Label htmlFor="email">이메일</Label>
        <Input
          type="email"
          required
          value={email}
          id="email"
          onChange={e => setEmail(e.target.value)}
        />
        <Label htmlFor="password">비밀번호</Label>
        <Input
          type="password"
          required
          value={password}
          id="password"
          onChange={e => setPassword(e.target.value)}
          minLength={8}
          maxLength={16}
        />

        <ButtonContainer>
          <Button onClick={e => e.preventDefault()}>로그인</Button>
          <Button
            onClick={e => {
              e.preventDefault();
              navigate('/register');
            }}
          >
            회원가입
          </Button>
          <Button
            onClick={e => {
              e.preventDefault();
              console.log('비밀번호 찾기');
            }}
          >
            비밀번호 찾기
          </Button>
        </ButtonContainer>
      </Form>
    </Screen>
  );
};

export default Login;
