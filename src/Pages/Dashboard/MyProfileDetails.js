import React from 'react';
import UpdateProfile from './UpdateProfile';

const MyProfileDetails = ({profile}) => {
    return (
        <div>
            <h1>Education: {profile.education}</h1>
            <h1>Location: {profile.location}</h1>
            <h1>Phone Number: {profile.phoneNumber}</h1>
            <h1>Your Hobby: {profile.hobbies}</h1>
            <label for="UpdateProfile" class="btn modal-button w-80 mt-2">Update Profile</label>
            <UpdateProfile id={profile._id} />
        </div>
    );
};

export default MyProfileDetails;