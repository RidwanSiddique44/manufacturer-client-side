import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [allOrder, setAllOrder] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allorder')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, []);
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
                                    <th>Location</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>{order.name}</td>
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

export default ManageOrder;