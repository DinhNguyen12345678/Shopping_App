import React from 'react';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import logo from '../../../../../assets/images/logo.png'

function AboutPart() {
    return (
        <div className="about__information">
            <div className="about__information-title">
                <h1>About Us</h1>
            </div>
            <div className="about__information-paragraph">
                <div className="paragraph--logo">
                    <img src={logo} alt="" />
                    <span>
                        Team 1781
                    </span>
                </div>
                <div className="paragraph--text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quam quidem voluptatem architecto sapiente quae, obcaecati 
                    fugit corporis eaque mollitia soluta labore, molestias fugiat 
                    eligendi dolor accusamus, nulla praesentium sed alias.
                </div>
            </div>
            <div className="about__information-contact">
                <ul className="contact-list">
                    <li className="contact-item">
                        <a href="/" className="contact-link">
                            <BsFacebook />
                        </a>
                    </li>
                    <li className="contact-item">
                        <a href="/" className="contact-link">
                            <BsInstagram />
                        </a>
                    </li>
                    <li className="contact-item">
                        <a href="/" className="contact-link">
                            <FaTiktok />
                        </a>
                    </li>
                    <li className="contact-item">
                        <a href="/" className="contact-link">
                            <BsYoutube />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutPart;