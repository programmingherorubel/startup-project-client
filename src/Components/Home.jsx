import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Navbar from './Navbar';

const Home = () => {
    const {user} = useContext(AuthContext)
    
    return (
        <>
        <Navbar/>
            <div className='flex justify-center text-center items-center h-[80vh]'><h1 className='text-4xl'>Hello world</h1></div>
        </>
    );
};

export default Home;