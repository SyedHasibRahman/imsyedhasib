import React from 'react';
import './Banner.css';
import Typewriter from 'typewriter-effect'


const Banner = () => {
    return (
        <div className="Banner" style={ {
            // backgroundImage: 
        } }>
            <div className="container">
                <div className="row d-flex justify-content-end align-items-center">
                    <div className="col-sm-12 col-md-6 md-py-5">
                        <h2 className="h2">Hello, I'm SyedHasib</h2>
                        <h1 className="h1">Full Stack Web</h1>
                        <h1 className="h1">
                            <Typewriter
                                options={ {
                                    strings: ['Developer ', 'Engineer'],
                                    autoStart: true,
                                    loop: true,
                                } }
                            />
                        </h1>
                        <p>I work on with digital startups and entreprenurs on design and branding.need help on your project? </p>

                        <div className="btn btn-default filter-button main-btn"><a href="https://drive.google.com/file/d/1RxShG4vV-iEA9Jwl6ZQBaoJr_Z6pfjVt/view" target="_blank" rel="noreferrer">Download Resume</a></div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        {/* <img className="img-fluid" src="http://wordpressboss.com/cp/reanan-demo/assets/images/me.png" alt="" /> */ }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;