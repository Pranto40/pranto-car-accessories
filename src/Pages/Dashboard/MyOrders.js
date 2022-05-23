import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {

    const [user] = useAuthState(auth)
    const url = `http://localhost:5000/purchase?userEmail=${user.email}`;
    const [isLoading, setIsLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const fetchData = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url)
            const data = await res.json();
            setOrders(data)
            setIsLoading(false)
        }catch {
            setIsLoading(false)
        }
    }
    useEffect ( () => {
        fetchData(url)
    } , [user])
    console.log(orders);

    return (
        <div>
            {
                isLoading && <Loading />
            }
           <h1>My Orders: {orders.length}</h1>
           <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Product Name</th>
                    <th>Quentity</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{order.user}</td>
                            <td>{order.productName}</td>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyOrders;