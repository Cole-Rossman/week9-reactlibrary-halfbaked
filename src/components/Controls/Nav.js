import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='nav'>
      <ul>
        <div>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
        </div>
        <div>
          <li>
            <NavLink to="/books">
              Books
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
}
