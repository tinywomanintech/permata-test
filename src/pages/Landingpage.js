import React from 'react';
import { Link } from 'react-router-dom';

const Landingpage = () => {
  return (
    <div>
      <h1>Landingpage</h1>
      <Link to="/login">click here to login</Link>
    </div>
  );
};

export default Landingpage;
