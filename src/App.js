import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/App/Header';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Todo from './pages/Todo';
import { Screen, Container } from './styles/App/AppStyle';

const App = () => {
  return (
    <Screen>
      <Header />
      <Container>
        <Routes>
          {/* Navigate를 이용한 강제 이동 */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Screen>
  );
};

export default App;
