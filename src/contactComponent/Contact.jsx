import React from 'react'
import { FaMap } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="sm:flex gap-16 p-8 sm:p-20 text-gray-500 bg-custom-gradient" >
            <div className="flex flex-col gap-6">
                <h1 className="text-4xl text-gray-600 font-semibold">Say Hello.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <p className=" m-4 border-b-2 border-red-500  w-12"> </p>
                <p className="flex gap-4"><FaMap className="text-red-500" /> 212 7th St SE, Washington, DC 20003, USA</p>
                <p className="flex gap-4"><FaEnvelope className="text-red-500"/>info@example.com</p>
                <p className="flex gap-4"><FaPhone className="text-red-500"/>123-456-7890/91</p>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col gap-8 basis-3/4 border p-12 bg-white">
            <h1 className="text-2xl sm:text-3xl text-gray-600 font-semibold">Ask Your Queries</h1>
            <input type="email" className="border" placeholder="Your email" id=""/>
            <input type="text" className="border" placeholder="Subject"/>
            <input type="text" className="border h-20" placeholder="Message"/>
            <button className="border-2 border-white text-white bg-red-500 rounded-xl p-2 px-4  hover:bg-red-600 w-48">SEND MESSAGE</button>
            </form>
        </div>
    )
}

export default Contact
