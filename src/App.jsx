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

function App() {
  const [cartItem,setCartItem]=useState([])
  // const [fetch, setFetch] = useState([])
  const [fetch, setFetch] = useState([
    { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee.jpg", name: "Mug", design: "Black Printed Coffee Mug", rate: 1, id: 1 },
    { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/tshirt4-600x600.jpg", name: "Tshirts", design: "Green Printed Tshirt", rate: 2, id: 2 },
    { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-yellow-300x300.jpg", name: "Mug", design: "Father’s Day Coffee Mug", rate: 3, id: 3 },
    { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee.jpg", name: "Tshirt", design: "Green Printed Tshirt", rate: 4, id: 4 },
    { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/tshirt4-600x600.jpg", name: "Tshirts", design: "Green Printed Tshirt", rate: 5, id: 5 },
    { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee.jpg", name: "Mug", design: "Black Printed Coffee Mug", rate: 6, id: 6 },
    { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-yellow-300x300.jpg", name: "Mug", design: "Father’s Day Coffee Mug", rate: 7, id: 7 },
    { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee.jpg", name: "Tshirt", design: "Green Printed Tshirt", rate: 8, id: 8 },
    { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/tshirt4-600x600.jpg", name: "Tshirts", design: "Green Printed Tshirt", rate: 9, id: 9 },
    { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee.jpg", name: "Mug", design: "Black Printed Coffee Mug", rate: 10, id: 10 },
    { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-yellow-300x300.jpg", name: "Mug", design: "Father’s Day Coffee Mug", rate: 11, id: 11 },
    { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee.jpg", name: "Tshirt", design: "Green Printed Tshirt", rate: 12, id: 12 },
    { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee.jpg", name: "Mug", design: "Black Printed Coffee Mug", rate: 13, id: 13 },
    { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/tshirt4-600x600.jpg", name: "Tshirts", design: "Green Printed Tshirt", rate: 14, id: 14 },
    { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-yellow-300x300.jpg", name: "Mug", design: "Father’s Day Coffee Mug", rate: 15, id: 15 },
    { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee.jpg", name: "Tshirt", design: "Green Printed Tshirt", rate: 16, id: 16 },
    { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/tshirt4-600x600.jpg", name: "Tshirts", design: "Green Printed Tshirt", rate: 17, id: 17 },
    { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-coffee.jpg", name: "Mug", design: "Black Printed Coffee Mug", rate: 18, id: 18 },
    { url: "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-yellow-300x300.jpg", name: "Mug", design: "Father’s Day Coffee Mug", rate: 19, id: 19 },
  ]);

  useEffect(() => {
    const fetchProduct=async()=>{
    try {
      const response=await api.get('/product');
      const responsecart=await api.get('/cart');
      console.log(response.data)
      setFetch(response.data);
      setCartItem(responsecart.data);
    } catch (error) {
      console.log(error.response.data)
    }
  }
  fetchProduct();
  }, [])
  return (
    <div className="font-poppins">
      <Router>
        <Header  cartItem={cartItem} setCartItem={setCartItem} />
          <Routes>
            <Route path="/" element={<Mainhome />} />
            <Route path="/allproduct" element={<Product fetch={fetch}   />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/myaccount" element={<MyAccount/>} />
            <Route path="/cart" element={<Cart  cartItem={cartItem} setCartItem={setCartItem}/>} />
            <Route path="/cart/checkout" element={<Proceed/>}/>
            <Route path="/allproduct/:id" element={<ViewProduct fetch={fetch} cartItem={cartItem} setCartItem={setCartItem} />} />
            <Route path="/cart/checkout/placeorder" element={<CashOnDelivery/>}/>
          </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
