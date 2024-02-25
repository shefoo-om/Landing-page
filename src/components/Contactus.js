import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faInstagram, faFacebook, faLinkedin, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
function Contactus() {
    return (
        <div className="contactus pt-5 pb-1" id="contactus">
            <div className="container">
                <div className="row contact-section" >
                    {/* about us */}
                    <div className="col-xl-4 col-md-4  about-us">
                        <div>
                            <h3>About Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis, mauris vel volutpat vestibulum, velit ipsum ullamcorper libero, ac aliquam tortor purus ac lorem
                                . adipiscing elit. Nulla sagittis, mauris vel </p>
                        </div>
                        <div className="social-contact  m-3 d-flex justify-content-around">
                            <FontAwesomeIcon className="youtube-icon" icon={faYoutube} />
                            <FontAwesomeIcon className="facebook-icon" icon={faFacebook} />
                            <FontAwesomeIcon className="linked-icon" icon={faLinkedin} />
                            <FontAwesomeIcon className="insta-icon" icon={faInstagram} />
                            <FontAwesomeIcon className="whatsapp-icon" icon={faWhatsapp} />
                        </div>
                    </div>
                    {/* links */}
                    <div className="col-xl-4 col-md-4  links-us">
                        <h3>Quick Links</h3>
                        <ul className="list-links">
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <a href="#plans">Plans</a>
                            </li>
                            <li>
                                <a href="#team">Our Team</a>
                            </li>
                            <li>
                                <a href="#whyus">Why us</a>
                            </li>
                        </ul>
                    </div>
                    {/* contact  */}
                    <div className="col-xl-4 col-md-4  contact-us">
                        <h3>Contact Us</h3>
                        <div className="row mt-4">
                            <FontAwesomeIcon icon={faLocationDot} className="col-2 add-contact" />
                            <p className=" col-8 text-start">474 Ahmed Orabi,<br /> New York , US </p>
                        </div>
                        <div className="row mt-3">
                            <FontAwesomeIcon icon={faPhone} className="col-2 add-contact" />
                            <p className="col-8 text-start">+1234567890 <br />+1234567798 </p>
                        </div>
                        <div className="row mt-3">
                            <FontAwesomeIcon icon={faEnvelope} className="col-2 add-contact" />
                            <p className="col-8 text-start">sheefoo@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-12 col-md-12 pt-3 footer ">
                <p className="text-center">&copy; 2024 <span>Omar Gado</span> , All rights reserved.</p>
            </div>
        </div>
    )
}

export default Contactus