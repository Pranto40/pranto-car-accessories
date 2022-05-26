import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div className='mt-16'>
           <div className="drawer drawer-mobile max-w-7xl mx-auto px-12">
                <input id="dashbord-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-3xl font-bold mt-5 text-center ml-12 text-sky-500'>Welcome to Dashboard</h2>
                    <Outlet />
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashbord-sidebar" className="drawer-overlay"></label> 
                    <ul className="menu my-2 p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {!admin && <li className='my-2'><Link to="/dashboard">My Orders</Link></li>}
                    {!admin && <li className='my-2'><NavLink to="/dashboard/addReview">Add Review</NavLink></li>}
                    <li className='my-2'><NavLink to="/dashboard/addProfile">Add Profile</NavLink></li>
                    <li className='my-2'><NavLink to="/dashboard/myProfile">My Profile</NavLink></li>
                    {admin && <li className='my-2'><NavLink to="/dashboard/users">All Users</NavLink></li>}
                    {admin && <li className='my-2'><NavLink to="/dashboard/addProduct">Add Product</NavLink></li>}
                    {admin && <li className='my-2'><NavLink to="/dashboard/manageProducts">Manage Products</NavLink></li>}
                    </ul>
                
                </div>
                </div>
        </div>
    );
};

export default Dashboard;