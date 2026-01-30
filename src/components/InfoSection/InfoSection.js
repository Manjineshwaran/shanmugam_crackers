import React from 'react';
import './InfoSection.css';

function InfoSection() {
  return (
    <section className="info-section">
      <div className="info-section-inner">
        <p className="license">
          Licensed under Explosives Act — License No: <span className="license-no">393/2025</span>
        </p>
        <p className="address">
          1/176/N3 VENKATESH NAGAR, Behind CheckPost Sivakasi – Virudhanagar Main Rd, Sivakasi 626 123
        </p>
        <p className="address address-branch">
          No 224 Thacthi Street, Kalamarudhur Post, Ulundhurpet Sub, Kalalurichi District. 606102
        </p>
      </div>
    </section>
  );
}

export default InfoSection;
