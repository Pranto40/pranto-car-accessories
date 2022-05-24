import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L2qyQFWp3nD8VYoblxtR5EKvpoQjQHnCZeYukJZURaHH0PKk35sLZihbLIZTkV2tw61EAx0Oad6l5hQ6CtXYvPy00sGpjGlwb');

const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/purchase/${id}`;
    const {data: order, isLoading} = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if(isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-10">
                <div class="card-body">
                    <p className='text-success'>Hello, {order.user}</p>
                    <h2 class="card-title">Please Pay for: {order.productName}</h2>
                    <p>Please pay: ${order.price}</p>
                </div>
                </div>
                <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
                </div>
                </div>
            </div>
    );
};

export default Payment;