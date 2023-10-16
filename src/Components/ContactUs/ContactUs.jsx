// Note for Buying and Ordering
import React from 'react';
import './ContactUs.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Facebook from '../Images/facebook.png';
import Youtube from '../Images/youtube.png';

const ContactUs = () => {
    return (

        <div className="contactUs">
            <h2>
                Contact Us
            </h2>
            <div className="contactNote">
                <h5>
                    For Buying and Ordering
                </h5>
                <p>
                    We are here to assist you with your honey purchase! Feel free to reach out to us through any of the following channels:
                </p>
                <div className='contacts'>
                    <p>
                        <WhatsAppIcon />:<strong>+92 123 456 789</strong>.
                    </p>
                    <p>
                        <EmailIcon /> : <strong>info@pakpurehoney.com</strong>.
                    </p>
                    <p>
                        <CallIcon />:<strong>+92 123 456 789</strong>.
                    </p>
                </div>
                <div>
                    <p>
                        You can contact us through our social media accounts as well:
                    </p>
                    <div className='socialMedia'>
                        <a href='https://www.facebook.com/pakpurehoney'>
                            <img src={Facebook} alt='facebook' />
                        </a>
                        <a href='https://www.youtube.com/pakpurehoney'>
                            <img src={Youtube} alt='youtube' />
                        </a>
                    </div>
                    <p>
                        We look forward to serving you and providing you with the finest honey products!
                    </p>
                </div>
            </div>
        </div >
    );
};

export default ContactUs;
