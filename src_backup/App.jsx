// App.jsx (React + Vite compatible)

import "./App.css";

export default function App() {
  return (
    <>
      {/* Header & Navigation */}
      <header className="navbar">
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" />
          <span>Matrix</span>
        </div>

        <button className="menu-toggle">&#9776;</button>

        <nav>
          <a href="#">Home</a>
          <a href="#about">About</a>

          <details className="dropdown">
            <summary>Services</summary>
            <div className="menu">
              <a href="#">Hair Cutting</a>
              <a href="#">Hair Coloring</a>
            </div>
          </details>

          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="images">
          <img src="/images/front1.jpg" className="fade" />
          <img src="/images/front2.jpg" className="fade" />
        </div>
        <div className="overlay">
          <h1>Fascinating than any fashion salon</h1>
          <a href="#" className="btn">Book Now</a>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Services</h2>
        <div className="service-cards">
          <div className="card">
            <img src="/images/haircut.jpg" />
            <h3>Haircut</h3>
            <p>₹250</p>
          </div>
          <div className="card">
            <img src="/images/trimming.jpg" />
            <h3>Trimming</h3>
            <p>₹300</p>
          </div>
          <div className="card">
            <img src="/images/shaving.jpg" />
            <h3>Shaving</h3>
            <p>₹250</p>
          </div>
          <div className="card">
            <img src="/images/coloring.jpg" />
            <h3>Coloring</h3>
            <p>₹2500</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="about-text">
          <h3>Good Hair Style <br /> Good Selfie</h3>
          <p>
            Running a salon successfully means combining luxury, style and
            professional service to create confidence and beauty.
          </p>
          <a href="#contact" className="about-btn">ENQUIRIES</a>
        </div>
        <div className="about-image">
          <img src="/images/trimmer.png" />
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="team-card">
          <img src="/images/owner.jpg" />
          <h3>Virendra Singh</h3>
          <p>CEO & Founder</p>
        </div>
        <div className="team-card">
          <img src="/images/manager.jpg" />
          <h3>Prachi Garg</h3>
          <p>Manager</p>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>SEND</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© Matrix Salon. All Rights Reserved.</p>
      </footer>
    </>
  );
}
