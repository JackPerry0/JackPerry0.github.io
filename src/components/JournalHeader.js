import { Link } from 'react-router-dom';

export default function JournalHeader() {
  return (
    <header className="journal-header">
      <nav className="left-nav">
        <Link to="/journal" className="nav-link">Journal</Link>
      </nav>
      <nav className="right-nav">
        <Link to="/metrics" className="nav-link">Metrics</Link>
        <a href="#" className="right-button">Open Assistant</a>
      </nav>
    </header>
  );
}
