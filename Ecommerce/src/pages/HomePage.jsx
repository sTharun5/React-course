import { Header } from '../components/Header';
import checkmark from '../assets/icons/checkmark.png';
import  axios  from 'axios';
import { formatCurrency } from '../utils/formatCurrency';
import { useState, useEffect } from 'react';

import './HomePage.css';

function HomePage() {
    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        try{
        const response = await fetch('http://localhost:3000/api/products');
        if(!response.ok) {
            throw new Error("cannot fetch products");
        }
        const data = await response.json();
        setProducts(data);
        }
        catch(error){
            console.log(error);
        }
    }

    async function axiosFetchProducts() {

    try{
       const response = await axios.get('http://localhost:3000/api/products');
       setProducts(response.data);
    }
        catch(error){
            console.log(error);
        }

    }

    useEffect(() => {
    //    fetchProducts();
       axiosFetchProducts();
    }, [])


    return (
        <>
            <link rel="icon" type="image/png" href="/images/home-icon.png" />
            <Header></Header>

            <div className="home-page">
                <div className="products-grid">
                    {products.map((product) => {
                        return (
                            <div key={product.id}>
                                <div className="product-container">
                                    <div className="product-image-container">
                                        <img
                                            className="product-image"
                                            src={product.image}
                                        />
                                    </div>
                                    <div className="product-name limit-text-to-2-lines">
                                        {product.name}
                                    </div>

                                    <div className="product-rating-container">
                                        <img
                                            className="product-rating-stars"
                                            src={`../../ecommerce-project-main/images/ratings/rating-${product.rating.stars * 10}.png`}
                                        />
                                        <div className="product-rating-count link-primary">
                                            {product.rating.count}
                                        </div>
                                    </div>

                                    <div className="product-price">{`$${formatCurrency(product.priceCents)}`}</div>
                                    <div className="product-quantity-container">
                                        <select>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                    <div className="product-spacer"></div>
                                    <div className="added-to-cart">
                                        <img src={checkmark} />
                                        Added
                                    </div>
                                    <button className="add-to-cart-button button-primary">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default HomePage;
