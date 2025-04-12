import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import './index.css';

const Footer = () => (
<footer className="footer">
<div className="top-section">
<div className="newsletter">
<h3>BE THE FIRST TO KNOW</h3>
<p>Sign up for updates from mettā muse.</p>
<div className="newsletter-input">
<input type="email placeholder=Enter your e-mail... "/>
<button className='button'>SUBSCRIBE</button>
</div>
</div>

<div className="contact-currency">
<div className="contact">
<h4>CONTACT US</h4>
<p>+44 221 133 5360</p>
<p>customercare@mettamuse.com</p>
</div>
<div className="currency">
<h4>CURRENCY</h4>
<p>🇺🇸 USD</p>
<small>
Transactions will be done in Euros and you can see the currency info on hover.
</small>
</div>

</div>
</div>

<hr />

<div className="bottom-section">
<div className="footer-column">
<h4>mettā muse</h4>
<ul>
<li>About Us</li>
<li>Stories</li>
<li>Artisans</li>
<li>Boutiques</li>
<li>Contact Us</li>
<li>EU Compliance Docs</li>
</ul>
</div>

<div className="footer-column">
<h4>QUICK LINKS</h4>
<ul>
<li>Orders & Shipping</li>
<li>Join/Login as a Seller</li>
<li>Payment & Pricing</li>
<li>Return & Refunds</li>
<li>FAQs</li>
<li>Privacy Policy</li>
<li>Terms & Conditions</li>
</ul>
</div>

<div className="footer-column follow-us">
<h4>FOLLOW US</h4>
<div className="social-icons">
<FaInstagram className='icon'/>
<FaLinkedin className='icon'/>
</div>
<h4>mettā muse ACCEPTS</h4>
<div className="payment-icons">
<img src="https://img.icons8.com/color/48/google-pay.png" alt="Google Pay" />
<img src="https://img.icons8.com/color/48/mastercard.png" alt="MasterCard" />
<img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
<img src="https://img.icons8.com/color/48/amex.png" alt="Amex" />
<img src="https://img.icons8.com/color/48/apple-pay.png" alt="Apple Pay" />
<img src="https://img.icons8.com/color/48/shopify.png" alt="Shopify Pay" />
</div>
</div>
</div>

<div className="copyright">
Copyright © 2023 mettamuse. All rights reserved.
</div>
</footer>
);

export default Footer;