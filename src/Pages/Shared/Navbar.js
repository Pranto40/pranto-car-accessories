import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from './Loading';

const Navbar = ({children}) => {
  const {pathname} = useLocation();
  const [user, loading] = useAuthState(auth);
  const logout = () => {
      signOut(auth);
    };
    if (loading) {
      return <Loading />
    }

    const menuItem = <>
    <li><NavLink className='rounded-lg' to="/">Home</NavLink></li>
    <li><NavLink className='rounded-lg' to="/myPortfolio">My Portfolio</NavLink></li>
    <li><NavLink className='rounded-lg' to="/blog">Blogs</NavLink></li>
    {
      user && <li><NavLink className='rounded-lg' to="/dashboard">Dashboard</NavLink></li>
    }
    <li>{ user ? <NavLink onClick={logout} to="/login" >Sign Out</NavLink> : <NavLink to="/login">Login</NavLink>}</li>
  </>
    return (
        <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
          <div className="w-full lg:px-[7%] navbar fixed top-0 z-50 " style={{background: "#ffd54c"}}>
          {
            pathname.includes("dashboard") &&
            <label for="dashbord-sidebar" tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
          }

          <div className="flex-1 px-2 mx-2">Pranto - Car Accessories</div>
          <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div> 
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal gap-x-2">
                {menuItem}
              </ul>
            </div>
          </div>
          {children}
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {menuItem}
          </ul>
        </div>
      </div>
    );
};

export default Navbar;