import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const {id} = useParams()
    const url = `http://localhost:5000/tools/${id}`

    const [isLoading, setIsLoading] = useState(true);
    const [purchase, setPurchase] = useState([])
    const fetchData = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url)
            const data = await res.json();
            setPurchase(data)
            setIsLoading(false)
        }catch {
            setIsLoading(false)
        }
    }
    useEffect ( () => {
        fetchData(url)
    } , [])

    const handleBooking = event => {
        event.preventDefault();

        
        const purchases = {
            purchaseId: purchase._id,
            productName: purchase.name,
            user: user.displayName,
            userEmail: user.email,
            quantity: event.target.quantity.value,
            phone: event.target.phone.value,
        }
        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchases)
        })
        .then(res => res.json())
        .then(data => {
            toast('Your Purchase successfully done')
        })
    }
    return (
        <div className='my-24'>
            {
                isLoading && <Loading />
            }
           <div className='max-w-7xl mx-auto px-10'>
           <div className='flex justify-center items-center gap-6 flex-col lg:flex-row'>
           <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="w-72">
                <img src={purchase.image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {purchase.name}</h2>
                <h3 className="card-title">Available quantity: {purchase.availableQuantity}</h3>
                <h2 className="card-title">Quantity: {purchase.quantity}</h2>
                <h2 className="card-title">Price: {purchase.price}</h2>
                <p>description: {purchase.description}</p>
            </div>
        </div>
           <div className='w-80'>
               <h1 className='text-center text-2xl font-bold mb-3'>Purchase</h1>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                <input type="text" name="name" disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" /><br></br>
                <input type="email" disabled  name="email" value={user?.email} class="input input-bordered w-full max-w-xs" /><br></br>
                <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" /><br></br>
                <input type="text" placeholder="Quantity" name='quantity' class="input input-bordered w-full max-w-xs" /><br></br>
                <input type="submit" value="Submit"  class="btn btn-primary input input-bordered w-full max-w-xs" />
                </form>
           </div>
           </div>
           </div>
        </div>
    );
};

export default Purchase;