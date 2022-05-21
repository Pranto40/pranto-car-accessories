import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto px-12 mt-16'>
            <Banner />
            <Footer />
        </div>
    );
};

export default Home;