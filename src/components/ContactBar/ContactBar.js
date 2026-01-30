import React from 'react';
import './ContactBar.css';

const PHONE = '+91 9597065709';
const WHATSAPP_LINK = 'https://wa.me/919597065709';

function ContactBar() {
  return (
    <div className="contact-bar">
      <div className="contact-bar-inner">
        <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="contact-phone">
          <span className="contact-icon">📞</span>
          {PHONE}
        </a>
        <span className="contact-categories">Rockets • Sparklers • Bombs • Fancy</span>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-whatsapp"
        >
          <span className="whatsapp-icon">💬</span>
          Order on WhatsApp: {PHONE}
        </a>
      </div>
    </div>
  );
}

export default ContactBar;
