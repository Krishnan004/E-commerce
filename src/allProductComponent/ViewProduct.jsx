import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../api/mainurl';

const ViewProduct = ({ fetch, setCartItem, cartItem }) => {
  const location = useLocation();
  const id = Number(location.pathname.split('/').pop());
  const item = fetch.find((item) => item.id === id);

  const [des, setDes] = useState(true);
  const [review, setReview] = useState(false);

  const addItemToCart = async (item) => {
    if (!cartItem.some((i) => i.id === item.id)) { // Check if the item is not already in the cart
      const { id, url, name, design, rate } = item;
  
      try {
        const response = await api.post("/cart", {
          id,
          url,
          name,
          design,
          rate
        });
        const responsecart = await api.get('/cart');
        setCartItem(responsecart.data);
        console.log(response.data); // Handle the response data as needed
      } catch (error) {
        console.log(`Error updating cart value: ${error.message}`);
      }
    } else {
      console.log('Item is already in the cart');
    }
  };
  

  if (!item) {
    return <div>Product not found</div>; // Handle case where product is not found
  }

  return (
    <div className="bg-custom-gradient p-8 text-gray-700">
      <div className="bg-white sm:p-20">
        <div className="sm:flex gap-8 bg-white p-2 sm:p-8 leading-loose border-b">
          <img src={item.url} alt={item.design} className="sm:w-1/3" />
          <div className="sm:p-12">
            <div className="border-b p-2">
              <h1 className="text-2xl tracking-wide my-2">{item.design}</h1>
              <p className="font-semibold my-2">{item.rate}.00 + Free Shipping</p>
              <p>
                Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur
                adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora
                incidunt lores ta porro ame.
              </p>
              <input type="number" className="border w-10 my-2" />
              <button
                className="border-2 border-white text-white bg-red-500 rounded-xl px-4 hover:bg-red-600 w-48 my-2"
                onClick={() => addItemToCart(item)}
              >
                ADD TO CART
              </button>
            </div>
            <label className="my-2">Category: {item.name}</label>
          </div>
        </div>
        <div>
          <div className="flex gap-4 m-6">
            <button className="font-semibold" onClick={() => { setDes(true); setReview(false); }}>
              Description
            </button>
            <button className="font-semibold" onClick={() => { setReview(true); setDes(false); }}>
              Reviews (0)
            </button>
          </div>
          {des && (
            <div className="m-6">
              <p>
                Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur
                adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora
                incidunt lores ta porro ame.
              </p>
            </div>
          )}
          {review && (
            <div className="flex gap-4 flex-col border p-6">
              <h4 className="text-lg sm:text-xl">Be the first to review “{item.design}”</h4>
              <p>Your email address will not be published. Required fields are marked *</p>
              <label htmlFor="rating">Your rating *</label>
              <input type="number" id="rating" className="border h-10" />
              <label htmlFor="review">Your review *</label>
              <textarea id="review" className="border h-20" />
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="block container h-14 border" id="name" />
                </div>
                <div className="w-1/2">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="block container h-14 border" id="email" />
                </div>
              </div>
              <div>
                <input type="checkbox" className="border mr-4" id="save-info" />
                <label htmlFor="save-info">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>
              <button className="border-2 border-white text-white bg-red-500 rounded-xl p-2 hover:bg-red-600 w-48">
                SUBMIT
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
