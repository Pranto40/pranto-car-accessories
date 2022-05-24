import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddReview = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading />
      }

      const handleReview = event => {
        event.preventDefault();
        const review = {
            user: user.displayName,
            userEmail: user.email,
            rating: event.target.rating.value,
            comment: event.target.comment.value,
        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            toast(`Thank you so much, ${user.displayName}`)
        })
    }
    
    return (
        <div className='ml-12 mt-12'>
            <form onSubmit={handleReview}>
                <h1 className="text-2xl">Add A Review</h1>
            <input type="text" disabled value={user?.displayName} class="mt-5 input input-bordered w-full max-w-xs" /> <br />
            <input type="text" disabled  name="email" value={user?.email} class="input input-bordered my-5 w-full max-w-xs" /><br />
            <input type="number" name="rating" placeholder="Ratings" class="input input-bordered w-full max-w-xs" /><br />
            <textarea name="comment" class="textarea textarea-bordered w-80 px-5 my-5" placeholder="Comment"></textarea><br />
            <input type="submit" value="Add A Review"  class="btn btn-primary input input-bordered w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddReview;