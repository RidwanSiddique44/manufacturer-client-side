import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import axiosPrivate from '../../../AxiosPrivate/axiosPrivate';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const myOrders = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/order?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setOrders(data);
                console.log(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/signin')
                }
            }
        }
        myOrders();
    }, [user]);


    const handleDelete = id => {
        const confirm = window.confirm('Are you sure to detele it?');
        if (confirm) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remainingProducts = orders.filter(item => item._id !== id);
                    setOrders(remainingProducts)
                })
        }
    }


    return (
        <div>
            <h1 className="font-bold text-4xl mb-3">Your Order</h1>
            {
                orders.map(order => <div key={order._id} >
                    <div class="overflow-x-auto">
                        <table class="table table-compact w-full">
                            <thead>
                                <tr>

                                    <th>Name</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Payment</th>
                                    <th>Cancel</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>{user.displayName}</td>
                                    <td>{order.item}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.price}</td>
                                    <td>
                                        {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                        {(order.price && order.paid) && <div>
                                            <p><span className='text-success'>Paid</span></p>
                                            <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                                        </div>}
                                    </td>

                                    <td><button onClick={() => handleDelete(order._id)} className='btn btn-xs btn-success'>Cancel</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyOrders;