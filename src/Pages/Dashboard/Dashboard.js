import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='mt-16'>
           <div class="drawer drawer-mobile">
                <input id="dashbord-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h2 className='text-3xl font-bold'>Dashboard</h2>
                    <Outlet />
                
                </div> 
                <div class="drawer-side">
                    <label for="dashbord-sidebar" class="drawer-overlay"></label> 
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><NavLink to="/dashboard">My Orders</NavLink></li>
                    <li><NavLink to="/dashboard/addReview">Add Review</NavLink></li>
                    <li><NavLink to="/dashboard/myProfile">My Profile</NavLink></li>
                    <li><NavLink to="/dashboard/users">All Users</NavLink></li>
                    </ul>
                
                </div>
                </div>
        </div>
    );
};

export default Dashboard;