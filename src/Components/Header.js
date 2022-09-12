import React from 'react';
import { Link } from 'react-router-dom';
const Header = ({ rotaCat, rotaDog, rotaHome }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">{rotaHome}</Link>
          </li>

          <li>
            <Link to="/cat">{rotaCat}</Link>
          </li>
          <li>
            <Link to="/dog">{rotaDog}</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
