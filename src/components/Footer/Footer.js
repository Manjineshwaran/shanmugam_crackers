import React from 'react';
import './Footer.css';

const COMPANY_NAME = 'SHANMUGAM CRACKERS';
const TAGLINE = 'Premium quality fireworks at honest prices. Safe, certified and delivered with care.';
const PHONE = '+91 9597065709';
const WHATSAPP_LINK = 'https://wa.me/919597065709';
const EMAIL = 'info@shanmugamcrackers.com';

const ADDRESS_1 = '1/176/N3 VENKATESH NAGAR, Behind CheckPost Sivakasi – Virudhanagar Main Rd, Sivakasi 626 123';
const ADDRESS_2 = 'No 224 Thacthi Street, Kalamarudhur Post, Ulundhurpet Sub, Kalalurichi District. 606102';

const MAP_QUERY = encodeURIComponent(ADDRESS_1);
const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const MAP_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-inner">
          <div className="footer-col footer-info">
            <h2 className="footer-brand">{COMPANY_NAME}</h2>
            <p className="footer-tagline">{TAGLINE}</p>
            <div className="footer-contact">
              <p className="footer-address">
                <span className="footer-icon" aria-hidden="true">📍</span>
                {ADDRESS_1}
              </p>
              <p className="footer-address footer-address-branch">
                <span className="footer-icon" aria-hidden="true">📍</span>
                {ADDRESS_2}
              </p>
              <p className="footer-email">
                <span className="footer-icon" aria-hidden="true">✉️</span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </p>
              <p className="footer-phone">
                <span className="footer-icon" aria-hidden="true">📞</span>
                <a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
              </p>
              <div className="footer-social">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn whatsapp"
                  aria-label="WhatsApp"
                >
                  <span aria-hidden="true">💬</span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="footer-social-btn email"
                  aria-label="Email"
                >
                  <span aria-hidden="true">✉️</span>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-col footer-map-col">
            <h3 className="footer-find-title">FIND US</h3>
            <div className="footer-map-wrap">
              <p className="footer-map-label">{COMPANY_NAME}</p>
              <a
                href={MAP_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-map-link"
              >
                View larger map
              </a>
              <iframe
                title="Shanmugam Crackers location"
                src={MAP_EMBED_URL}
                className="footer-map-iframe"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="footer-cta">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-btn footer-btn-whatsapp"
              >
                <span className="footer-btn-icon">💬</span>
                WhatsApp Us
              </a>
              <a
                href={MAP_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-btn footer-btn-directions"
              >
                <span className="footer-btn-icon">→</span>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2026 {COMPANY_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
