import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../firebase';
import { Button, ButtonContainer, Form, Input, Label, Screen } from '../styles/UserStyle';

const Register = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');

  const register = async e => {
    e.preventDefault();
    try {
      // firebase에 회원가입 하기
      let createUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
      // 회원 가입 성공
      createUser.user.updateProfile({
        displayName: nickname,
      });
      navigate('/login');
    } catch (err) {
      console.error(err.code);
      switch (err.code) {
        case 'auth/email-already-in-use':
          alert('The email address is already in use');
          break;
        case 'auth/invalid-email':
          alert('The email address is not valid.');
          break;
        case 'auth/operation-not-allowed':
          alert('Operation not allowed.');
          break;
        case 'auth/weak-password':
          alert('The password is too weak.');
          break;
      }
    }
  };

  return (
    <Screen>
      <h2>Singup</h2>
      <Form>
        <Label htmlFor="nickname">별칭</Label>
        <Input type="text" required value={nickname} id="nickname" onChange={e => setNickname(e.target.value)} maxLength={10} minLength={2} />
        <Label htmlFor="email">이메일</Label>
        <Input type="email" required value={email} id="email" onChange={e => setEmail(e.target.value)} />
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" value={password} id="password" onChange={e => setPassword(e.target.value)} required minLength={8} maxLength={16} />
        <Label htmlFor="pwConfirm">비밀번호 확인</Label>
        <Input type="password" value={pwConfirm} id="pwConfirm" onChange={e => setPwConfirm(e.target.value)} required minLength={8} maxLength={16} />
        <ButtonContainer>
          <Button onClick={e => register(e)}>회원가입</Button>
          <Button
            onClick={e => {
              e.preventDefault();
              navigate('/');
            }}
          >
            취소
          </Button>
        </ButtonContainer>
      </Form>
    </Screen>
  );
};

export default Register;
