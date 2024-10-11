import React from 'react'

const Loading = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen ">
                <div className="border-l-4 border-red-400 rounded-full animate-spin w-12 h-12"></div>
            </div>
        </div>
    )
}

export default Loading
