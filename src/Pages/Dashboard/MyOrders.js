import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        if(user) {
            fetch(`http://localhost:5000/purchase?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/')
                }
                return res.json()
            })
            .then(data => {

                setOrders(data)
            })
        }
    }, [user])

    return (
        <div>
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