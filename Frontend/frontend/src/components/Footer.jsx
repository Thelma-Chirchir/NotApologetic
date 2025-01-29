// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 text-center">
      <p>&copy; 2025 NotApologetic. All rights reserved.</p>
      <p>
        <a
          href="https://www.facebook.com/NotApologeticStudios?mibextid=wwXIfr"
          className="mx-2"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/notapologetic?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
          className="mx-2"
        >
          Instagram
        </a>
        <a href="https://amazon.com" className="mx-2">
          Amazon
        </a>
      </p>
    </footer>
  );
};

export default Footer;
