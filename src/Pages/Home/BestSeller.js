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
                <BestSellerDetails img= "https://i.ibb.co/dBMzf0X/bestseller.webp" name="Tires" price="646"></BestSellerDetails>
                <BestSellerDetails img= "https://i.ibb.co/b2BPLk8/body-parts.webp" name="Body Parts" price="412"></BestSellerDetails>
                <BestSellerDetails img= "https://i.ibb.co/nMmSPXS/bestseller01.webp" name="Light" price="148"></BestSellerDetails>
                <BestSellerDetails img= "https://i.ibb.co/cXmfp5K/lighting.webp" name="Lighting" price="220"></BestSellerDetails>
                <BestSellerDetails img= "https://i.ibb.co/0FG8Zz1/wheel.webp" name="Wheels & Tires" price="356"></BestSellerDetails>
                <BestSellerDetails img= "https://i.ibb.co/X3HrLrC/moto-oil.webp" name="Moto Oil" price="150"></BestSellerDetails>
                <BestSellerDetails img= "https://i.ibb.co/MNcZFy1/bestseller02.webp" name="Silencer" price="233"></BestSellerDetails>
                <BestSellerDetails img= "https://i.ibb.co/6bMQPkf/turbo-systems.webp" name="Turbo Systems" price="542"></BestSellerDetails>
            </div>
        </div>
    );
};

export default BestSeller;