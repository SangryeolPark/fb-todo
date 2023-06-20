import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../firebase';
// import { Button, ButtonContainer, Form, Input, Label, Screen } from '../styles/UserStyle';
import { Screen } from '../styles/UserStyle';

import { Button, Checkbox, Form, Input, Modal } from 'antd';

const Login = ({ setUserInfo }) => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async values => {
    // console.log('Success:', values);
    try {
      const res = await firebase.auth().signInWithEmailAndPassword(values.email, values.password);
      // const user = firebase.auth().currentUser;
      const user = res.user;
      console.log('로그인');
      setUserInfo(user);
      navigate('/');
    } catch (err) {
      // console.log(err.code);
      switch (err.code) {
        case 'auth/invalid-email':
          setModalMessage('올바른 이메일 형식이 아닙니다.');
          break;
        case 'auth/wrong-password':
          setModalMessage('올바르지 않은 비밀번호입니다.');
          break;
        case 'auth/user-not-found':
          setModalMessage('가입되지 않은 사용자입니다.');
          break;
        case 'auth/missing-email':
          setModalMessage('이메일이 입력되지 않았습니다.');
          break;
        default:
          setModalMessage('로그인에 실패하였습니다.');
      }
      showModal();
    }
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  // const login = async e => {
  //   e.preventDefault();
  //   try {
  //     await firebase.auth().signInWithEmailAndPassword(email, password);
  //     console.log('로그인 성공');
  //     const user = firebase.auth().currentUser;
  //     setUserInfo(user);
  //     navigate('/');
  //   } catch (err) {
  //     console.log(err.code);
  //     switch (err.code) {
  //       case 'auth/invalid-email':
  //         alert('The email address is not valid.');
  //         break;
  //       case 'auth/wrong-password':
  //         alert('The password is wrong.');
  //         break;
  //       case 'auth/user-not-found':
  //         alert('Not registerd user.');
  //         break;
  //       default:
  //         alert('Unknown error');
  //     }
  //   }
  // };

  return (
    <Screen>
      <h2>Login</h2>

      <Modal title="로그인 오류" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>{modalMessage}</p>
      </Modal>

      <Form
        name="basic"
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 16 }}
        style={{
          maxWidth: 1280,
          margin: '0 auto',
        }}
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          style={{ justifyContent: 'center' }}
          label="이메일"
          name="email"
          rules={[
            {
              type: 'email',
              required: true,
              message: '이메일을 입력하세요.',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="비밀번호"
          name="password"
          rules={[
            {
              required: true,
              message: '비밀번호를 입력하세요.',
              validator: async (_, password) => {
                if (!password || password.length < 6) {
                  return Promise.reject(new Error('At least 6 characters'));
                }
              },
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: '#1677ff', marginRight: '8px' }}
          >
            로그인
          </Button>
          <Button htmlType="button" onClick={() => navigate('/register')}>
            회원가입
          </Button>
        </Form.Item>
      </Form>

      {/* <Form>
        <Label htmlFor="email">이메일</Label>
        <Input type="email" required value={email} id="email" onChange={e => setEmail(e.target.value)} />
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" required value={password} id="password" onChange={e => setPassword(e.target.value)} minLength={8} maxLength={16} />

        <ButtonContainer>
          <Button onClick={e => login(e)}>로그인</Button>
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
      </Form> */}
    </Screen>
  );
};

export default Login;
