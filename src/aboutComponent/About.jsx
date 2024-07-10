import React, { useState } from 'react'
import { FaRegSnowflake } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { FaGg } from "react-icons/fa";
import { FaGratipay } from "react-icons/fa6";
import { FaCaretRight,FaCaretDown } from "react-icons/fa";

const About = () => {

const [description,setDescription]=useState(false)
const [description1,setDescription1]=useState(false)
const [description2,setDescription2]=useState(false)
    return (
      <div className="text-gray-600">
        <div className="flex flex-col justify-center items-center bg-custom-gradient sm:p-20">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center p-6 ">
          <h1 className="text-4xl sm:text-6xl font-semibold mb-4 text-gray-700">About Us</h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
    </div>
    <div className="sm:grid grid-cols-4 gap-8 m-12 sm:p-12">
      <div className="row-span-2 col-span-2 flex flex-col gap-4">
        <h1 className="text-2xl sm:text-4xl font-semibold ">We Are Your Favourite, Online Store.</h1>
        <p className="text-gray-500 ">Dui habitasse provident eu etiam praesent placeat maiores temporibus, accumsan parturient autem, mi animi ipsa. Lobortis maxime quos, pellentesq.</p>
        <p className="text-gray-500 ">Dui habitasse provident eu etiam praesent placeat maiores temporibus, accumsan parturient autem, mi animi ipsa. Lobortis maxime quos, pellentesq.</p>
      </div>
      <div className="flex flex-col gap-4">
        <FaRegSnowflake className="text-2xl text-red-500"/>
        <h1 className="text-2xl font-semibold ">Eros Imperdie</h1>
        <p className="text-gray-500 ">We’ll generate a sitemap for your site, submit it to search engine is and track.</p>
      </div>
      <div className="flex flex-col gap-4">
        <FaCodepen className="text-2xl text-red-500" />
        <h1 className="text-2xl font-semibold ">Proident Congu</h1>
        <p className="text-gray-500 ">We’ll generate a sitemap for your site, submit it to search engine is and track.</p>
      </div>
      <div className="flex flex-col gap-4">
        <FaRegHandPaper className="text-2xl text-red-500" />
        <h1 className="text-2xl font-semibold ">Rerum Rutrum</h1>
        <p className="text-gray-500 ">We’ll generate a sitemap for your site, submit it to search engine is and track.</p>
      </div>
      <div className="flex flex-col gap-4">
        <FaGg className="text-2xl text-red-500" />
        <h1 className="text-2xl font-semibold ">Vero Maecenas</h1>
        <p className="text-gray-500 ">We’ll generate a sitemap for your site, submit it to search engine is and track.</p>
      </div>
    </div>
      <div className="sm:flex bg-red-500 justify-center p-12 gap-8">
        <h1 className="text-3xl sm:text-4xl text-white font-semibold">Get Best Offers On Customized Designs!</h1>
        <button className="border-2 border-white text-white bg-red-500 rounded-xl px-4 hover:text-red-500 hover:bg-white">GET STARTED</button>
      </div>
      <div className="flex flex-col items-center gap-10 py-12">
        <h1 className="text-2xl sm:text-4xl font-semibold ">Meet Our Creative Team</h1>
        <p className=" m-4 border-b-2 border-red-500  w-12"> </p>
        <div className="sm:flex gap-20">
          <div className="flex flex-col items-center">
            <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/image-14.jpg" alt=""/>
            <h3 className="font-semibold text-xl">Amanda Lee</h3>
            <p>Creative Head</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/team-0.jpg" alt=""/>
            <h3 className="font-semibold text-xl">Lee Stoner</h3>
            <p>Marketing Head</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/team-01.jpg" alt=""/>
            <h3 className="font-semibold text-xl">Monica Gala</h3>
            <p>Graphic Designer</p>
          </div>
        </div>
      </div>
      <div className="sm:flex gap-4 p-12">
      <div className="grid grid-cols-2">
        <h1 className="text-2xl sm:text-4xl col-span-2">Best Quality Printed T-Shirts & Mugs At Affordable Price!</h1>
        <p className="text-gray-500 flex gap-4"><FaGratipay className="text-red-500" /> Personal Gifts</p>
        <p className="text-gray-500 flex gap-4"><FaGratipay className="text-red-500" /> Couple Tshirt</p>
        <p className="text-gray-500 flex gap-4"><FaGratipay className="text-red-500" /> Occasional Gifts</p>
        <p className="text-gray-500 flex gap-4"><FaGratipay className="text-red-500" /> Wedding Package</p>
        <p className="text-gray-500 flex gap-4"><FaGratipay className="text-red-500" /> Corporate Gifts</p>
        <p className="text-gray-500 flex gap-4"><FaGratipay className="text-red-500" /> Corporate Gifts</p>
      </div>
      <div className="drop-shadow-xl border p-4 basis-3/4">
        <div>
          <h4 className=" font-semibold flex gap-4 p-6 border-b">
            {description ? (
              <FaCaretDown className="text-red-500" onClick={() => setDescription(!description)} />
            ) : (
              <FaCaretRight className="text-red-500" onClick={() => setDescription(!description)} />
            )}
            We Can Custom Design Your Ideas
          </h4>
          <div className={`overflow-hidden transition-all duration-500 ${description ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="p-4">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>
        <div>
          <h4 className=" font-semibold flex gap-4 p-6 border-b">
            {description1 ? (
              <FaCaretDown className="text-red-500" onClick={() => setDescription1(!description1)} />
            ) : (
              <FaCaretRight className="text-red-500" onClick={() => setDescription1(!description1)} />
            )}
            We Can Custom Design Your Ideas
          </h4>
          <div className={`overflow-hidden transition-all duration-500 ${description1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="p-4">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>
        <div>
          <h4 className=" font-semibold flex gap-4 p-6 border-b">
            {description2 ? (
              <FaCaretDown className="text-red-500" onClick={() => setDescription2(!description2)} />
            ) : (
              <FaCaretRight className="text-red-500" onClick={() => setDescription2(!description2)} />
            )}
            We Can Custom Design Your Ideas
          </h4>
          <div className={`overflow-hidden transition-all duration-500 ${description2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="p-4">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="sm:flex gap-20 p-12  leading-loose">
        <div className="flex flex-col items-center text-center">
          <img 
            src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2021/03/shipping.png" 
            alt="Shipping" 
            className="w-20 m-2" 
          />
          <h2 className="text-xl font-semibold">Worldwide Shipping</h2>
          <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img 
            src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2021/03/badge.png" 
            alt="Shipping" 
            className="w-20 m-2" 
          />
          <h2 className="text-xl font-semibold">Best Quality</h2>
          <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img 
            src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2021/03/discount.png" 
            alt="Shipping" 
            className="w-20 m-2" 
          />
          <h2 className="text-xl font-semibold">Best Offers</h2>
          <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img 
            src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2021/03/lock.png" 
            alt="Shipping" 
            className="w-20 m-2" 
          />
          <h2 className="text-xl font-semibold ">Secure Payments</h2>
          <p className="">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
    </div>
    </div>
    )
}

export default About
