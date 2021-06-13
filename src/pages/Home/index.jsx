import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => (
    <div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
);

export default Home;