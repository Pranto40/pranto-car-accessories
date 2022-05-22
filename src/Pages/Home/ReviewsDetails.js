import React from 'react';

const ReviewsDetails = ({customerName, comments}) => {
    return (
        <div>
            <div className="card bg-base-100 border-2 hover:border-0 hover:shadow-xl my-12">
                <div className="card-body">
                <div className="avatar text-center">
                <div className="w-24 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=92310" alt='' />
                </div>
                </div>
                <h2 className="card-title">{customerName}</h2>
                <p>{comments}</p>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsDetails;