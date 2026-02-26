import React from 'react';

const Team = () => {
    return (
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
    );
};

export default Team;
