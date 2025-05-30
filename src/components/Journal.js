import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import JournalHeader from './JournalHeader';

const generateDates = (count) => {
  const today = new Date();
  const dates = [];
  for (let i = 0; i < count; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const iso = date.toISOString().split('T')[0];
    dates.push(iso);
  }
  return dates;
};

const Journal = () => {
  const allDates = generateDates(100);
  const [visibleCount, setVisibleCount] = useState(20);
  const [entries, setEntries] = useState(
    allDates.reduce((acc, date) => ({ ...acc, [date]: '' }), {})
  );
  const [selectedDate, setSelectedDate] = useState(allDates[0]);
  const sidebarRef = useRef(null);

  const visibleDates = allDates.slice(0, visibleCount);

  const handleEntryChange = (e) => {
    setEntries({
      ...entries,
      [selectedDate]: e.target.value,
    });
  };

  // Scroll handler to load more dates when scrolled to bottom
  const handleScroll = () => {
    const el = sidebarRef.current;
    if (!el) return;

    // Check if scrolled near bottom (within 20px)
    if (el.scrollHeight - el.scrollTop - el.clientHeight < 20) {
      if (visibleCount < allDates.length) {
        setVisibleCount((prev) => Math.min(prev + 20, allDates.length));
      }
    }
  };

  useEffect(() => {
    const el = sidebarRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, [visibleCount]);

  return (
    <div>
      <JournalHeader />
      <div className="journal-container">
        <div className="sidebar" ref={sidebarRef} style={{ overflowY: 'auto', height: '100vh' }}>
          <div className="date-list">
            {visibleDates.map((date) => {
              const formattedDate = new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });
              return (
                <div
                  key={date}
                  className={`date-box ${date === selectedDate ? 'selected' : ''}`}
                  onClick={() => setSelectedDate(date)}
                >
                  {formattedDate}
                </div>
              );
            })}
          </div>
        </div>
        <div className="entry-section">
          <h2>
            Journal Entry for{' '}
            {new Date(selectedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </h2>
          <textarea
            value={entries[selectedDate]}
            onChange={handleEntryChange}
            placeholder="Write your thoughts here..."
          />
        </div>
      </div>
    </div>
  );
};

export default Journal;
