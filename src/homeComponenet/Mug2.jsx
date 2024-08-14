import React, { useEffect, useState } from 'react'
import api from '../api/mainurl';

const Mug2 = () => {

    const [product,setProduct]=useState([])

    useEffect(()=>{
        const fetchdata=async()=>{
            try {
                const response=await api.get("/homeproduct")
                console.log(response.data)
                setProduct(response.data)
            } catch (error) {
                console.log("error in fetch homeproduct"+" "+data)
            }
        }
        fetchdata()
    },[])
    return (
        <div className="m-8">
            <div className="text-center text-gray-700 m-12">
                <h1 className="text-xl sm:text-4xl font-semibold">Our Featured Products</h1>
                <div className="flex justify-center">
                <p className=" m-4 border-b-2 border-red-500  w-12"> </p>
                </div>
            </div>
            <div className="sm:flex justify-around gap-8 text-gray-500 p-6">
            {product.slice(4,8).map(item=>(
                <div key={item.product_id}>
                    <img src={`https://e-com-server-1-9p85.onrender.com/upload/${item.product_src}`} alt="" className="size-64"/>
                    <div className="text-center">
                        <p>{item.product_name}</p>
                        <h2 className="font-semibold">{item.design}</h2>
                        <p>☆☆☆☆☆</p>
                        <p className="font-medium">{item.price}</p>
                    </div>
                    
                </div>
                ))}
                {/* <div>
                    <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-white-300x300.jpg" alt=""/>
                    <div className="text-center">
                        <p>MUG</p>
                        <h2 className="font-medium">Blackprinted coffee mug</h2>
                        <p>☆☆☆☆☆</p>
                        <p className="font-medium">£15.00</p>
                    </div>
                    
                </div>
                <div>
                    <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-white-300x300.jpg" alt=""/>
                    <div className="text-center">
                        <p>MUG</p>
                        <h2 className="font-medium">Blackprinted coffee mug</h2>
                        <p>☆☆☆☆☆</p>
                        <p className="font-medium">£15.00</p>
                    </div>
                    
                </div>
                <div>
                    <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-white-300x300.jpg" alt=""/>
                    <div className="text-center">
                        <p>MUG</p>
                        <h2 className="font-medium">Blackprinted coffee mug</h2>
                        <p>☆☆☆☆☆</p>
                        <p className="font-medium">£15.00</p>
                    </div>
                    
                </div> */}
            
            </div>
        </div>

    )
}

export default Mug2
