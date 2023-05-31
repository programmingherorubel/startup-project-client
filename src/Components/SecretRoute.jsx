import React from 'react';
import Navbar from './Navbar';

const SecretRoute = () => {
    return (
        <>
        <Navbar/>
            <div className='flex justify-center text-center items-center h-[80vh]'><h1 className='text-4xl'>Secret Route</h1></div>
        </>
    );
};

export default SecretRoute;