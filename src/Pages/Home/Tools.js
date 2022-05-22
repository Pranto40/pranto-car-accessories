import React from 'react';

const Tools = ({tool}) => {
    const {name, image, availableQuantity, quantity, price, description} = tool
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
                <div class="card-actions">
                <button class="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tools;