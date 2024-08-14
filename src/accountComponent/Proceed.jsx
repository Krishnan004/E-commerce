import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../api/mainurl';

const Proceed = ({email,user_id}) => {
  const [error, setError] = useState({});
  const [address, setAddress] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  
  const { total, item, quant } = location.state || { total: 0, item: [], quant: {} };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
  
    const requiredFields = ["first_name", "last_name", "city", "zip_code", "state", "country", "mobile_number", "email"];
    const missingFields = requiredFields.filter(field => !address[field]);
  
    if (missingFields.length === 0) {
    //   try {
    //     console.log(item)
    //     const response = await api.post("/order", 
    //     {
    //       first_name: address.first_name,
    //       last_name: address.last_name,
    //       product_name: item.name || '', // Provide a default value if missing
    //       company_name: address.company_name || '', // Optional field
    //       email,
    //       quantity: quant,
    //       total: total, // Assuming user_id is part of the address or state
    //       product_id: item.product_id || null, // Assuming product_id is part of the address or state
    //       user_id,
    //       address_line_1: address.address_line1,
    //       address_line_2: address.address_line2 || '', // Optional field
    //       city: address.city,
    //       state: address.state,
    //       zip_code: address.zip_code,
    //       country: address.country,
    //       mobile_number: address.mobile_number,
    //       notes: address.notes || '' // Optional field
    //     });
  
    //     console.log("order placed");
    //     console.log(response.data);
  
        navigate("/cart/checkout/placeorder", {
          state: {
            address: address,
            total: total,
            item: item,
            quant: quant
          }
        });
    //   } catch (error) {
    //     console.error("Error placing order:", error);
    //     // Handle error (e.g., show a notification or set error state)
    //   }
    } else {
      const newError = {};
      missingFields.forEach(field => {
        newError[field] = `Billing ${field} is a required field`;
      });
      setError(newError);
    }
  };
  
  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAddress(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="text-gray-600 p-2 sm:p-12 bg-slate-50">
      <div className="leading-loose my-8">
        <h1 className="border-b-4 border-red-400 text-2xl">Checkout</h1>
        <p>Have a coupon? Click here to enter your code</p>
      </div>
      <div>
        {Object.keys(error).map((key) => (
          <p key={key}>{error[key]}</p>
        ))}
      </div>
      <div className="sm:flex gap-12">
        <form className="border flex flex-col  space-y-6 sm:w-2/3 p-4" onSubmit={handleOnSubmit}>
          <h1 className="text-xl font-semibold block border-b-2">Billing details</h1>
          <div className="sm:flex justify-between">
            <div>
              <label className="font-semibold text-sm" htmlFor="first_name">First name</label>
              <input 
                className="h-10 border font-normal block" 
                type="text" 
                id="first_name" 
                value={address["first_name"] || ""} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <label className="font-semibold text-sm" htmlFor="last_name">Last name</label>
              <input 
                className="h-10 border font-normal block" 
                type="text" 
                id="last_name" 
                value={address["last_name"] || ""} 
                onChange={handleChange} 
              />
            </div>
          </div>
          <div>
            <label className="font-semibold text-sm" htmlFor="company_name">Company name (optional)</label>
            <input 
              className="h-10 border font-normal block w-full" 
              type="text" 
              id="company_name" 
              value={address["company_name"] || ""} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label className="font-semibold text-sm" htmlFor="country">Country / Region</label>
            <input 
              className="h-10 border font-normal block w-full" 
              type="text" 
              id="country" 
              value={address.country || ""} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label className="font-semibold text-sm" htmlFor="address-line1">Address</label>
            <input 
              className="h-10 border font-normal block w-full" 
              type="text" 
              id="address-line1" 
              placeholder="House number and street name" 
              value={address["address-line1"] || ""} 
              onChange={handleChange} 
            />
            <input 
              className="h-10 border font-normal block w-full mt-2" 
              type="text" 
              id="address-line2" 
              placeholder="Apartment, suite, unit, etc. (optional)" 
              value={address["address-line2"] || ""} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label className="font-semibold text-sm" htmlFor="city">Town / City</label>
            <input 
              className="h-10 border font-normal block w-full" 
              type="text" 
              id="city" 
              value={address.city || ""} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label className="font-semibold text-sm" htmlFor="state">State</label>
            <input 
              className="h-10 border font-normal block w-full" 
              type="text" 
              id="state" 
              value={address.state || ""} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label className="font-semibold text-sm" htmlFor="zip_code">Pincode</label>
            <input 
              className="h-10 border font-normal block w-full" 
              type="text" 
              id="zip_code" 
              value={address.zip_code || ""} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label className="font-semibold text-sm" htmlFor="mobile_number">Phone</label>
            <input 
              className="h-10 border font-normal block w-full" 
              type="text" 
              id="mobile_number" 
              value={address.mobile_number || ""} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label className="font-semibold text-sm" htmlFor="email">Email address</label>
            <input 
              className="h-10 border font-normal block w-full" 
              type="text" 
              id="email" 
              value={address.email || ""} 
              onChange={handleChange} 
            />
          </div>
          <div className="leading-loose my-8">
            <h1 className="border-b text-2xl">Additional information</h1>
            <div>
              <label className="font-semibold text-sm" htmlFor="notes">Order notes (optional)</label>
              <input 
                className="h-10 border font-normal block w-full" 
                type="text" 
                id="notes" 
                placeholder="Note about your order, e.g. special notes for delivery" 
                value={address.notes || ""} 
                onChange={handleChange} 
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="border sm:w-1/3 p-4 flex flex-col gap-8">
          <h1 className="font-semibold">Your order</h1>
          <div className="flex justify-between font-semibold">
            <p>Product</p>
            <p>Subtotal</p>
          </div>
          {item.map((i) => (
            <div key={i.product_id} className="border-b flex justify-between">
              <p>{i.name} x {quant[i.product_id] || 1}</p>
              <p>£{(i.price * (quant[i.product_id] || 1)).toFixed(2)}</p>
            </div>
          ))}
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>£{total.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p>£{total.toFixed(2)}</p>
          </div>
          <div>
            <input type="checkbox" id="cashondelivery" />
            <label htmlFor="cashondelivery"> Cash on delivery</label>
          </div>
          <div className="flex justify-between">
            <div>
              <input type="checkbox" id="paypal" />
              <label htmlFor="paypal"> PayPal</label>
            </div>
            <img src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png" className="w-1/3" />
          </div>
          <button className="border-2 border-white text-white bg-red-500 rounded-xl p-2 px-4 hover:bg-red-600" onClick={handleOnSubmit}>
            PROCEED TO PAYPAL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Proceed;
