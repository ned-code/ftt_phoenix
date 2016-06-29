// Simple header component

import React from 'react';
import { Link } from 'react-router';

/* component styles */
require('./styles.scss');

const Header = () => (
  <div className="header">
    <ul className="header__menu">
      <li>
        <Link to="/landing">
          Home 
        </Link>
      </li>
    </ul>
  </div>
);

export default Header;
