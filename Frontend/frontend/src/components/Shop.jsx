import React from "react";
import "./Pages.css";

const Shop = () => {
  return (
    <div className="shop">
      <h1>Shop Our Collection</h1>
      <div className="product-grid">
        <div className="product-card">
          <img src="hat.jpg" alt="Hat" />
          <h3>Stylish Hat</h3>
          <p>$25.00</p>
        </div>
        <div className="product-card">
          <img src="sweater.jpg" alt="Sweater" />
          <h3>Cozy Sweater</h3>
          <p>$40.00</p>
        </div>
        <div className="product-card">
          <img src="leggings.jpg" alt="Leggings" />
          <h3>Comfortable Leggings</h3>
          <p>$30.00</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
