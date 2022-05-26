import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const handleProfile = event => {
        event.preventDefault();
        const profile = {
            education: event.target.education.value,
            location: event.target.location.value,
            phoneNumber: event.target.phoneNumber.value,
            hobbies: event.target.hobbies.value,
        }
        fetch(`https://desolate-journey-84026.herokuapp.com/${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
        .then(res => res.json())
        .then(data => {

        })
    }
    return (
        <div>
            <input type="checkbox" id="UpdateProfile" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
            <label for="UpdateProfile" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <form onSubmit={handleProfile} className='text-center'>
                <h1 className="text-2xl font-bold mb-5">Update Profile</h1>
            <input type="text" disabled value={user?.displayName} className="mt-5 input input-bordered w-full max-w-xs" /> <br />
            <input required type="text" name="education" placeholder="Education" className="input input-bordered w-full max-w-xs my-5" /><br />
            <input required type="text" name="location" placeholder="Location" className="my-5 input input-bordered w-full max-w-xs" /><br />
            <input required type="number" name="phoneNumber" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" /><br />
            <input required type="text" name="hobbies" placeholder="Your Hobbies" className="my-5 input input-bordered w-full max-w-xs" /><br />
            <input  for="UpdateProfile" type="submit" value="Update Profile"  className="btn btn-primary input input-bordered w-full max-w-xs" />
            </form>
            </div>
            </div>
        </div>
    );
};

export default UpdateProfile;