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
  
  // const [fetch, setFetch] = useState([
  //   { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee.jpg", name: "Mug", design: "Black Printed Coffee Mug", rate: 1, id: 1 },
  //   { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/tshirt4-600x600.jpg", name: "Tshirts", design: "Green Printed Tshirt", rate: 2, id: 2 },
  //   { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-yellow-300x300.jpg", name: "Mug", design: "Father’s Day Coffee Mug", rate: 3, id: 3 },
  //   { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee.jpg", name: "Tshirt", design: "Green Printed Tshirt", rate: 4, id: 4 },
  //   { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/tshirt4-600x600.jpg", name: "Tshirts", design: "Green Printed Tshirt", rate: 5, id: 5 },
  //   { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee.jpg", name: "Mug", design: "Black Printed Coffee Mug", rate: 6, id: 6 },
  //   { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-yellow-300x300.jpg", name: "Mug", design: "Father’s Day Coffee Mug", rate: 7, id: 7 },
  //   { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee.jpg", name: "Tshirt", design: "Green Printed Tshirt", rate: 8, id: 8 },
  //   { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/tshirt4-600x600.jpg", name: "Tshirts", design: "Green Printed Tshirt", rate: 9, id: 9 },
  //   { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee.jpg", name: "Mug", design: "Black Printed Coffee Mug", rate: 10, id: 10 },
  //   { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-yellow-300x300.jpg", name: "Mug", design: "Father’s Day Coffee Mug", rate: 11, id: 11 },
  //   { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee.jpg", name: "Tshirt", design: "Green Printed Tshirt", rate: 12, id: 12 },
  //   { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee.jpg", name: "Mug", design: "Black Printed Coffee Mug", rate: 13, id: 13 },
  //   { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/tshirt4-600x600.jpg", name: "Tshirts", design: "Green Printed Tshirt", rate: 14, id: 14 },
  //   { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-yellow-300x300.jpg", name: "Mug", design: "Father’s Day Coffee Mug", rate: 15, id: 15 },
  //   { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee.jpg", name: "Tshirt", design: "Green Printed Tshirt", rate: 16, id: 16 },
  //   { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/tshirt4-600x600.jpg", name: "Tshirts", design: "Green Printed Tshirt", rate: 17, id: 17 },
  //   { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee.jpg", name: "Mug", design: "Black Printed Coffee Mug", rate: 18, id: 18 },
  //   { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-yellow-300x300.jpg", name: "Mug", design: "Father’s Day Coffee Mug", rate: 19, id: 19 },
  // ]);

  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get('/product');
        const responsecart = await api.get('/cart', { params: { user_id } });
        console.log(responsecart.data);
        setFetch(response.data);
        setCartItem(responsecart.data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    console.log("hello")
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
  console.log(user_id)
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
