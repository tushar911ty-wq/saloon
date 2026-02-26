import React from 'react';

const Hero = () => {
    return (
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
    );
};

export default Hero;
