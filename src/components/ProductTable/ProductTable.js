import React from 'react';
import { PRODUCT_CATEGORIES, PRODUCTS } from '../../data/products';
import './ProductTable.css';

function ProductTable({ cart, onQuantityChange, searchQuery }) {
  const query = (searchQuery || '').trim().toLowerCase();
  const filteredProducts = query
    ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(query))
    : PRODUCTS;

  const getProductsByCategory = (categoryId) =>
    filteredProducts.filter((p) => p.categoryId === categoryId);

  const renderQuantityControl = (product) => {
    const qty = cart[product.id] || 0;
    const amount = qty * product.discPrice;
    return (
      <div className="quantity-control">
        <button
          type="button"
          className="qty-btn qty-minus"
          onClick={() => onQuantityChange(product.id, Math.max(0, qty - 1))}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <input
          type="number"
          className="qty-input"
          value={qty || ''}
          min={0}
          onChange={(e) => {
            const v = parseInt(e.target.value, 10);
            onQuantityChange(product.id, isNaN(v) ? 0 : Math.max(0, v));
          }}
          aria-label={`Quantity for ${product.name}`}
        />
        <button
          type="button"
          className="qty-btn qty-plus"
          onClick={() => onQuantityChange(product.id, qty + 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
        <span className="row-amount">₹{amount}</span>
      </div>
    );
  };

  const renderProductRow = (product, sno) => (
    <tr key={product.id} className="product-row">
      <td className="col-sno">{sno}</td>
      <td className="col-image">{product.image ? <img src={product.image} alt="" /> : '—'}</td>
      <td className="col-name">{product.name}</td>
      <td className="col-list-price">
        <span className="strike">₹{product.listPrice}</span>
      </td>
      <td className="col-disc-price">₹{product.discPrice}</td>
      <td className="col-required">{renderQuantityControl(product)}</td>
    </tr>
  );

  return (
    <section className="product-table-section" id="products">
      <div className="product-table-inner">
        <div className="categories-label" id="categories">
          ≡ CATEGORYS
        </div>
        <div className="table-wrapper">
          <table className="product-table">
            <thead>
              <tr>
                <th className="col-sno">SNo</th>
                <th className="col-image">IMAGE</th>
                <th className="col-name">NAME OF PRODUCT</th>
                <th className="col-list-price">LIST PRICE</th>
                <th className="col-disc-price">DISC PRICE</th>
                <th className="col-required">REQUIRED / Amount</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCT_CATEGORIES.map((cat) => {
                const products = getProductsByCategory(cat.id);
                if (products.length === 0) return null;
                return (
                  <React.Fragment key={cat.id}>
                    <tr className="category-row">
                      <td colSpan={6}>{cat.name}</td>
                    </tr>
                    {products.map((p, i) => renderProductRow(p, i + 1))}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ProductTable;
