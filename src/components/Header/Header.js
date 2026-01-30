import React from 'react';
import './Header.css';

const WHATSAPP_NUMBER = '919597065709';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

function Header({ mobileMenuOpen, onToggleMenu }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-logo">
          <span className="logo-icon">🎆</span>
          <h1 className="logo-text">SHANMUGAM CRACKERS</h1>
        </div>
        <nav className="header-nav desktop-nav">
          <a href="#products">Products</a>
          <a href="#categories">Categories</a>
          <a href="#top">Top</a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            WhatsApp
          </a>
        </nav>
        <button
          type="button"
          className="hamburger"
          aria-label="Toggle menu"
          onClick={onToggleMenu}
        >
          <span className={mobileMenuOpen ? 'open' : ''} />
          <span className={mobileMenuOpen ? 'open' : ''} />
          <span className={mobileMenuOpen ? 'open' : ''} />
        </button>
      </div>
      {mobileMenuOpen && (
        <nav className="header-nav mobile-nav">
          <a href="#products" onClick={onToggleMenu}>Products</a>
          <a href="#categories" onClick={onToggleMenu}>Categories</a>
          <a href="#top" onClick={onToggleMenu}>Top</a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Order on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
