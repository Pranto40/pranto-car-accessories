import React from 'react';
import UpdateProfile from './UpdateProfile';

const MyProfileDetails = ({profile}) => {
    console.log(profile);
    return (
        <div className='ml-5 flex justify-center items-center'>
            <div className='border rounded-md w-auto p-5'>
            <h1 className='text-3xl'>Name: {profile.user}</h1>
            <h1 className='text-2xl my-2'>Education: {profile.education}</h1>
            <h1 className='text-xl'>Location: {profile.location}</h1>
            <h1 className='text-lg my-2'>Phone Number: {profile.phoneNumber}</h1>
            <h1 className='text-jg my-2'>Your Hobby: {profile.hobbies}</h1>
            <label for="UpdateProfile" class="btn modal-button w-80 mt-2">Update Profile</label>
            <UpdateProfile id={profile._id} />
            </div>
        </div>
    );
};

export default MyProfileDetails;