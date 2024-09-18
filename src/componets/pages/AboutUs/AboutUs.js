import React from 'react';
import './AboutUs.css';
import miya from '../../../Asset/Images/miya.jpg';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-us-container">
                <div className="about-us-image">
                    <img src={miya} alt="Our Team" />
                </div>
                <div className="about-us-text">
                    <h1>About Us</h1>
                    <p>
                        Welcome to our company! We are a passionate team dedicated to providing
                        the best services to our clients. Our mission is to deliver exceptional
                        quality and create lasting relationships.
                    </p>
                    <p>
                        Our team of professionals is committed to innovation and excellence,
                        ensuring that we stay ahead in the industry while always putting our
                        customers first.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
