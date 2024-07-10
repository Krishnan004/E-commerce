import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Proceed = () => {
  const [address, setAddress] = useState({});
  const location = useLocation();
  console.log("Location state:", location.state); // Debugging line

  // Destructure total, item, and quant from location.state
  const { total, item, quant } = location.state || { total: 0, item: [], quant: {} };

  // console.log("Total:", total);
  // console.log("Items:", item);
  // console.log("Quantities:", quant);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAddress(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="text-gray-600 p-12 bg-slate-50">
      <div className="leading-loose my-8">
        <h1 className="border-b-4 border-red-400 text-2xl">Checkout</h1>
        <p>Have a coupon? Click here to enter your code</p>
      </div>
      <div className="flex gap-12">
        <form className="border flex flex-col space-y-6 w-2/3 p-4">
          <h1 className="text-xl font-semibold block border-b-2">Billing details</h1>
          <div className="flex justify-between">
            <div>
              <label className="font-semibold text-sm" htmlFor="first-name">First name</label>
              <input 
                className="h-10 border font-normal block" 
                type="text" 
                id="first-name" 
                value={address["first-name"] || ""} 
                required
                onChange={handleChange} 
              />
            </div>
            <div>
              <label className="font-semibold text-sm" htmlFor="last-name">Last name</label>
              <input 
                className="h-10 border font-normal block" 
                type="text" 
                id="last-name" 
                value={address["last-name"] || ""} 
                onChange={handleChange} 
              />
            </div>
          </div>
          <div>
            <label className="font-semibold text-sm" htmlFor="company-name">Company name (optional)</label>
            <input 
              className="h-10 border font-normal block w-full" 
              type="text" 
              id="company-name" 
              value={address["company-name"] || ""} 
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
            <label className="font-semibold text-sm" htmlFor="town">Town / City</label>
            <input 
              className="h-10 border font-normal block w-full" 
              type="text" 
              id="town" 
              value={address.town || ""} 
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
            <label className="font-semibold text-sm" htmlFor="pincode">Pincode</label>
            <input 
              className="h-10 border font-normal block w-full" 
              type="text" 
              id="pincode" 
              value={address.pincode || ""} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label className="font-semibold text-sm" htmlFor="phone">Phone</label>
            <input 
              className="h-10 border font-normal block w-full" 
              type="text" 
              id="phone" 
              value={address.phone || ""} 
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
              <label className="font-semibold text-sm" htmlFor="optional">Order notes (optional)</label>
              <input 
                className="h-10 border font-normal block w-full" 
                type="text" 
                id="optional" 
                placeholder="Note about your order, e.g. special notes for delivery" 
                value={address.optional || ""} 
                onChange={handleChange} 
              />
            </div>
          </div>
        </form>
        <div className="border w-1/3 p-4 flex flex-col gap-8">
          <h1 className="font-semibold">Your order</h1>
          <div className="flex justify-between font-semibold">
            <p>Product</p>
            <p>Subtotal</p>
          </div>
          {item.map((i) => (
            <div key={i.id} className="border-b flex justify-between">
              <p>{i.name} x {quant[i.id] || 1}</p>
              <p>£{(i.rate * (quant[i.id] || 1)).toFixed(2)}</p>
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
          <Link to="/cart/checkout/placeorder"
          state={{address:address,total:total,item:item,quant:quant}}>
            <button className="border-2 border-white text-white bg-red-500 rounded-xl p-2 px-4 hover:bg-red-600">
              PROCEED TO PAYPAL
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Proceed;
