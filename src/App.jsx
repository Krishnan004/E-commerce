import './App.css';
import Header from './Header';
import Footer from './Footer';
import Mainhome from './Mainhome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './allProductComponent/Product';
import About from './aboutComponent/About';
import Contact from './contactComponent/Contact';
import MyAccount from './accountComponent/MyAccount';
import Cart from './accountComponent/Cart';
import ViewProduct from './allProductComponent/ViewProduct';
import { useState,useEffect } from 'react';
import api from './api/mainurl';
import Proceed from './accountComponent/Proceed';
import CashOnDelivery from './accountComponent/CashOnDelivery';
import useScrollTop from './UseScrollTop';
import Sigin from './accountComponent/Sigin';


function App() {
  const [cartItem,setCartItem]=useState([])
  const [auth,setAuth]=useState(true)
  const [user_id,setUser_id]=useState()
  const [username,setUsername]=useState()
  const [email,setEmail]=useState()
  const [fetch, setFetch] = useState([])
  
  
  useEffect(() => {
    // fetch allProduct and cartItems
    const fetchProduct = async () => {
      try {
        const response = await api.get('/product');
        const responsecart = await api.get('/cart', { params: { user_id } });
        console.log(response.data);
        setFetch(response.data);
        setCartItem(responsecart.data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    console.log("hello")

    // verify authentication using localstorage stored token
    const handleAuth = async () => {
      console.log("checking auth")
      try {
          const token = localStorage.getItem('token');

          if (!token) {
              throw new Error('Token not found');
          }

          const config = {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          };

          const
              res = await api.get('/checkauth', config);
          setUser_id(res.data.user_id); // Set the user_id in state
          setUsername(res.data.username);
          setEmail(res.data.email);
          console.log(res.data.user_id); // Assuming the API returns user data
      } catch (error) {
          console.error(error);
          // Handle error appropriately, e.g., redirect to login, show error message
          return null; // Or throw a custom error
      }
  };
    handleAuth();
    fetchProduct();
  }, []);
  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     localStorage.clear(); // Or remove specific items
  //   };

  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);   

  //   };
  // }, []);
  
  return (
    <div className="font-poppins">
      <Router>
        <Header  cartItem={cartItem} setCartItem={setCartItem} auth={auth} setAuth={setAuth} />
          <Routes>
            <Route path="/" element={<Mainhome />} />
            <Route path="/allproduct" element={<Product fetch={fetch}   />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/myaccount" element={<MyAccount setEmail={setEmail} setUsername={setUsername} user_id={user_id} setUser_id={setUser_id} setCartItem={setCartItem} />} />
            <Route path="/cart" element={<Cart  cartItem={cartItem} setCartItem={setCartItem}/>} />
            <Route path="/cart/checkout" element={<Proceed email={email} user_id={user_id}/>}/>
            <Route path="/allproduct/:id" element={<ViewProduct auth={auth} setAuth={setAuth} username={username} email={email} user_id={user_id} fetch={fetch} cartItem={cartItem} setCartItem={setCartItem} />} />
            <Route path="/cart/checkout/placeorder" element={<CashOnDelivery/>}/>
            <Route path="/register" element={<Sigin/>} />
          </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
