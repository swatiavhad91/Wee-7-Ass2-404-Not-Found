import React from 'react';
import { Link } from 'react-router-dom';

const Hello = () => (
  <div>
    <p>Click to route to "/oops" which isn't a registered route:</p>
    <Link to="/oops">
      Let's go
    </Link>
  </div>
);

export default Hello;