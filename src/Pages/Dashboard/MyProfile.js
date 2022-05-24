import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading />
      }

      const handleProfile = event => {
        event.preventDefault();
        const profile = {
            user: user.displayName,
            userEmail: user.email,
            education: event.target.education.value,
            location: event.target.location.value,
            phoneNumber: event.target.phoneNumber.value,
            hobbies: event.target.hobbies.value,
        }
        fetch('http://localhost:5000/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
        .then(res => res.json())
        .then(data => {
            
        })
    }
    return (
        <div className='ml-12 mt-12'>
            <form onSubmit={handleProfile}>
                <h1 className="text-2xl">My Profile Added</h1>
            <input type="text" disabled value={user?.displayName} class="mt-5 input input-bordered w-full max-w-xs" /> <br />
            <input type="text" disabled  name="email" value={user?.email} class="input input-bordered my-5 w-full max-w-xs" /><br />
            <input type="text" name="education" placeholder="Education" class="input input-bordered w-full max-w-xs" /><br />
            <input type="text" name="location" placeholder="Location" class="my-5 input input-bordered w-full max-w-xs" /><br />
            <input type="number" name="phoneNumber" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" /><br />
            <input type="text" name="hobbies" placeholder="Your Hobbies" class="my-5 input input-bordered w-full max-w-xs" /><br />
            <input type="submit" value="Add A Profile"  class="btn btn-primary input input-bordered w-full max-w-xs" />
            </form>
        </div>
    );
};

export default MyProfile;