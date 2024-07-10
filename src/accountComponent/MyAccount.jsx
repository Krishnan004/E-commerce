import React from 'react'

const MyAccount = () => {
    return (
        <div className="p-12 text-gray-600 bg-custom-gradient">
            <h1 className="text-4xl font-semibold p-4">Login</h1>
            <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col gap-8 basis-3/4 border p-12 ">
            <div>
            <label htmlFor="email" className="block">Username or email address</label>
            <input type="email" className="border container" id="email" />
            </div>
            <div>
            <label htmlFor="password" className="block">Password</label>
            <input type="password"  className="border container" id="password"/>
            </div>
            <div className="flex">
            <input type="checkbox" className="border " id="remember"/>
            <label htmlFor="remember" className="">Remember me</label>
            </div>
            <button className="border-2 border-white text-white bg-red-500 rounded-xl p-2 px-4  hover:bg-red-600 w-48">LOG IN</button>
            <label className="text-red-500">Lost your password?</label>
            </form>
        </div>
    )
}

export default MyAccount
