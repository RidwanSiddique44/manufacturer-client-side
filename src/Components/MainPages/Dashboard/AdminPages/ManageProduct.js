import React from 'react';
import useProducts from '../../../Hooks/useProducts';

const ManageProduct = () => {
    const [products, setProducts] = useProducts();
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure to detele it?');
        if (confirm) {
            const url = `https://dry-bayou-43305.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remainingProducts = products.filter(item => item._id !== id);
                    setProducts(remainingProducts)
                })
        }
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4' >
            {
                products.map(product =>
                    <div key={product._id} className=''>
                        < div className="card w-96 h-ful bg-base-100 shadow-xl" >
                            <figure className="px-10 pt-10">
                                <img src={product.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.name}</h2>
                                <p>{product.description}</p>
                                <p className='font-bold'>Per Unit Price: ${product.price}</p>
                                <p className='font-bold'>Available Quantity: {product.quantity}</p>
                                <p className='font-bold'>Minimum Order Quantity: {product.order}</p>
                                <div className="card-actions">
                                    <button onClick={() => handleDelete(product._id)} className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        </div >
                    </div >
                )

            }

        </div >
    );
};

export default ManageProduct;