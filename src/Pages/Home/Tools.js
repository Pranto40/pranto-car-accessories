import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tools = ({tool}) => {
    const {name, image, availableQuantity, quantity, price, description, _id} = tool;
    const navigate = useNavigate()
    const handleToolDetails = (id) => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <h3 className="card-title">Available quantity: {availableQuantity}</h3>
                <h2 className="card-title">Quantity: {quantity}</h2>
                <h2 className="card-title">Price: {price}</h2>
                <p>description: {description}</p>
                <div className="card-actions">
                <button onClick={() => handleToolDetails (_id)} className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tools;