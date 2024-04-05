import React from 'react';

const Home = ({ user }) => {
  return (
    <div className="home">
      <h1>Hello, {user.name}!</h1>
    </div>
  );
};

export default Home;
