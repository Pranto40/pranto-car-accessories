import React from 'react';
import ReviewsDetails from './ReviewsDetails';

const Reviews = () => {
    return (
        <div className='h-[40vh]'>
        <h1 className='text-center text-2xl font-bold uppercase'>customer review</h1>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            <ReviewsDetails customerName="Cristopher Lee" comments="Wonderful collection of WooThemes classics! A must buy for all Woo fans." />
            <ReviewsDetails customerName="Raju Ahammad" comments="Voluptatem quia voluptas sit aspernat uptatem sequi Neque porro." />
            <ReviewsDetails customerName="Danniel Kim" comments="Their famous wings werr terrible. The only thing that was good that we orderd" />
        </div>
        </div>
    );
};

export default Reviews;