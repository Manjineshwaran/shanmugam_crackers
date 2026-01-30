import React, { useState, useCallback, useMemo } from 'react';
import Header from './components/Header/Header';
import ContactBar from './components/ContactBar/ContactBar';
import InfoSection from './components/InfoSection/InfoSection';
import Announcements from './components/Announcements/Announcements';
import DiwaliBanner from './components/DiwaliBanner/DiwaliBanner';
import OrderSummary from './components/OrderSummary/OrderSummary';
import SearchBar from './components/SearchBar/SearchBar';
import ProductTable from './components/ProductTable/ProductTable';
import ScrollButtons from './components/ScrollButtons/ScrollButtons';
import Footer from './components/Footer/Footer';
import { PRODUCTS } from './data/products';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState({});

  const handleQuantityChange = useCallback((productId, quantity) => {
    setCart((prev) => ({
      ...prev,
      [productId]: quantity === 0 ? undefined : quantity,
    }));
  }, []);

  const handleRefresh = useCallback(() => {
    setSearchQuery('');
  }, []);

  const { totalProducts, discountTotal, overallTotal } = useMemo(() => {
    let products = 0;
    let total = 0;
    PRODUCTS.forEach((p) => {
      const qty = cart[p.id] || 0;
      if (qty > 0) {
        products += qty;
        total += qty * p.discPrice;
      }
    });
    const listTotal = PRODUCTS.reduce(
      (sum, p) => sum + (cart[p.id] || 0) * p.listPrice,
      0
    );
    const discountTotalVal = listTotal - total;
    return {
      totalProducts: products,
      discountTotal: discountTotalVal,
      overallTotal: total,
    };
  }, [cart]);

  return (
    <div className="app" id="top">
      <Header mobileMenuOpen={mobileMenuOpen} onToggleMenu={() => setMobileMenuOpen((o) => !o)} />
      <ContactBar />
      <InfoSection />
      <Announcements />
      <DiwaliBanner />
      <OrderSummary
        totalProducts={totalProducts}
        discountTotal={discountTotal}
        overallTotal={overallTotal}
      />
      <SearchBar value={searchQuery} onChange={setSearchQuery} onRefresh={handleRefresh} />
      <ProductTable
        cart={cart}
        onQuantityChange={handleQuantityChange}
        searchQuery={searchQuery}
      />
      <Footer />
      <ScrollButtons />
    </div>
  );
}

export default App;
