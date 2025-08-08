import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/"><h2>📱 App Store</h2></Link>
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;
