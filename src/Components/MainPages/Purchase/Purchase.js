import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const { Id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/products/${Id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);
    const handlePurchase = (quantity, minOrder) => {
        const orderValue = document.getElementById('quantity-item').value;
        let orderQuantity = parseInt(orderValue);
        let available = parseInt(quantity);
        let minimum = parseInt(minOrder);
        if (orderQuantity < minimum) {
            document.getElementById('order-btn').disabled = true;
            toast.error('Your order quantity is less than minimum quantity');
        }
        else if (orderQuantity > available) {
            document.getElementById('order-btn').disabled = true;
            toast.error('Your order quantity is greater than available quantity');
        }
    }
    const enableButton = () => {
        document.getElementById('order-btn').disabled = false;
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className="card w-96 h-ful bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={item.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{item.name}</h2>
                                <p>{item.description}</p>
                                <p className='font-bold'>Per Unit Price: ${item.price}</p>
                                <p className='font-bold'>Available Quantity: {item.quantity}</p>
                                <p className='font-bold'>Minimum Order Quantity: {item.order}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" value={user?.displayName} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" value={user?.email} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" placeholder="Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input onFocus={enableButton} type="number" placeholder="Quantity" id='quantity-item' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={() => handlePurchase(item.quantity, item.order)} id='order-btn' className="btn btn-primary">Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Purchase;