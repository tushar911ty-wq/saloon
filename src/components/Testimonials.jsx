import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const slidesCount = 3;

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

    return (
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
    );
};

export default Testimonials;
