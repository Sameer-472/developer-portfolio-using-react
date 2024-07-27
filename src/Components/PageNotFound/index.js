import React from 'react'

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="text-xl">Page Not Found</p>
            <a href="/home" className="text-blue-500 mt-4">Go to Home</a>
        </div>
    )
}

export default PageNotFound