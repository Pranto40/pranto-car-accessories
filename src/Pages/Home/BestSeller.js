import React from 'react';
import BestSellerDetails from './BestSellerDetails';

const BestSeller = () => {
    return (
        <div>
            <div className='text-center'>
               <h1 className='text-2xl font-bold my-2'>BEST SELLER</h1>
               <p>All best seller product are now available for you and your can buy this product from <br />here any time any where so sop now</p>
            </div>
            <div className='my-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                <BestSellerDetails name="" price="200"></BestSellerDetails>
                <BestSellerDetails name="" price="300"></BestSellerDetails>
                <BestSellerDetails name="" price="400"></BestSellerDetails>
                <BestSellerDetails name="" price="400"></BestSellerDetails>
                <BestSellerDetails name="" price="400"></BestSellerDetails>
                <BestSellerDetails name="" price="400"></BestSellerDetails>
                <BestSellerDetails name="" price="400"></BestSellerDetails>
                <BestSellerDetails name="" price="400"></BestSellerDetails>
            </div>
        </div>
    );
};

export default BestSeller;