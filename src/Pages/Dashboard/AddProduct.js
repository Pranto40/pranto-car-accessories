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
        fetch('http://localhost:5000/tools', {
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
            <input type="text" disabled  name="email" value={user?.email} class="input input-bordered my-5 w-full max-w-xs" /><br />
            <input type="text" name="name" placeholder="Product Name" class="input input-bordered w-full max-w-xs" /><br />
            <input type="number" name="availableQuantity" placeholder="Available Quantity" class="my-5 input input-bordered w-full max-w-xs" /><br />
            <input type="number" name="quantity" placeholder="Quantity" class="input input-bordered w-full max-w-xs" /><br />
            <input type="number" name="price" placeholder="price" class="my-5 input input-bordered w-full max-w-xs" /><br />
            <input type="text" name="description" placeholder="description" class="my-5 input input-bordered w-full max-w-xs" /><br />
            <input type="text" name="image" placeholder="Image Link" class="my-5 input input-bordered w-full max-w-xs" /><br />
            <input type="submit" value="Add A Profile"  class="btn btn-primary input input-bordered w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddProduct;