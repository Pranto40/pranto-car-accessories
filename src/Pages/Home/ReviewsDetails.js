import React from 'react';

const ReviewsDetails = ({review}) => {
    return (
        <div>
            <div className="card bg-base-100 border-2 hover:border-0 hover:shadow-xl mt-5">
                <div className="card-body">
                <h1 className="card-title">Name: {review.user}</h1>
                <h2 className="card-title">Rating: {review.rating}</h2>
                <p>{review.comment}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewsDetails;