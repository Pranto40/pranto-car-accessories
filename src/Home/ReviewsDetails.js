import React from 'react';

const ReviewsDetails = ({customerName, comments}) => {
    return (
        <div>
            <div class="card w-96 bg-base-100 hover:shadow-xl my-12">
                <div class="card-body">
                <div class="avatar text-center">
                <div class="w-24 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=92310" />
                </div>
                </div>
                <h2 class="card-title">{customerName}</h2>
                <p>{comments}</p>
                <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked/>
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsDetails;