import React from 'react';
import './OrderSummary.css';

function OrderSummary({ totalProducts, discountTotal, overallTotal }) {
  return (
    <section className="order-summary">
      <div className="order-summary-inner">
        <div className="summary-card">
          <span className="summary-label">TOTAL PRODUCTS</span>
          <span className="summary-value">{totalProducts}</span>
        </div>
        <div className="summary-card">
          <span className="summary-label">DISCOUNT TOTAL</span>
          <span className="summary-value">₹{discountTotal}</span>
        </div>
        <div className="summary-card summary-card-total">
          <span className="summary-label">OVERALL TOTAL</span>
          <span className="summary-value">₹{overallTotal}</span>
        </div>
      </div>
    </section>
  );
}

export default OrderSummary;
