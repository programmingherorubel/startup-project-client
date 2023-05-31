import React from 'react';
import { GridLoader } from 'react-spinners';

const Loading = () => {
    return <>
                <div className='flex justify-center text-center items-center h-[80vh]'>
                <GridLoader color="#36d7b7"  />
                </div>
            </> 
};

export default Loading;