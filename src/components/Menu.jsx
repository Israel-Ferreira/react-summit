import React from 'react'
import {Link} from 'react-router-dom'

const Menu = (props) => {
  return (
    <nav className="menu">
      <ul className="menu-options">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Menu