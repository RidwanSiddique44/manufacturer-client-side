import React from 'react';
import Banner from './Banner/Banner';
import Contact from './ExtraSection/Contact';
import Extra from './ExtraSection/Extra';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="divider font-bold">Our Marketplace</div>
            <Extra></Extra>
            <div className="divider font-bold">Send Your Feedback</div>
            <Contact></Contact>

        </div>
    );
};

export default Home;