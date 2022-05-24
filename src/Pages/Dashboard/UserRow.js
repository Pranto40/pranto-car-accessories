import { signOut } from 'firebase/auth';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UserRow = ({user, refetch, index}) => {
    const {email, role, _id} = user;
    const makeAdmin = () => {
        fetch(`https://desolate-journey-84026.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        .then(res => {
            if (res.status === 403) {
                toast.error('Failed to make an admin');
                signOut(auth);
                localStorage.removeItem('accessToken');
                Navigate('/')
            }
           return res.json()})
        .then(data => {
           if (data.modifiedCount > 0) {
            refetch();
            toast.success('Successfully made an admin');
           }
        })
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure? This admin delete');
        if(proceed) {
          const url = `https://desolate-journey-84026.herokuapp.com/user/admin/${id}`;
          fetch(url, {
            method: 'DELETE',
          })
          .then(res => res.json())
          .then(data => {
          })
        }
      }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' &&<button onClick={makeAdmin} class="btn btn-sm">Make Admin</button>}</td>
            <td><button onClick={() =>handleDelete (_id)} class="btn btn-sm">Remove User</button></td>
        </tr>
    );
};

export default UserRow;