import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
    const [navOpen, setNavOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [formStatus, setFormStatus] = useState({ text: '', color: '' });
    const [isPaused, setIsPaused] = useState(false);

    const slidesCount = 3;

    useEffect(() => {
        const handleClick = (e) => {
            document.querySelectorAll('details.dropdown[open]').forEach((d) => {
                if (!d.contains(e.target)) d.removeAttribute('open');
            });
        };
        const handleKeydown = (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('details.dropdown[open]').forEach((d) => {
                    d.removeAttribute('open');
                });
            }
        };
        document.addEventListener('click', handleClick);
        document.addEventListener('keydown', handleKeydown);
        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slidesCount);
        }, 5000);
        return () => clearInterval(timer);
    }, [isPaused]);

    const goToSlide = (index) => {
        setCurrentSlide((index + slidesCount) % slidesCount);
    };

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
        <>
            <header className="navbar">
                <div className="logo">
                    <img src="/images/logo_10-removebg-preview.png" alt="Logo" />
                    matrix
                </div>
                <button className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>&#9776;</button>
                <nav className={navOpen ? "show" : ""}>
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <details className="dropdown">
                        <summary>Services</summary>
                        <div className="menu">
                            <a href="#services">Hair cutting</a>
                            <a href="#services">Hair Coloring</a>
                        </div>
                    </details>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <section className="hero">
                <div className="images">
                    <img src="/images/front 1.jpg" alt="Salon Image 1" className="fade" />
                    <img src="/images/front 2.jpg" alt="Salon Image 2" className="fade" />
                </div>
                <div className="overlay">
                    <h1>Fascinating than any fashion salon</h1>
                    <a href="#contact" className="btn">Book Now</a>
                </div>
            </section>

            <section id="services" className="services">
                <h2>Services</h2>
                <div className="underline"></div>
                <div className="service-cards">
                    <div className="card">
                        <img src="/images/hair cutting.jpg" alt="Haircut" />
                        <div className="info">
                            <h3>Haircut</h3>
                            <p>₹250</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/images/treaming.webp" alt="Treaming" />
                        <div className="info">
                            <h3>Treaming</h3>
                            <p>₹300</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/images/shaving.jpg" alt="Shaving" />
                        <div className="info">
                            <h3>Shaving</h3>
                            <p>₹250</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/images/colouring.jpg" alt="Coloring" />
                        <div className="info">
                            <h3>Coloring</h3>
                            <p>₹2,500</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="about">
                <h2 className="section-title">About Us</h2>
                <div className="underline"></div>
                <div className="about-content">
                    <div className="about-text">
                        <h3>Good Hair style <br /> Good Selfie</h3>
                        <p>
                            Running a salon successfully might not even seem very much managerial,
                            but do not be fooled. Making up a winning salon simply means tying all
                            the various aspects of luxury, style and beauty. Interior design is one
                            of the factors that really encompass not just the layout of the salon
                            but also the furniture of the salon as well.
                        </p>
                        <a href="#contact" className="about-btn">ENQUIRIES</a>
                    </div>
                    <div className="about-image">
                        <img src="/images/trimmer_set-removebg-preview.png" alt="Trimmer" />
                    </div>
                </div>
            </section>

            <div className="hero1">
                <div className="text-box">
                    <h2>Perfect Style</h2>
                    <p>
                        Its professional salon really offers a very large number of various
                        different kinds of treatments and each and every treatment come
                        with corresponding furniture of the salon. all, products and
                        treatments are really important aspects of the salon experience.
                    </p>
                </div>
            </div>

            <section className="team-section">
                <div className="team-card">
                    <div className="team-img">
                        <img src="/images/owner.jpg" alt="Founder" />
                        <div className="overlay">
                            <div className="icon-wrapper">
                                <a href="#"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <h3>virendra singh</h3>
                    <p>CEO & Co-founder</p>
                </div>

                <div className="team-card">
                    <div className="team-img">
                        <img src="/images/manager.jpg" alt="Manager" />
                        <div className="overlay">
                            <div className="icon-wrapper">
                                <a href="https://www.instagram.com/_garg.prachi_/?igsh=MWwyOHc4cWh2eDBuaA%3D%3D#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <h3>Prachi Garg</h3>
                    <p>Manager</p>
                </div>
            </section>

            <section className="customer-style">
                <h2>Our Customer Style</h2>
                <div className="image-grid">
                    <div className="image-box"><img src="/images/IMG-20250906-WA0002.jpg" alt="Customer 1" /></div>
                    <div className="image-box"><img src="/images/wtap 1.jpg" alt="Customer 2" /></div>
                    <div className="image-box"><img src="/images/IMG-20250906-WA0003.jpg" alt="Customer 3" /></div>
                    <div className="image-box"><img src="/images/wtap 2.jpg" alt="Customer 4" /></div>
                    <div className="image-box"><img src="/images/wtap 3.jpg" alt="Customer 5" /></div>
                    <div className="image-box"><img src="/images/IMG-20250906-WA0006.jpg" alt="Customer 6" /></div>
                    <div className="image-box"><img src="/images/wtap 4.jpg" alt="Customer 7" /></div>
                    <div className="image-box"><img src="/images/IMG-20250906-WA0004.jpg" alt="Customer 8" /></div>
                </div>
            </section>

            <section className="testimonial-section" id="testimonials">
                <div className="slider-viewport" id="viewport" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                    <div className="slider-track" id="track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        <div className="slide">
                            <article className="t-card">
                                <div className="avatar">
                                    <img src="/images/GOPR0736.JPG" alt="Rahul Singh" />
                                </div>
                                <div className="t-text">
                                    <p>If you are going to have a successful beauty salon, then you must have beauty salon equipment.</p>
                                    <h4>Rahul Singh <span> - india</span></h4>
                                </div>
                            </article>
                        </div>
                        <div className="slide">
                            <article className="t-card">
                                <div className="avatar">
                                    <img src="/images/IMG-20250906-WA0004.jpg" alt="Bhuwan Shah" />
                                </div>
                                <div className="t-text">
                                    <p>Style of a salon by the kind of furniture that it makes use of. Hence it is important to select the right kind of salon furniture.</p>
                                    <h4>Bhuwan Shah <span> - india</span></h4>
                                </div>
                            </article>
                        </div>
                        <div className="slide">
                            <article className="t-card">
                                <div className="avatar">
                                    <img src="/images/IMG-20250906-WA0006.jpg" alt="Amit Verma" />
                                </div>
                                <div className="t-text">
                                    <p>A salon is more than a place for beauty treatments—it’s where customers feel confident and rejuvenated.</p>
                                    <h4>Amit Verma <span> - india</span></h4>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="controls">
                    <button className="arrow" id="prev" aria-label="Previous" onClick={() => goToSlide(currentSlide - 1)}>
                        <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <div className="dots" id="dots">
                        {[0, 1, 2].map((i) => (
                            <span key={i} className={`dot ${i === currentSlide ? 'active' : ''}`} onClick={() => goToSlide(i)}></span>
                        ))}
                    </div>
                    <button className="arrow" id="next" aria-label="Next" onClick={() => goToSlide(currentSlide + 1)}>
                        <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" /></svg>
                    </button>
                </div>
            </section>

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
        </>
    );
}

export default App;
