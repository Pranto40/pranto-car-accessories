import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        if(user) {
            fetch(`https://desolate-journey-84026.herokuapp.com/purchase?userEmail=${user.email}`, {
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
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure? This item delete');
        if(proceed) {
          const url = `https://desolate-journey-84026.herokuapp.com/purchase/${id}`;
          fetch(url, {
            method: 'DELETE',
          })
          .then(res => res.json())
          .then(data => {
            const remaining = orders.filter(product => product._id !== id);
            setOrders(remaining)
          })
        }
      }
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
                    <th>Payment</th>
                    <th>Remove Order</th>
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
                            <td>{!order.paid && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-sm'>pay</button></Link>}
                               {order.paid && <div>
                                   <p><span className='text-success'>Paid</span></p>
                                   <p>Transaction Id: <span className='text-success'>{order.transactionId}</span></p>
                                </div>}</td>
                                <td>{!order.paid && <button onClick={() =>handleDelete (order._id)} className='btn btn-sm'>delete</button>}
                                {order.paid && <div>
                                    <button disabled className='btn btn-sm'>delete</button>
                                </div>}
                                </td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyOrders;