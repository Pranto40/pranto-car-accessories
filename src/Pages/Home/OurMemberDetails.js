import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const OurMemberDetails = ({img, surname, name}) => {
    return (
        <div>
            <div className="card bg-base-100 flex justify-center">
                <div className="card-body text-center">
                <div className="avatar flex justify-center">
                <div className="w-80">
                    <img src={img} alt='' />
                </div>
                </div>
                <h2 >{name}</h2>
                <p>{surname}</p>
                <div className='flex justify-center mt-2'>
                    <FaFacebookF className='mr-4' />
                    <FaTwitter className='mr-4' />
                    <FaGooglePlusG className='mr-4' />
                    <FaLinkedinIn className='mr-4' />
                </div>
                </div>
            </div>
        </div>
    );
};

export default OurMemberDetails;