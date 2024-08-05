import React from 'react';
import './style.css';
import Layout from '../layout.js';

const About = () => {
    return (
        <Layout>
            <div className="About">
                <h1>¿Quienes somos?</h1>
                <div className="team-container">
                    <div className="team-member">
                        <div className="photo" />
                        <p>Eitan</p>
                    </div>
                    <div className="team-member">
                        <div className="photo" />
                        <p>Emi</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About;
