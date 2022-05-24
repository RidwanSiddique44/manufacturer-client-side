import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Banner from './Banner/Banner';
import Contact from './ExtraSection/Contact';
import Extra from './ExtraSection/Extra';
import Products from './Products/Products';

const Home = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

                {
                    products.slice(0, 6).map(product => <Products key={product._id} product={product} ></Products>)
                }
            </div>
            <div>
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <h1 class="text-5xl font-bold">Hello there</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <Extra></Extra>
            <div className="divider font-bold">Send Your Feedback</div>
            <Contact></Contact>

        </div>
    );
};

export default Home;