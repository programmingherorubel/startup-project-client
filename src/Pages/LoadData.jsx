import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';

const LoadData = () => {
    const [fkData,setFkData] = useState([])
    

    useEffect(()=>{
        fetch(`http://localhost:9000/data`)
        .then(res => res.json())
        .then(data => setFkData(data))
    },[])

    return (
        <>
        <Navbar/>
            <div className='mt-10 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                {
                    fkData.map((item,index)=> <div className='m-4 p-3 shadow-lg ' key={index}>
                        <div className='mt-5'>
                            <h4 className='text-center text-2xl text-emerald-400'>{item.name}</h4>
                            <p className='font-semibold'>{item.email}</p>
                            <p className='text-center'><b>{item.category}</b></p>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default LoadData;