import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../api/mainurl';
import { FaStar } from "react-icons/fa";

const ViewProduct = ({username,email, fetch, setCartItem, cartItem,user_id } ) => {
  const location = useLocation();
  const [rating,setRating]=useState(null)
  const [hover,sethover]=useState(null)
  const [des, setDes] = useState(true);
  const [review, setReview] = useState(false);
  const [save,setSave]=useState({})
  const [allReview,setAllReview]=useState([])

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await api.get(`/clientreview`, {
                params: { user_id }
            });
            console.log("review", response.data);
            setReview(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
}, [user_id]);

  const { product_id,product_src, name, price,description,design } = location.state||{ product_id:"", product_src:"",name:"",price:"",description:"",design:""} ;

  const handleReview=async(e)=>{
    e.preventDefault()
    try {
      await api.post("/review",{user_id,product_id,rating,comment:save.review,image_src:product_src})
      console.log("review updated")
    } catch (error) {
      console.log("error in updating review:",error)
    }
    
  }

  const addItemToCart = async () => {
    if (!user_id) {
      console.log('User is not authenticated or user_id is missing.');
      // Optionally handle this case, e.g., redirect to login or display a message.
      return;
    }
    if ((!cartItem.some((i) => i.product_id === product_id) && user_id ) || cartItem.length==0) {
      try {
        await api.post("/cart", {
          user_id,
          product_id,
          product_src,
          name,
          design,
          price
        });
        const responsecart = await api.get('/cart', { params: { user_id } });
        setCartItem(responsecart.data);
        console.log('Item added to cart:', name); // Use 'name' instead of 'item'
      } catch (error) {
        console.log(`Error adding item to cart: ${error.message}`);
        // Optionally, set a state to display an error message to the user
      }
    }  
    else {
      console.log('Item is already in the cart');
      // Optionally, set a state to inform the user
    }
  };
  
  
  const handleChnage=(e)=>{
  const {value,id}=e.target;
    setSave(prev=>({...prev,[id]:value}))
    console.log(save)
  }
  

  return (
    <div className="bg-custom-gradient p-8 text-gray-700">
      <div className="bg-white sm:p-20">
        <div className="sm:flex gap-8 bg-white p-2 sm:p-8 leading-loose border-b">
          <img src={`https://e-com-server-1-9p85.onrender.com/upload/${product_src}`}  alt={name} className="sm:w-1/3" />
          <div className="sm:p-12">
            <div className="border-b p-2">
              <h1 className="text-2xl tracking-wide my-2">{name}</h1>
              <p className="font-semibold my-2">{price}.00 + Free Shipping</p>
              <p>{description}</p>
              <input type="number" className="border w-10 my-2" />
              <button
                className="border-2 border-white text-white bg-red-500 rounded-xl px-4 hover:bg-red-600 w-48 my-2"
                onClick={() => addItemToCart()}
              >
                ADD TO CART
              </button>
            </div>
            <label className="my-2">Category: {name}</label>
          </div>
        </div>
        <div>
          <div className="flex gap-4 m-6">
            <button className="font-semibold" onClick={() => { setDes(true); setReview(false); }}>
              Description
            </button>
            <button className="font-semibold" onClick={() => { setReview(true); setDes(false); }}>
             {` Reviews (${review.length})`}
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
              <h4 className="text-lg sm:text-xl">Be the first to review “{name}”</h4>
              <p>Your email address will not be published. Required fields are marked *</p>
              <div className="flex gap-4 items-center">
              <label htmlFor="rating" className="">Your rating *</label>
              <div className="flex">
              {[...Array(5)].map((star,index)=>{
                const currentRating=index+1;
                return (
                  <label key={index} className="flex">
                     <input type="radio" 
                     name="rating" 
                     className="hidden" 
                     value={currentRating}
                     onClick={()=>setRating(currentRating)}
                     />
                     <FaStar 
                     size={18}
                     color={currentRating<=(hover || rating)?"#ffc107":"#e4e5e9"}
                     className="cursor-pointer"
                     onMouseEnter={()=>sethover(currentRating)}
                     onMouseLeave={()=>sethover(null)}/>
                  </label>
              );
              })}
              </div>
              </div>
              <form onSubmit={handleReview}>
              {!rating &&(
              <p className="text-lg font-medium text-red-400">! Please give your rating</p>
              )}
              <label htmlFor="review">Your review *</label>
              <textarea id="review" className=" container ck border h-20" onChange={handleChnage} required />
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="block container h-14 border" value={username} id="name" onChange={handleChnage} required/>
                </div>
                <div className="w-1/2">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="block container h-14 border" id="email" value={email} onChange={handleChnage} required />
                </div>
              </div>
              <div>
                <input type="checkbox" className="border mr-4" id="save-info" />
                <label htmlFor="save-info">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>
              <button
                className={`border-2 border-white text-white bg-red-500 rounded-xl p-2 hover:bg-red-600 w-48 ${rating ? "block" : "hidden"}`}
                type="submit"
              >
                SUBMIT
              </button>

              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
