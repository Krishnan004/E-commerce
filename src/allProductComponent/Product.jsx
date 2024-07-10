import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import { Link } from 'react-router-dom';

const Product = ({fetch}) => {
  

  const [orderby, setOrderby] = useState('menu_order');
  const [product, setProduct] = useState([]);
  const [visible, setVisible] = useState(0);
  const [view, setView] = useState([]);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    setProduct(fetch);
  }, [fetch]);

  useEffect(() => {
    const value = Math.ceil(product.length / 9);
    const newView = [];
    for (let i = 0; i < value; i++) {
      newView.push(i);
    }
    setView(newView);
  }, [product]);

  const handleChange = (e) => {
    setOrderby(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let sortedProducts = [...product];

    switch (orderby) {
      case 'popularity':
        // Sort logic for popularity
        break;
      case 'rating':
        // Sort logic for average rating
        break;
      case 'date':
        // Sort logic for latest
        break;
      case 'price':
        sortedProducts.sort((a, b) => a.rate - b.rate);
        break;
      case 'price-desc':
        sortedProducts.sort((a, b) => b.rate - a.rate);
        break;
      default:
        // Default sorting logic if needed
        break;
    }

    setProduct(sortedProducts);
  };

  return (
    <div className="sm:grid grid-cols-4 bg-custom-gradient">
      <Filter product={product} fetch={fetch} setProduct={setProduct} />
      <div className="p-12 leading-loose col-start-2 col-end-6">
        <header className="leading-loose m-8">
          <p className="text-xs">Home / Shop</p>
          <h1 className="text-red-400 text-4xl">Shop</h1>
        </header>
        <div className="">
          <div className="flex justify-between m-8">
            <p>{`Showing 1–9 of ${product.length} results`}</p>
            <form className="" onSubmit={handleSubmit} method="get">
              <select
                name="orderby"
                className="orderby p-2 border rounded"
                aria-label="Shop order"
                value={orderby}
                onChange={handleChange}
              >
                <option value="menu_order">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by latest</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
              <input type="hidden" name="paged" value="1" />
              <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
                Apply
              </button>
            </form>
          </div>
          <div className="sm:grid grid-cols-3 gap-4">
            {product.slice(visible, visible + 9).map((item) => (
                <div key={item.id} className="">
                 <Link to={{
                    pathname: `/allproduct/${item.id}`
                  }}>
                    <img
                    src={item.url}
                    alt={item.name}
                    className="w-full h-auto object-cover"
                    />
                    <div className="mt-4 text-center">
                    <p className="text-lg font-thin">{item.name}</p>
                    <h2 className="font-bold text-sm text-gray-600">{item.design}</h2>
                    <p>☆☆☆☆☆</p>
                    <p className="text-red-500">{item.rate}</p>
                    </div>
                    </Link>
                </div>
             
            ))}
            </div>
          {view.map((num, index) => (
            <button
              key={index}
              onClick={() => setVisible(num * 9)}
              className="border border-red-400 p-4"
            >
              {num + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;





