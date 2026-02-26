import React from 'react';

const Services = () => {
    return (
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
    );
};

export default Services;
