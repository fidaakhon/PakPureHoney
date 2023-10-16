// AboutUs.js
import React from 'react';
// import styles from './AboutUs.module.css'; // Import CSS module
import './AboutUs.css'; // Import CSS file
import truck from '../Images/truck.svg';
import Thanks from '../Images/5229524.png';

const AboutUs = () => {
    return (
        <section className="aboutUs">
            <h2>About Us</h2>
            <div className='about_info'>
                <p>
                    Welcome to PakPureHoney.pk, your trusted source for pure and natural honey in Pakistan!
                </p>
                <p>
                    At PakPure Honey, we take pride in delivering high-quality honey products sourced from the finest beekeepers across Pakistan. Our mission is to bring the goodness of pure honey to every household, promoting a healthy lifestyle.
                </p>
            </div>
            <div className="whyChoose">
                <h3>Why Choose PakPure Honey?</h3>
                <ul>
                    <li><span>100% Pure and Natural:</span> Our honey is free from additives and preservatives, ensuring you get the purest form of nature's sweetness.</li>
                    <li><span>Locally Sourced:</span> <br /> We support local beekeepers, contributing to the sustainable development of our communities.</li>
                    <li><span>Delivery Across Pakistan:</span> No matter where you are in Pakistan, we can deliver our premium honey products right to your doorstep.</li>
                    <li><span>Customer Satisfaction:</span> Your satisfaction is our priority. We strive to provide excellent products and customer service.</li>
                </ul>
            </div>
            <div className="deliveryInfo">
                <h3>Delivery Information</h3>
                <div className="deliveryInfo__info">
                    <img src={truck} alt="truck" className='truck' />
                    <p>
                        We are proud to offer delivery services to every area of Pakistan. Whether you're in the bustling city or a remote village, we'll make sure you receive your order promptly. Our dedicated delivery team is committed to ensuring that you get the best honey delivered with care.
                    </p>
                </div>
            </div>
            <div className='Tnankyou'>
                <img src={Thanks} alt="Thanks" />
                <p className='Thanks'>
                    Thank you for choosing PakPure Honey. Experience the natural goodness of honey with us!
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
