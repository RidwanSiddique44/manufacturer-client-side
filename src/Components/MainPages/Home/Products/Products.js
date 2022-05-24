import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = (props) => {
    const { _id, name, quantity, order, description, price, image } = props.product;
    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div>
            <div className="card w-96 h-ful bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p className='font-bold'>Per Unit Price: ${price}</p>
                    <p className='font-bold'>Available Quantity: {quantity}</p>
                    <p className='font-bold'>Minimum Order Quantity: {order}</p>
                    <div className="card-actions">
                        <button onClick={() => navigateToPurchase(_id)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;