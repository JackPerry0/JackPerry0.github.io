// components/Header.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function HomeHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const onJournalPage = location.pathname === '/journal';

  return (
    <header className="App-header">
      <div className="logo">Health Journal</div>
      <nav className="nav-links">
        <a href="#features">Features</a>
        <a href="#subscriptions">Subscriptions</a>
        <a href="#faq">FAQ</a>
      </nav>
      <button
        className="header-button"
        onClick={() => navigate('/journal')}
      >
        {onJournalPage ? 'Back to Home' : 'Open Journal'}
      </button>
    </header>
  );
}
