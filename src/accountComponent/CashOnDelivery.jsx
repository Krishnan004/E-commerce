import React  from 'react'
import { useLocation } from 'react-router';

const CashOnDelivery = () => {
    const location = useLocation();

    const { address } = location.state || {address:{}};
    const { total, item, quant } = location.state || { total: 0, item: [], quant: {} };
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 since months are zero-based
    const day = date.getDate().toString().padStart(2, '0');

    const currentDate = `${year}-${month}-${day}`;

    console.log(address)
    return (
        <div className="text-gray-600 p-12 flex flex-col gap-6 bg-slate-50">
            <h1 className="text-4xl">Checkout</h1>
            <p className="text-sm">Thank you. Your order has been received.</p>
            <div className="flex divide-x-2 gap-6 text-xs">
                <label htmlFor="">ORDER NUMBER:</label>
                <label htmlFor="">DATE: <span className="font-semibold block text-lg">{currentDate}</span></label>
                <label htmlFor="">TOTAL: <span className="font-semibold block text-lg">£{total.toFixed(2)}</span></label>
                <label htmlFor="">PAYMENT METHOD: <span className="font-semibold block text-lg">Cash on delivery</span></label>
            </div>
            <p className="text-sm">Pay with cash upon delivery.</p>
            <div className="border p-4" >
                <h1 className="text-2xl font-semibold border-b bg-white">Order details</h1>
                <table className=" w-full divide-y space-x-4">
                    <tr className="font-semibold">
                        <td>Product</td>
                        <td >Total</td>
                    </tr>
                    {item.map((i) => (
                    <tr>
                        <td>{i.name} x {quant[i.id] || 1}</td>
                        <td>£{(i.rate * (quant[i.id] || 1)).toFixed(2)}</td>
                    </tr>
                    ))}
                    <tr>
                        <td>Subtotal:</td>
                        <td>£{total.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Payment method:</td>
                        <td>Cash on delivery</td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>£{total.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Note:</td>
                        <td>{address.optional}</td>
                    </tr>
                </table>
            </div>
            <div className="border p-4">
                <h1 className="text-2xl font-semibold border-b bg-white">Billing address</h1> 
                <p>{address["first-name"]} {address["last-name"]}</p>
                <p>{address["address-line1"]}</p>
                <p>{address["address-line2"]}</p>
                <p>{address.town} {address.pincode}</p>
                <p>{address.state}, {address.country}</p>
                <p>{address.phone}</p>
                <p>{address.email}</p>    
            </div>
        </div>
    )
}

export default CashOnDelivery
