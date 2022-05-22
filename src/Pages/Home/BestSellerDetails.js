import React from 'react';

const BestSellerDetails = ({name, price}) => {
    
    return (
        <div>
            <div className="card bg-base-100 border-2 flex justify-center">
                <div className="card-body text-center">
                <div className="avatar flex justify-center">
                <div className="w-24 rounded-full">
                    <img src="https://i.ibb.co/DMrJs5d/tool1.webp" alt='' />
                </div>
                </div>
                <h2 >Name: {name}</h2>
                <p>Price: {price}</p>
                <div className='flex justify-center'>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellerDetails;