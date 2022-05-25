import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert("Product Added Successfully");

            })
    };
    return (
        <div>
            <div className='container border border-primary p-10 mb-5'>
                <h3 className="text-center font-bold text-2xl mb-3">Add Product</h3>
                <hr className="bg-secondary mb-5" />
                <form className='flex flex-col text-left ' onSubmit={handleSubmit(onSubmit)}>
                    <label>Product Name</label>
                    <input placeholder='Name' className='mb-3 input input-bordered'  {...register("name", { required: true, maxLength: 100 })} />
                    <label>Product Image</label>
                    <input placeholder='Photo url' className='mb-3 input input-bordered'  {...register("image")} />
                    <label>Available Quantity</label>
                    <input placeholder='Quantity' className='mb-3 input input-bordered' type="number" {...register("quantity")} />
                    <label>Order Quantity</label>
                    <input placeholder='Quantity' className='mb-3 input input-bordered' type="number" {...register("order")} />
                    <label>Product Price</label>
                    <input placeholder='Price' className='mb-3 input input-bordered' type="number" {...register("price")} />
                    <label>Product Description</label>
                    <textarea placeholder='Description' className='mb-3 input input-bordered'  {...register("description")} />
                    <input className='mb-3 bg-info py-2 text-white font-bold rounded hover:bg-blue-700' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;