import React from 'react'

const Home = () => {
    return (
        <div >
        <div className="bg-custom-gradient ">
        <div className="sm:flex justify-around  h-screen text-left p-4 sm:p-12  ">
            <div className="tracking-wide sm:py-12">
                <p className=" m-4 border-b-2 border-red-500  w-12"> </p>
                <p className="m-4 text-gray-600 font-medium  sm:text-xl leading-loose">Best Quality Products</p>
                <p className="m-4 text-gray-600 font-semibold text-3xl sm:text-6xl">
                    We Print What
                    </p>
                <p className="m-4 text-gray-600 font-semibold  text-3xl sm:text-6xl"> You Want!</p>
                <p className="m-4 text-gray-600 ">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien.</p>
                <button className="m-4 bg-red-500 text-white rounded p-2">GET STARTED</button>
            </div>
            <div className="sm:px-16">
                <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2019/06/image26-free.png"  className="object-cover "/>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Home
