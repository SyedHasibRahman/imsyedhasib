import React from 'react';
import ContactMe from './ContactMe';

const Hireme = () => {

    return (
        <div className="BodySecondary text-white py-5" id="Hireme">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 cols-12">
                        <h2>Hire me</h2>
                        <hr className="fw-bolder" />
                        <hr className="fw-bolder" />
                        <p>I am available for freelance work. Connect with me <br /> via phone: <a href="tel:+8801521312761" className="text-green text-decoration-none">+88 0152131 2761</a> <br /> or Email: <a href="mailto: isyedhasib@gmail.com" className=" text-green text-decoration-none">isyedhasib@gmail.com</a></p>
                        <hr className="fw-bolder" />
                        <hr className="fw-bolder" />
                    </div>
                    <div className="col-md-6 cols-12">
                        <ContactMe />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hireme;