import React, { useState } from 'react'
import api from '../api/mainurl';
import { useNavigate } from 'react-router';

const Sigin = () => {
    const [values,setValues]=useState({})
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response=await api.post("/register",values)
            console.log(response.data)
            navigate("/myaccount")
        } catch (error) {
            console.log("error in registration",error)
        }
    }
    const handleChnange=(e)=>{
        const {value,id}=e.target;
        setValues(prev=>({...prev,[id]:value}))
        console.log(values)
    }
    return (
        <div className="p-12 text-gray-600 bg-custom-gradient">
            <form  onSubmit={handleSubmit} className="flex flex-col gap-8 basis-3/4 border p-12 ">
            <div>
            <label htmlFor="first_name" className="block">First name</label>
            <input type="first_name" className="border container" id="first_name" onChange={handleChnange} />
            </div>
            <div>
            <label htmlFor="last_name" className="block">Last name</label>
            <input type="last_name" className="border container" id="last_name" onChange={handleChnange} />
            </div>
            <div>
            <label htmlFor="username" className="block">Username</label>
            <input type="username" className="border container" id="username" onChange={handleChnange} />
            </div>
            <div>
            <label htmlFor="email" className="block">email address</label>
            <input type="email" className="border container" id="email" onChange={handleChnange} />
            </div>
            <div>
            <label htmlFor="password" className="block">Password</label>
            <input type="password"  className="border container" id="password" onChange={handleChnange}/>
            </div>
            <button className="border-2 border-white text-white bg-red-500 rounded-xl p-2 px-4  hover:bg-red-600 w-48" type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default Sigin
