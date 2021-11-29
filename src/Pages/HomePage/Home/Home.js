import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Galleries from '../Gallery/Galleries/Galleries';
import Hireme from '../Hireme/Hireme';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services/Services';

const Home = () => {

    return (
        <div>
            <Navigation />
            <Banner />
            <AboutMe />
            <Services />
            <Galleries />
            <Hireme />
            <Footer />
        </div>
    );
};

export default Home;