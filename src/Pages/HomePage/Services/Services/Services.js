import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div className="BodySecondary py-5" id="Services">
            <div className="container">
                <h2 className="text-center py-3">My Awesome Service</h2>
                <p className="text-center py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                <div className="row g-5">
                    <div className="col-md-4">
                        <div className="text-center Card-bg service-card">
                            <span className="card-icon"><i class="fas fa-file-code mb-3"></i></span>
                            <h3>Website Design</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate consequatur iste, nihil itaque sit debitis?</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center Card-bg service-card">
                            <span className="card-icon"><i class="fas fa-laptop-code mb-3"></i></span>
                            <h3>Web Development</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate consequatur iste, nihil itaque sit debitis?</p>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="text-center service-card">
                            <span className="card-icon"><i class="fab fa-react mb-3"></i></span>
                            <h3>Full Stack Apllication</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate consequatur iste, nihil itaque sit debitis?</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center Card-bg service-card">
                            <span className="card-icon"><i class="fas fa-database mb-3"></i></span>
                            <h3>Software Development</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate consequatur iste, nihil itaque sit debitis?</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center Card-bg service-card">
                            <span className="card-icon"><i class="fas fa-mobile-alt mb-3"></i></span>
                            <h3>Mobile Aplication</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate consequatur iste, nihil itaque sit debitis?</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center Card-bg service-card">
                            <span className="card-icon"><i className="fas fa-business-time mb-3"></i></span>
                            <h3>Business Stratagy</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate consequatur iste, nihil itaque sit debitis?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Services;