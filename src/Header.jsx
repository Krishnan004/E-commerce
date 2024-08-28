import React, { useState } from 'react';
import { GiBasket } from 'react-icons/gi';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import api from './api/mainurl';

const Header = ({ cartItem, setCartItem,auth,setAuth }) => {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(false);

  const deleteItemFromCart = async (id) => {
    try {
      const response = await api.delete(`/cart/${id}`);
      setCartItem(prevItems => prevItems.filter(item => item.product_id !== id));
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
      <div className={` transition-all duration-300  ${cart ? 'opacity-100' : 'opacity-0 '}`}>
        <div className={`border-2 bg-white absolute top-20 right-0 w-screen sm:w-2/6 h-screen drop-shadow-2xl p-4 ${cart ? 'block' : 'hidden'}`}>
          <div className="border-b flex justify-between">
            <p className="text-lg font-bold">Shopping Cart</p>
            <RxCross2 onClick={() => setCart(false)} className="text-gray-600 cursor-pointer hover:text-red-500" />
          </div>
          {cartItem && cartItem.length > 0 ? (
            cartItem.map((item) => (
              <div key={item.product_id} className="p-2">
                <div className="flex justify-between items-center">
                  <img src={`https://e-com-server-1-9p85.onrender.com/upload/${item.product_src}`} alt="" className="w-12 h-12 object-cover" />
                  <div className="ml-4 flex-grow">
                    <p className="font-semibold">{item.design}</p>
                    <p>1 × £{item.price}</p>
                  </div>
                  <RxCross2 className="ml-4 cursor-pointer" onClick={() => deleteItemFromCart(item.product_id)} />
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
      {auth&&
      <div className="flex flex-col justify-center items-center absolute top-20 right-1/2 transform translate-x-1/2 bg-white border rounded-xl p-2 w-1/3">
          <p>Please login your account</p>
          <div>
          <button className="mt-4 border-2 border-white text-white bg-red-500 rounded-xl p-2 hover:bg-red-600" onClick={()=>setAuth(false)}>
              later
          </button>
          <Link to="/myaccount">
          <button className="mt-4 border-2 border-white text-white bg-red-500 rounded-xl p-2 hover:bg-red-600" onClick={()=>setAuth(false)}>
              Login
          </button>
          </Link>
          </div>
      </div>
      }
    </header>
  );
};

export default Header;
