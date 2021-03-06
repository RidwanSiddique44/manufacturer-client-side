import React, { useEffect, useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import Banner from './Banner/Banner';
import Contact from './ExtraSection/Contact';
import Extra from './ExtraSection/Extra';
import Products from './Products/Products';
import flags from '../../Images/icons/flags.png';
import computer from '../../Images/icons/computer.png';
import crowd from '../../Images/icons/crowd.png';
import thumbs from '../../Images/icons/thumbs.png';
import Reviews from './Reviews/Reviews';

const Home = () => {
    const [products, setProducts] = useProducts();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://dry-bayou-43305.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div>
            <Banner></Banner>
            <div className="divider font-bold">Our Products</div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

                {
                    products.slice(0, 6).map(product => <Products key={product._id} product={product} ></Products>)
                }
            </div>
            <div className='pt-10 pb-5'>
                <div className="hero min-h-fit shadow-xl rounded-xl bg-gray-100">
                    <div className="hero-content text-center">
                        <div className="max-w-full">
                            <h1 className="text-4xl font-bold text-blue-900">MILLIONS BUSINESS TRUST US</h1>
                            <h1 className="text-xl font-bold">TRY TO UNDERSTAND USER EXPECTATION</h1>
                            <div className="divider font-bold"></div>
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                                <div>
                                    <img className="h-16 mx-auto" src={flags} alt="" />
                                    <h1 className="text-5xl font-bold">72+</h1>
                                    <p>Countries</p>
                                </div>
                                <div>
                                    <img className="h-18 mx-auto" src={computer} alt="" />
                                    <h1 className="text-5xl font-bold">567+</h1>
                                    <p>Complete Projects</p>
                                </div>
                                <div>
                                    <img className="h-18 mx-auto" src={crowd} alt="" />
                                    <h1 className="text-5xl font-bold">272+</h1>
                                    <p>Happy Clients</p>
                                </div>
                                <div>
                                    <img className="h-16 mx-auto" src={thumbs} alt="" />
                                    <h1 className="text-5xl font-bold">432+</h1>
                                    <p>Reviews</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 bg-white shadow-lg rounded-lg p-10">
                                <div className='col-span-2'>
                                    <h1 className="text-3xl font-bold text-blue-900">HAVE ANY QUESTION ABOUT US ?</h1>
                                    <h1 className="text-xl font-bold">Do not hasitate to Contact us..</h1>
                                </div>
                                <div>
                                    <button className="btn btn-primary lg:mr-4">Request for quote</button>
                                    <button className="btn btn-secondary mt-4 lg:mt-0">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider font-bold">All User Review</div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

                {
                    reviews.map(review => <Reviews key={review._id} review={review} ></Reviews>)
                }
            </div>
            <Extra></Extra>
            <div className="divider font-bold">Send Your Feedback</div>
            <Contact></Contact>

        </div>
    );
};

export default Home;