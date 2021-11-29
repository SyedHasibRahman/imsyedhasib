import React from 'react';
import Typewriter from 'typewriter-effect';

const AboutMe = () => {
    return (
        <div className="py-5" id="aboutme">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center py-5">
                    <div className="col-12 col-md-6">
                        <img className="img-fluid" src="https://images.unsplash.com/photo-1555066931-bf19f8fd1085" alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h2>
                            <Typewriter
                                options={ {
                                    strings: ['MERN Stack Web Developer ', 'Full Stack Software Engineer'],
                                    autoStart: true,
                                    loop: true,
                                } }
                            />
                        </h2>
                        <p className="text-green"> I have developed One Page Website, Full Stack Web Aplication, eCommerce, Doctor Portals, Portfolio websites, Service and more for various purposes . As a MERN Stack Developer I have Used Javascript, Reactjs, NodeJs, ExpressJS, Firebase, MongoDB, Heroku, emailJs, jwt token and many more in my Project.</p>
                        <table className="table table-striped table-hover text-white">
                            <thead>
                                <tr>
                                    <td>TECHNICAL SKILLS</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-success">
                                        <ol>
                                            <li>JavaScript</li>
                                            <li>TypeScript</li>
                                            <li>React.js , Node.JS , Express.js</li>
                                            <li>React Rouer, EmailJS</li>
                                            <li>Mongo DB</li>
                                            <li>Firebase</li>
                                            <li>HTML5, CSS3,
                                                Bootstrap, Tailwind CSS
                                            </li>
                                            <li>Git & Github</li>
                                            <li>Material UI & More...</li>
                                        </ol>
                                    </td>
                                    <td className="text-success">
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;