import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../firebase';
import { Button, ButtonContainer, Div, Form, Input, Label, Screen } from '../styles/UserStyle';

const Mypage = ({ userInfo, setUserInfo }) => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState(userInfo.displayName);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, []);

  const user = firebase.auth().currentUser;

  const changeNickname = async e => {
    e.preventDefault();

    try {
      await user.updateProfile({ displayName: nickname });
      setUserInfo({ ...userInfo, displayName: nickname });
      alert('닉네임 정보를 변경하였습니다.');
    } catch (err) {
      console.log(err.code);
    }
  };

  const changeEmail = async e => {
    e.preventDefault();
    try {
      await user.updateEmail(email);
      setUserInfo({ ...userInfo, email: email });
      alert('이메일 정보를 변경하였습니다.');
    } catch (err) {
      switch (err.code) {
        case 'auth/email-already-in-use':
          alert('The email address is already in use');
          break;
        case 'auth/invalid-email':
          alert('The email address is not valid.');
          break;
        default:
          alert('이메일을 확인해주세요.');
      }
    }
  };

  const changePassword = async e => {
    e.preventDefault();
    try {
      await user.updatePassword(password);
      alert('비밀번호를 변경하였습니다.');
    } catch (err) {
      switch (err.code) {
        case 'auth/weak-password':
          alert('The password is too weak.');
          break;
      }
    }
  };

  const unregister = async e => {
    e.preventDefault();
    try {
      await user.delete();
      alert('서비스 탈퇴하였습니다.');
      setUserInfo('');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen>
      <h2>Singup</h2>
      <Form>
        <Div>
          <Label htmlFor="nickname">별칭</Label>
          <Input type="text" required value={nickname} id="nickname" onChange={e => setNickname(e.target.value)} />
          <Button onClick={changeNickname}>별칭 변경</Button>
        </Div>
        <Div>
          <Label htmlFor="email">이메일</Label>
          <Input type="email" required value={email} id="email" onChange={e => setEmail(e.target.value)} />
          <Button onClick={changeEmail}>이메일 변경</Button>
        </Div>
        <Div>
          <Label htmlFor="password">비밀번호</Label>
          <Input type="password" value={password} id="password" onChange={e => setPassword(e.target.value)} required />
          <Label htmlFor="pwConfirm">비밀번호 확인</Label>
          <Input type="password" value={pwConfirm} id="pwConfirm" onChange={e => setPwConfirm(e.target.value)} required />
          <Button onClick={changePassword}>비밀번호 변경</Button>
        </Div>
        <ButtonContainer>
          <Button onClick={unregister}>회원탈퇴</Button>
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

export default Mypage;
