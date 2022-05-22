import React from 'react';
import banner from '../../accets/images/banner.jpg'

const Banner = () => {
    return (
      <div className="hero h-[60vh]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                   <img src={banner} className="rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='flex-1'>
                <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <button className="btn text-white font-bold">GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;