import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebaseConfig'
import { toast } from 'react-toastify';



export const AuthContext = createContext({})
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const auth = getAuth(app);

    // create Web User 
    const crateWebuser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                toast.success('new User create Successfull', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                toast.error(errorMessage, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            });
    }

    // login user 
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            setUser(user)
            toast.success('Login Successfull', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                toast.error(errorMessage, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            });
    }

    // Logout 
    const logout = ()=>{
        signOut(auth).then(() => {
            setUser({})
            toast.success('Successfully Logout', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
          }).catch((error) => {
            // An error happened.
          });
    }

    useEffect(()=>{
        setLoading(true)
        const unSubscribe = onAuthStateChanged(auth,(user)=>{
            setUser(user)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
           
    },[])


    const information = {
        user,
        error,
        loading,
        crateWebuser,
        loginUser,
        logout
    }
    return (
        <AuthContext.Provider value={information}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;