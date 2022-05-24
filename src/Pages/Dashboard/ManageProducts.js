import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageProducts = () => {

    const {data: manageProducts, isLoading, refetch} = useQuery('users', () => fetch('https://desolate-journey-84026.herokuapp.com/tools', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure? This Item delete');
        if(proceed) {
          const url = `http://localhost:5000/tools/${id}`;
          fetch(url, {
            method: 'DELETE',
          })
          .then(res => res.json())
          .then(data => {
            if (data.modifiedCount > 0) {
                refetch();
            }
          })
        }
      }
    return (
        <div className="">
            <h1 className="text-2xl">Manage Products</h1>
            <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>price</th>
                    <th>Item Delete</th>
                </tr>
                </thead>
                <tbody>
                    {
                        manageProducts.map((manageProduct, index) => <tr>
                            <th>{index + 1}</th>
                            <td><div class="avatar">
                            <div class="w-20 rounded">
                                <img src={manageProduct.image} alt={manageProduct.name} />
                            </div>
                            </div></td>
                            <td>{manageProduct.name}</td>
                            <td>{manageProduct.quantity}</td>
                            <td>{manageProduct.price}</td>
                            <td><button onClick={() =>handleDelete (manageProduct._id)} class="btn btn-sm">Remove Item</button></td>
                        </tr>)
                    }
                
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ManageProducts;