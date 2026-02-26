import React, { useState } from 'react';

const Contact = () => {
    const [formStatus, setFormStatus] = useState({ text: '', color: '' });

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const message = e.target.message.value;

        setFormStatus({ text: 'Sending...', color: 'blue' });

        const API_BASE_URL = (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') && window.location.port !== '3000'
            ? 'http://localhost:3000'
            : '';

        try {
            const response = await fetch(`${API_BASE_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone, message })
            });

            if (response.ok) {
                setFormStatus({ text: 'Message sent successfully!', color: 'green' });
                e.target.reset();
            } else {
                setFormStatus({ text: 'Failed to send message.', color: 'red' });
            }
        } catch (error) {
            console.error('Error:', error);
            setFormStatus({ text: 'An error occurred.', color: 'red' });
        }
    };

    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-subtitle">We would love to hear from you!</p>
            <form className="contact-form" id="contactForm" onSubmit={handleContactSubmit}>
                <div className="form-left">
                    <input type="text" id="name" placeholder="Your Name *" required />
                    <input type="email" id="email" placeholder="Your Email *" required />
                    <input type="tel" id="phone" placeholder="Your Phone *" required />
                </div>
                <div className="form-right">
                    <textarea id="message" placeholder="Your Message *" required></textarea>
                </div>
                <div className="form-footer" style={{ width: '100%', textAlign: 'center' }}>
                    <button type="submit" className="submit-btn">SEND MESSAGE</button>
                    <p id="formStatus" style={{ marginTop: '10px', fontWeight: 'bold', color: formStatus.color }}>{formStatus.text}</p>
                </div>
            </form>
            <div className="decor decor-left"></div>
            <div className="decor decor-right"></div>
        </section>
    );
};

export default Contact;
