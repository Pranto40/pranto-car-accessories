import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import ReviewsDetails from '../Home/ReviewsDetails'

const Reviews = () => {
    const url = `https://desolate-journey-84026.herokuapp.com/review`

    const [isLoading, setIsLoading] = useState(true);
    const [review, setReview] = useState([])
    const fetchData = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url)
            const data = await res.json();
            setReview(data)
            setIsLoading(false)
        }catch {
            setIsLoading(false)
        }
    }
    useEffect ( () => {
        fetchData(url)
    } , [])
    return (
        <div className='my-28'>
            {
                isLoading && <Loading />
            }
        <h1 className='text-center text-2xl font-bold uppercase mb-5'>customer review</h1>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                review.map(review => <ReviewsDetails
                key={review._id}
                review={review}
                ></ReviewsDetails>)   
            }
        </div>
        </div>
    );
};

export default Reviews;