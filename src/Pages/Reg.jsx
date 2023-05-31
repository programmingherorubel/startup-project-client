import React, { useContext, useState } from 'react';
import Navbar from '../Components/Navbar';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Reg = () => {
    const [update,setUpdate] = useState({})
    const {crateWebuser} = useContext(AuthContext)


    const handelOnChange = e =>{
        const field = e.target.name ;
        const value = e.target.value ;
        const newValue = {...update}
        newValue[field] = value 
        setUpdate(newValue)
    }

    const handelForm = e =>{
        e.preventDefault()
        if(update.password !== update.confirmPassword){
            return toast.error('password did not matched! try again! ' , {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        crateWebuser(update.email,update.password)
    }
   

    return (
        <>
        <Navbar/>
        <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-10 rounded shadow-lg">
          <h1 className="text-3xl font-bold mb-5">Registration</h1>
          <form className="space-y-4" onSubmit={handelForm}>
            <div>
              <label className="block mb-1" htmlFor="name">
                Name:
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="text"
                id="name"
                placeholder="Enter your name"
                onChange={handelOnChange}
                name='name'
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="email">
                Email:
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="email"
                id="email"
                placeholder="Enter your email"
                onChange={handelOnChange}
                name='email'
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="password">
                Password:
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="password"
                id="password"
                placeholder="Enter your password"
                onChange={handelOnChange}
                name='password'
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="confirmPassword">
                Confirm Password:
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                onChange={handelOnChange}
                name='confirmPassword'
              />
            </div>
            <div className='text-center'>
                <button
                className="w-full bg-blue-500 text-white py-2 rounded"
                type="submit"
                >
                Register
                </button>
            </div>
          </form>
        </div>
      </div>
      </>
    );
};

export default Reg;