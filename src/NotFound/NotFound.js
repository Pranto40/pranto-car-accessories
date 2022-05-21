import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <div className="flex justify-center items-center mt-16 h-screen">
                    <div className='center'>
                    <img className='w-[60vh]' src="https://i.ibb.co/TBpt2wW/404-Not-Found.png" alt="" />
                        <div className="mt-7 text-center">
                            <h1 className='text-2xl'>404 PAGE NOT FOUND!</h1>
                            <h3 className='text-xl my-3'>This page isn't available. Sorry about that.</h3>
                            <h4 className='text-lg'>Try searching for something else.</h4>
                            <Link to='/' className='btn my-8'>Go Back</Link>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default NotFound;