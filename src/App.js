import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/App/Header';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Todo from './pages/Todo';
import Register from './pages/Register';
import Mypage from './pages/Mypage';
import NotFound from './pages/NotFound';
import Schedule from './pages/Schedule';
import { Screen, Container } from './styles/App/AppStyle';

const App = () => {
  // 추후에 Redux/Recoil state로 관리 필요
  const [userInfo, setUserInfo] = useState('');

  return (
    <Screen>
      <Header userInfo={userInfo} setUserInfo={setUserInfo} />
      <Container>
        <Routes>
          {/* Navigate를 이용한 강제 이동 */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo userInfo={userInfo} />} />
          <Route path="/login" element={<Login setUserInfo={setUserInfo} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/mypage"
            element={<Mypage userInfo={userInfo} setUserInfo={setUserInfo} />}
          />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Screen>
  );
};

export default App;
