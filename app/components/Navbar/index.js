/**
 *
 * Navbar
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.scss';

function Navbar() {
  return (
    <div className={style.nav}>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/list">List</NavLink>
        </li>
      </ul>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
