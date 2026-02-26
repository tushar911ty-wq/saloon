import React from 'react';

const About = () => {
    return (
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
    );
};

export default About;
