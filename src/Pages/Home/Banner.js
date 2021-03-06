import React from 'react';
import banner from '../../accets/images/banner.jpg'

const Banner = () => {
    return (
      <div className="hero my-8">
            <div className="hero-content flex-col lg:flex-row">
                <div className='flex-1'>
                <h1 className="text-4xl font-bold text-indigo-500">Welcome To <br /> Pranto Car Accessories</h1>
                <p className="py-6">We make different types of car products. You can get all the parts of the car here. You can order many kinds of parts at once if you want. You can also visit our web site to get more services from us.</p>
                <button className="btn text-white font-bold">GET STARTED</button>
                </div>
                <div className='flex-1'>
                   <img src={banner} className="rounded-lg shadow-2xl" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Banner;