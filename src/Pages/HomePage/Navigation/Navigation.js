import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="container py-5" id="home">
            {/* https://www.youtube.com/watch?v=FIcIFNeOOSY */ }
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container">
                        <Link smooth className="navbar-brand fw-bolder" to="#home">SyedHasib</Link >
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link smooth className="nav-link active" aria-current="page" to="#home">Home</Link >
                                </li>
                                <li className="nav-item">
                                    <Link smooth className="nav-link" to="/#aboutme">About Me</Link >
                                </li>
                                <li className="nav-item">
                                    <Link smooth className="nav-link" to="/#Services">Services</Link >
                                </li>
                                <li className="nav-item">
                                    <Link smooth className="nav-link" to="/#Projects">Projects</Link >
                                </li>
                                <li className="nav-item">
                                    <Link smooth className="nav-link" to="/#Hireme">Contact</Link >
                                </li>
                                <li className="nav-item">
                                    <Link smooth className="nav-link text-danger" to="">
                                        <span className="text-info fw-bold">Info:</span> Under Development </Link >
                                </li>
                            </ul>
                            <div className="nav-icon">
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/syedhasibrahman/">
                                    <span><i className="fab fa-linkedin"></i></span>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://twitter.com/syedhasib01">
                                    <span><i className="fab fa-twitter-square"></i></span>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/syedhasibrahman/">
                                    <span><i className="fab fa-instagram"></i></span>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/SyedHasibRahman/">
                                    <span><i className="fab fa-facebook-square"></i></span>
                                </a>
                                {/* <a target="_blank" rel="noreferrer" href="https://www.facebook.com/SyedHasibRahman/">
                                    <span><i className="fab fa-whatsapp-square"></i></span>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    );
};

export default Navigation;