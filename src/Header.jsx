import React, { useState } from 'react';
import { GiBasket } from 'react-icons/gi';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import api from './api/mainurl';

const Header = ({ cartItem, setCartItem }) => {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(false);

  const deleteItemFromCart = async (id) => {
    try {
      const response = await api.delete(`/cart/${id}`);
      const responsecart = await api.get('/cart');
      setCartItem(responsecart.data);
      console.log(response.data); // Handle the response data as needed
    } catch (error) {
      console.log(`Error deleting cart item: ${error.message}`);
    }
  };
  

  return (
    <header className="sticky z-10 top-0 bg-white p-2 lg:p-4 lg:px-16 bg-custom-gradient text-gray-600">
      <div className="flex items-center justify-between p-4">
        <div>
          <img
            src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2019/06/print-1.svg"
            alt="Company Logo"
          />
        </div>
        <nav className="flex-1 mx-16">
          <ul className="hidden sm:flex justify-end gap-8 text-gray-500">
            <li className="navstyle">
              <Link to="/">HOME</Link>
            </li>
            <li className="navstyle">
              <Link to="/allproduct">ALL PRODUCT</Link>
            </li>
            <li className="navstyle">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="navstyle">
              <Link to="/contact">CONTACT</Link>
            </li>
            <li className="navstyle relative group">
              ACCOUNT
              <div className="absolute hidden group-hover:block bg-slate-50 drop-shadow-xl p-6">
                <ul>
                  <li className="navstyle">
                    <Link to="/myaccount">MY ACCOUNT</Link>
                  </li>
                  <li className="navstyle">
                    <Link to="/cart">CART</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4 text-xl items-center text-red-400 font-bold">
          <button onClick={() => setCart(!cart)}>₹0.00</button>
          <GiBasket onClick={() => setCart(!cart)} />
          <FaBars
            className="sm:hidden text-gray-600 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {open && (
        <nav className="flex justify-center text-gray-500">
          <ul className="text-center">
            <li className="navstyle">
              <Link to="/">HOME</Link>
            </li>
            <li className="navstyle">
              <Link to="/allproduct">ALL PRODUCT</Link>
            </li>
            <li className="navstyle">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="navstyle">
              <Link to="/contact">CONTACT</Link>
            </li>
            <li className="navstyle relative group">
              ACCOUNT
              <div className="absolute hidden group-hover:block bg-slate-50 drop-shadow-xl p-6">
                <ul>
                  <li className="navstyle">
                    <Link to="/myaccount">MY ACCOUNT</Link>
                  </li>
                  <li className="navstyle">
                    <Link to="/cart">CART</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      )}

      {/* Shopping Cart Sidebar */}
      <div className={`overflow-hidden transition-opacity duration-500 ${cart ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`border-2 bg-white absolute top-20 right-0 w-screen sm:w-2/6 h-screen drop-shadow-2xl p-4 ${cart ? 'block' : 'hidden'}`}>
          <div className="border-b flex justify-between">
            <p className="text-lg font-bold">Shopping Cart</p>
            <RxCross2 onClick={() => setCart(false)} className="text-gray-600 cursor-pointer hover:text-red-500" />
          </div>
          {cartItem && cartItem.length > 0 ? (
            cartItem.map((item) => (
              <div key={item.id} className="p-2">
                <div className="flex justify-between items-center">
                  <img src={item.url} alt="" className="w-12 h-12 object-cover" />
                  <div className="ml-4 flex-grow">
                    <p className="font-semibold">{item.design}</p>
                    <p>1 × £15.00</p>
                  </div>
                  <RxCross2 className="ml-4 cursor-pointer" onClick={() => deleteItemFromCart(item.id)} />
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center h-96">
              <p>Cart is empty</p>
            </div>
          )}
          <button className="mt-4 border-2 border-white text-white bg-red-500 rounded-xl p-2 hover:bg-red-600 w-full">
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
