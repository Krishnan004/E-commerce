import React, { useState, useEffect } from 'react'
import api from '../api/mainurl';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyAccount = ({ setUsername, setEmail, user_id, setUser_id, setCartItem }) => {
    const [values, setValues] = useState({})
    const [error, setError] = useState(false)
    const handleChnange = (e) => {
        const { value, id } = e.target;
        setValues(prev => ({ ...prev, [id]: value }))
        console.log(values)
    }
    

    axios.defaults.withCredentials = true;

    // Account login 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { password, email } = values; // Ensure values is defined and contains email and password

        try {
            const response = await api.post('/user', { password, email });
            const res = response.data.user; // Safely access the user object

            if (res) { // Ensure res is not undefined
                setUser_id(res.user_id); // Set the user_id in state
                setUsername(res.username);
                setEmail(res.email);
                localStorage.setItem("token", response.data.token)

                const responsecart = await api.get('/cart', { params: { user_id: res.user_id } });
                setCartItem(responsecart.data);
                console.log(res); // Log the response data directly after receiving it
            } else {
                throw new Error("Invalid user response"); // Handle the case where user data is not returned
            }
        } catch (error) {
            console.log("Error in fetching user_id", error.response ? error.response.data : error.message);
            setError(true);
        }
    };

    const handleLogOut=()=>{
        window.location.reload();
        localStorage.clear()
    }



    return (
        <div className="p-12 text-gray-600 bg-custom-gradient">
            {!user_id && (
                <h1 className="text-4xl font-semibold p-4">Login</h1>
            )}
            {user_id ? (
                <div className="text-4xl h-screen flex flex-col gap-8 items-center justify-center font-semibold">
                    <h1>Your Account has logged in sucessfully</h1>
                    <button  className="border-2 border-white text-white text-sm bg-red-500 rounded-xl p-2 px-4  hover:bg-red-600 " onClick={handleLogOut}>Log out</button>
                </div>
            ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8 basis-3/4 border p-12 ">
                        {error && (
                            <div>
                                <p className="text-red-500">Enter valid email and password</p>
                            </div>
                        )}
                        <div>
                            <label htmlFor="email" className="block">Username or email address</label>
                            <input type="email" className="border container" id="email" onChange={handleChnange} />
                        </div>
                        <div>
                            <label htmlFor="password" className="block">Password</label>
                            <input type="password" className="border container" id="password" onChange={handleChnange} />
                        </div>
                        <div className="flex">
                            <input type="checkbox" className="border " id="remember" />
                            <label htmlFor="remember" className="">Remember me</label>
                        </div>
                        <button className="border-2 border-white text-white bg-red-500 rounded-xl p-2 px-4  hover:bg-red-600 w-48" type="submit" onClick={handleSubmit} >LOG IN</button>
                        <Link to="/register">
                            <label className="text-red-500">Create new account</label>
                        </Link>
                    </form>
                )}
        </div>
    )
}

export default MyAccount
