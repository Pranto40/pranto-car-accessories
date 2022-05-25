import React from 'react';
import { Link } from 'react-router-dom';
import portfolio from '../../accets/images/portfolio.jpg'
const MyPortfolio = () => {
    return (
        <div className="hero my-28">
            <div className="hero-content flex-col lg:flex-row">
                <div className='flex-1'>
                <h1 className="text-3xl font-bold">My name is Dulal Ahammed Pranto</h1>
                <h1 className="text-lg font-bold my-2">Email Address: dulalahammedpranto01@gmail.com</h1>
                <p className='text-2xl'>Educational Background: <span className='text-lg'>B.B.A hon's department of accounting, National University of sherpur govt. college</span></p>
                <div>
                <h1 className='text-xl font-bold'>Technologies or Skills:</h1>
                <ul>
                    <h1 className='text-xl font-bold'>Front end</h1>
                    <li>1.HTML</li>
                    <li>2.CSS</li>
                    <li>3.Bootstrap</li>
                    <li>4.Tailwindcss</li>
                    <li>5.JavaScript</li>
                    <li>6.React</li>
                    <li>7.React Router</li>
                    <li>8.React Component library: react Bootstrap 5, daisyui</li>
                    <li>9.Firebase Authentication</li>
                    <li>10.react firebase hooks</li>
                    <h1 className='text-xl font-bold'>Back end</h1>
                    <li>1.express js</li>
                    <li>2.Mongodb</li>
                    <h1 className='text-xl font-bold'>My Projects Links:</h1>
                    <li>1.<a className='btn btn-active btn-link' href="https://pranto-car-accessories.web.app" target="_blank">pranto-car-accessories</a></li>
                    <li>2.<a className='btn btn-active btn-link' href="https://grocery-stock-f2e6a.web.app" target="_blank">grocery-stock</a></li>
                    <li>3.<a className='btn btn-active btn-link' href="https://palwan-fitness-club.netlify.app" target="_blank">palwan-fitness-club</a></li>
                </ul>
                </div>
                </div>
                <div className='flex-1'>
                   <img src={portfolio} className="rounded-lg shadow-2xl" alt='' />
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;