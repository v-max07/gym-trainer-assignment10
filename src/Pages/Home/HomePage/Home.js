import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Classes from '../Classes/Classes';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Classes></Classes>
            <Services></Services>
        </div>
    );
};

export default Home;