import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/mainurl';

const Cart = ({ cartItem, setCartItem }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    if(cartItem.length>0){
    calculateTotal();
    }
  }, [cartItem]);

  const calculateTotal = () => {
    const total = cartItem.reduce((acc, item) => {
      const quantity = quantities[item.product_id] || 1; // Default quantity is 1 if not set
      return acc + (item.price * quantity);
    }, 0);
    setTotalAmount(total);
  };

 

  const deleteItemFromCart = async (id) => {
    try {
      await api.delete(`/cart/${id}`);
      // Filter out the deleted item from the cartItem state directly
      setCartItem(prevItems => prevItems.filter(item => item.product_id !== id));
    } catch (error) {
      console.log(`Error deleting cart item: ${error.message}`);
    }
  };

  const handleQuantityChange = (id, newQuantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: newQuantity
    }));
  };

  console.log("Quantities:", quantities);
  return (
    <div className="p-4 md:p-8">
      {cartItem && cartItem.length > 0 ? (
        <div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border">
              <thead className="hidden sm:table-header-group">
                <tr>
                  <th className="py-2 px-4 font-semibold text-left">Item</th>
                  <th className="py-2 px-4 font-semibold text-left">Product</th>
                  <th className="py-2 px-4 font-semibold text-left">Price</th>
                  <th className="py-2 px-4 font-semibold text-left">Quantity</th>
                  <th className="py-2 px-4 font-semibold text-left">Subtotal</th>
                  <th className="py-2 px-4 font-semibold text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItem.map((item) => (
                  <tr key={item.cart_id} className="border-t grid grid-cols-1 sm:table-row">
                    <td className="py-2 px-4">
                      <img src={`https://e-com-server-2.onrender.com/upload/${item.product_src}`} alt={item.name} className="w-16 h-16 object-cover" />
                    </td>
                    <td className="py-2 px-4"><span className="font-semibold sm:hidden">Product : </span>{item.name}</td>
                    <td className="py-2 px-4"><span className="font-semibold sm:hidden">Price : </span>{item.price}</td>
                    <td className="py-2 px-4">
                      <span className="font-semibold sm:hidden">Quantity : </span>
                      <input
                        type="number"
                        value={quantities[item.product_id] || 1} // Default value is 1 if quantity is not defined
                        onChange={(e) => handleQuantityChange(item.product_id, parseInt(e.target.value))}
                        className="w-16 text-center"
                      />
                    </td>
                    <td className="py-2 px-4"><span className="font-semibold sm:hidden">Subtotal : </span>{(item.price * (quantities[item.product_id] || 1)).toFixed(2)}</td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => deleteItemFromCart(item.product_id)}
                        className="bg-red-500 text-white p-2 rounded"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="w-full flex justify-between border-t p-4">
                <section className="flex flex-col md:flex-row gap-4">
                  <input type="text" className="border p-2" placeholder="Coupon code" />
                  <button className="bg-red-500 text-white p-2 rounded">
                    APPLY COUPON
                  </button>
                </section>
              </tfoot>
            </table>
          </div>
          <div className="mt-4 border p-4 md:p-8 md:w-1/2">
            <h1 className="text-xl font-semibold mb-4">Cart totals</h1>
            <div className="grid grid-cols-2 gap-4 border-y py-2">
              <label>Subtotal</label>
              <label>{totalAmount.toFixed(2)}</label>
              <label>Total</label>
              <label>{totalAmount.toFixed(2)}</label>
            </div>
            <Link to="/cart/checkout" state={{ total: totalAmount, item: cartItem, quant: quantities }}>
              <button className="border-2 border-white text-white bg-red-500 rounded-xl p-2 px-4 hover:bg-red-600 w-full md:w-48 mt-4">
                PROCEED TO CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <h1 className="text-center">Your cart is currently empty.</h1>
      )}
      <Link to="/allproduct">
        <button className="border-2 border-white text-white bg-red-500 rounded-xl p-2 px-4 hover:bg-red-600 w-full md:w-48 mt-4">
          RETURN TO SHOP
        </button>
      </Link>
    </div>
  );
};

export default Cart;
