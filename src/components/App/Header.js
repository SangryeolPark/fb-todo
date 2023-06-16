import React from 'react';
import { Container, LinkContainer, NavLinkStyle, Screen } from '../../styles/App/HeaderStyle';

const Header = () => {
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
          <NavLinkStyle to="/login">Login</NavLinkStyle>
          <NavLinkStyle to="/register">Register</NavLinkStyle>
        </LinkContainer>
      </Container>
    </Screen>
  );
};

export default Header;
