import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeHeader from './HomeHeader';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <HomeHeader />
      <main className="main-content">
        <h1>Your Health, Your Journey</h1>
        <button className="open-journal-button" onClick={() => navigate('/journal')}>
          Open Journal
        </button>
      </main>
    </div>
  );
}
