import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Workaszn</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
