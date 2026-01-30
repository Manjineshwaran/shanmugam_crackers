import React from 'react';
import './ScrollButtons.css';

function ScrollButtons() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="scroll-buttons">
      <button
        type="button"
        className="scroll-btn scroll-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        Top
      </button>
      <button
        type="button"
        className="scroll-btn scroll-bottom"
        onClick={scrollToBottom}
        aria-label="Scroll to bottom"
      >
        Bottom
      </button>
    </div>
  );
}

export default ScrollButtons;
