import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user,logout} = useContext(AuthContext)

    return (
        <div>
            <ul className='flex gap-5 justify-center p-4'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/data'>DataPage</Link></li>
                <li><Link to='/secret'>SecretRoute</Link></li>
                {
                    user?.email ?
                    <li onClick={()=>logout()}><Link to='/'>Logout</Link></li>
                    :
                    <li><Link to='/login'>Login</Link></li>
                }
                <li><Link to='/reg'>SignUp</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;