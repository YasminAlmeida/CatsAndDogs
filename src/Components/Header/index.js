import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style.js';
const Header = ({ rotaCat, rotaDog, rotaHome }) => {
  return (
    <>
      <nav>
        <S.Navigation>
          <S.List>
            <Link to="/">{rotaHome}</Link>
          </S.List>
          <S.List>
            <Link to="/cat">{rotaCat}</Link>
          </S.List>
          <S.List>
            <Link to="/dog">{rotaDog}</Link>
          </S.List>
        </S.Navigation>
      </nav>
    </>
  );
};
export default Header;
