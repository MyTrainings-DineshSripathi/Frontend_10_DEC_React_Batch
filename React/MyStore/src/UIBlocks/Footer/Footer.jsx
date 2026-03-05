import React from 'react'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section brand">
            <h2 className="footer-logo">YourStore</h2>
            <p className="footer-description">
            Premium quality products crafted with care. Shop smart. Live better.
            </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Offers</a></li>
            </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-section">
            <h3>Support</h3>
            <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Returns</a></li>
            </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
            <h3>Subscribe</h3>
            <p>Get updates about new products & offers.</p>
            <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
            </div>
        </div>

        </div>

        <div className="footer-bottom">
        <p>© {new Date().getFullYear()} YourStore. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer