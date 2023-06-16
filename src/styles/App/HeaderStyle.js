import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import tw from 'twin.macro';

const Screen = tw.header`p-7 bg-black`;

const Container = tw.div`flex items-center justify-between`;

const NavLinkStyle = styled(NavLink)`
  ${tw`text-white text-lg hover:text-orange-600`};
  &.active {
    ${tw`text-orange-600`}
  }
`;

const LinkContainer = tw.ul`flex items-center justify-center gap-4`;

export { Screen, Container, NavLinkStyle, LinkContainer };
