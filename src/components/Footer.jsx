import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-section address">
                        <h4>Address</h4>
                        <p><a href="#">Matrix Creato Salon, 2nd floor, mall ( INOX Building, Sapna Sangeeta Rd, Snehnagar, Indore, Madhya Pradesh 452001)</a></p>
                        <p><i className="fa fa-phone"></i> +012 345 67890</p>
                        <p><i className="fa fa-envelope"></i> info@example.com</p>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/matrix_creato_salon/"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="footer-section links">
                        <h4>Quick Links</h4>
                        <a href="#">About Us</a>
                        <a href="#contact">Contact Us</a>
                        <a href="#services">Our Services</a>
                        <a href="#">Terms & Condition</a>
                        <a href="#">Support</a>
                    </div>
                    <div className="footer-section links">
                        <h4>Popular Links</h4>
                        <a href="#">About Us</a>
                        <a href="#contact">Contact Us</a>
                        <a href="#services">Our Services</a>
                        <a href="#">Terms & Condition</a>
                        <a href="#">Support</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; Matrix Creato Salon, All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
