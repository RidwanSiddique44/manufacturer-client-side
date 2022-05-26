import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageOrder = () => {
    const [allOrder, setAllOrder] = useState([]);
    useEffect(() => {
        fetch('https://dry-bayou-43305.herokuapp.com/allorder')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, []);
    const handleshiping = () => {
        document.getElementById('ship').innerText = 'Shipped';
    }
    return (
        <div>
            <h1 className="font-bold text-4xl mb-3">Your Order</h1>
            {
                allOrder.map(order => <div key={order._id} >
                    <div class="overflow-x-auto">
                        <table class="table table-compact w-full">
                            <thead>
                                <tr>

                                    <th>Name</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>price</th>
                                    <th>Location</th>
                                    <th>Payment Status</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>{order.name}</td>
                                    <td>{order.item}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.price}</td>
                                    <td>{order.address}</td>
                                    <td>
                                        {(order.price && !order.paid) && <button className='btn btn-xs btn-success'>Unpaid</button>}
                                        {(order.price && order.paid) && <button onClick={handleshiping} id='ship' className='btn btn-xs btn-success'>Pending</button>}
                                    </td>


                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageOrder;