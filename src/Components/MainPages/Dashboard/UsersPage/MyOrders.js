import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
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
                                    <th>Location</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>{user.displayName}</td>
                                    <td>{order.item}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.address}</td>


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