import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BestSeller from './BestSeller';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto px-12 mt-16'>
            <Banner />
            <BestSeller />
            <BusinessSummary />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;