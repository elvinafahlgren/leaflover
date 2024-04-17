import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DailyTasks from './pages/DailyTasks';
import Articles from './pages/Articles';
import Profile from './pages/Profile';
import profileMock from './data/profileMock';
import './App.css';

function App() {
  // run for clear the local storage
  //localStorage.clear();
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && <Home user={profileMock.user} />}
      {currentPage === 'dailyTasks' && <DailyTasks />}
      {currentPage === 'articles' && <Articles />}
      {currentPage === 'profile' && <Profile user={profileMock.user} plants={profileMock.plants} />}
    </div>
  );
}

export default App;
