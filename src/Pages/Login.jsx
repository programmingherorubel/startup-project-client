import React, { useContext, useState } from 'react';
import Navbar from '../Components/Navbar';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';

const Login = () => {
    const {loginUser,loading} = useContext(AuthContext)
    const [update,setUpdate] = useState({})
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'
    const handelOnChange = e =>{
        const field = e.target.name ;
        const value = e.target.value ;
        const newValue = {...update}
        newValue[field] = value 
        setUpdate(newValue)
    }

    const handelSubmit = e =>{
        e.preventDefault()
        loginUser(update.email,update.password)
        navigate(from)
    }

    if(loading){
      return <Loading/>
    }
  
    return (
        <>
        <Navbar/>
        <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-5">Login</h1>
        <form className="space-y-4" onSubmit={handelSubmit}>
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
          <button
            className="w-full bg-blue-500 text-white py-2 rounded"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
    </>
    );
};

export default Login;