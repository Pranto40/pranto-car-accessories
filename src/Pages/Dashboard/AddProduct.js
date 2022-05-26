import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading />
      }

      const handleProduct = event => {
        event.preventDefault();
        const profile = {
            name: event.target.name.value,
            availableQuantity: event.target.availableQuantity.value,
            quantity: event.target.quantity.value,
            image: event.target.image.value,
            price: event.target.price.value,
            description: event.target.description.value,
        }
        fetch('https://desolate-journey-84026.herokuapp.com/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
        .then(res => res.json())
        .then(data => {
            
        })
    }
    return (
        <div className='ml-12 mt-12'>
            <form onSubmit={handleProduct}>
                <h1 className="text-2xl">Add Product</h1>
            <input type="text" disabled  name="email" value={user?.email} className="input input-bordered my-5 w-full max-w-xs" /><br />
            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full max-w-xs" /><br />
            <input type="number" name="availableQuantity" placeholder="Available Quantity" className="my-5 input input-bordered w-full max-w-xs" /><br />
            <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full max-w-xs" /><br />
            <input type="number" name="price" placeholder="price" className="my-5 input input-bordered w-full max-w-xs" /><br />
            <input type="text" name="description" placeholder="description" className="my-5 input input-bordered w-full max-w-xs" /><br />
            <input type="text" name="image" placeholder="Image Link" className="my-5 input input-bordered w-full max-w-xs" /><br />
            <input type="submit" value="Add A Profile"  className="btn btn-primary input input-bordered w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddProduct;