import React from 'react'
import { RiFacebookBoxFill } from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gray-600 text-white ">
            <div className="sm:flex gap-20 p-16 justify-around">
                <div className="w-72 leading-loose">
                    <h1 className="text-xl font-semibold">Custom Print Store</h1>
                    <div className="flex gap-8 leading-loose m-2 my-4 ">
                        <SlSocialInstagram className="hover:text-red-500 trasition duration-300"/>
                        <FaTwitter className="hover:text-red-500 trasition duration-300"/>
                        <RxLinkedinLogo className="hover:text-red-500 trasition duration-300"/>
                        <RiFacebookBoxFill className="hover:text-red-500 trasition duration-300"/>
                    </div>
                </div>
                <div className="w-72 ">
                    <h3 className="text-xl font-semibold">Get in Touch with Us for the Best Quality Custom Prints & Supplies.</h3>
                    <p className="leading-loose text-sm my-4">Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.</p>
                </div>
                <div className=" ">
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <div className="flex flex-col items-start leading-loose text-sm my-4">
                    <button className="hover:text-red-500 trasition duration-300">Know More About Us</button>
                    <button className="hover:text-red-500 trasition duration-300">Visit Store</button>
                    <button className="hover:text-red-500 trasition duration-300">Let’s Connect</button>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-xl font-semibold">Important Links</h3>
                    <div className="flex flex-col items-start leading-loose text-sm my-4">
                    <button className="hover:text-red-500 trasition duration-300">Privacy Policy</button>
                    <button className="hover:text-red-500 trasition duration-300">Shipping Details</button>
                    <button className="hover:text-red-500 trasition duration-300">Terms & Conditions</button>
                    </div>
                </div>
            </div>
            <div className="sm:flex justify-between text-xs p-16 border-t border-black">
                <p>Copyright © 2024 | Custom Printing</p>
                <p>Powered By Custom Printing</p>
            </div>
        </div>
    )
}

export default Footer
