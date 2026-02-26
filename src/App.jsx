import React from 'react';
import './index.css';

import Navbar from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import PerfectStyle from './components/PerfectStyle';
import Team from './components/Team';
import CustomerStyle from './components/CustomerStyle';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <About />
            <PerfectStyle />
            <Team />
            <CustomerStyle />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
