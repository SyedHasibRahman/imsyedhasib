import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className="">
            <div className="container py-5">
                <div className="row d-flex align-items-center">
                    <div className="cols-6 col-md-3">
                        <h2>SyedHasib</h2>
                    </div>
                    <div className="cols-6 col-md-3">
                        <h4>TRAINING & INTERNSHIP :</h4>
                        <p>Complete Web Development Course with (Jhankar Mahbub)</p>
                        <p>Training with Live Project (PHP, MySQL(CRUD)), Bangla Software
                            Development</p>
                    </div>
                    <div className="cols-6 col-md-3">
                        <h4>Education:</h4>
                        <p>Bachelor’s Degree in Computer Science</p>
                        <p>Diploma’s in Electrical Engineering</p>
                        <p>H.S.C</p>
                        <p>S.S.C</p>
                    </div>
                    <div className="cols-12 col-md-3">
                        <h4>CONTACT</h4>
                        <p> Dhanmondi 32, Dhaka</p>
                        <p> Sonadanga, Khulna</p>
                        <p> <a href="tel:+8801521312761" className="text-green text-decoration-none">+88 0152131 2761</a></p>
                        <p> <a href="mailto: isyedhasib@gmail.com" className="text-green text-decoration-none">isyedhasib@gmail.com</a></p>
                    </div>
                </div>
            </div>
            <div className="copyright bg-light text-center py-2">
                <p>© 2021. All rights reserved by <Link className="text-green fw-bolder text-decoration-none" to="#home">SyedHasib.</Link></p>
            </div>
        </footer>
    );
};

export default Footer;