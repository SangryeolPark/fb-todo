import React from 'react';
import firebase from '../../firebase';
import { Container, LinkContainer, NavLinkStyle, Screen } from '../../styles/App/HeaderStyle';

const Header = ({ userInfo, setUserInfo }) => {
  const logout = () => {
    firebase.auth().signOut();
    console.log('로그아웃');
    setUserInfo('');
  };

  return (
    <Screen>
      <Container>
        <NavLinkStyle to="/">Logo</NavLinkStyle>
        <LinkContainer>
          <NavLinkStyle to="/home">Home</NavLinkStyle>
          <NavLinkStyle to="/about">About</NavLinkStyle>
          <NavLinkStyle to="/todo">Todo</NavLinkStyle>
        </LinkContainer>
        <LinkContainer>
          <div className="text-white">
            {userInfo.displayName} {userInfo.email}
          </div>
          <NavLinkStyle onClick={userInfo ? logout : null} to={userInfo ? '/' : '/login'}>
            {userInfo ? 'Logout' : 'Login'}
          </NavLinkStyle>
          <NavLinkStyle to={userInfo ? '/mypage' : '/register'}>{userInfo ? 'Mypage' : 'Register'}</NavLinkStyle>
        </LinkContainer>
      </Container>
    </Screen>
  );
};

export default Header;
