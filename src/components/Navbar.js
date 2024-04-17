import React from 'react';
import '../styles/Navbar.css'; 

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav>
      <h1>LeafLover</h1>
      <div className='navbar-buttons'>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('dailyTasks')}>Daily Tasks</button>
        <button onClick={() => setCurrentPage('articles')}>Articles</button>
        <button onClick={() => setCurrentPage('profile')}>Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
