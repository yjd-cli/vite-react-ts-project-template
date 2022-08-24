import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundContainer = () => {
  return (
    <div>
      <h2>NotFoundContainer</h2>
      <Link to="/home">To Home</Link>
    </div>
  );
};

export default NotFoundContainer;
