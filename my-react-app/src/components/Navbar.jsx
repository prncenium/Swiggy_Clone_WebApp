import React from 'react'

import { useDispatch } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';
import {BriefcaseBusiness, ChevronDown, CircleHelp, House, Search, ShoppingBag, ShoppingCartIcon, User} from "lucide-react";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = ()=>{
        dispatch(logout());
        navigate("/login");
    }
    function handleLogout(){
        dispatch(logout());
        navigate('/login')
    
    }

    const handleSearchClick = () => {
        // This creates a custom event that we can listen for anywhere in the app
        window.dispatchEvent(new CustomEvent('focusSearchInput'));
    }

  return (
    <nav className='flex items-center justify-evenly px-10 py-5 border-b border-b-gray-200 bg-white shadow-sm'>
        <div className='flex items-center'>
            <div className='h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center'>
                <House size={24} className='text-white'/>
            </div>

            <div className='flex items-center'>
                <span className='font-semibold ml-2'> Other</span>
                <ChevronDown size={16} className=' ml-1 text-gray-600'/>
            </div> 
        </div>

            {/*nav items*/}
            <div className='flex items-center space-x-6'>

                <Link to="/home" className='flex items-center cursor-pointer hover:text-orange-700'>
                    <BriefcaseBusiness size={20} className='mr-1'/>
                    <span>Swiggy Corporate</span>
                </Link>

                <div className='flex items-center cursor-pointer' onClick={handleSearchClick}>
                    <Search size={20} className='mr-1'/>
                    <span className='hover:text-orange-700'> Search</span>
                </div>

                <Link to="/help" className='flex items-center cursor-pointer hover:text-orange-700'>
                    <CircleHelp size={20} className='mr-1'/>
                    <span>Help</span>
                </Link>

                <Link to='/signup' className='flex items-center'>
                    <User size={20} className='mr-1'/>
                    <span className='cursor-pointer hover:text-orange-700'>SignIn</span>
                </Link>
                

                <div className='flex items-center'>
                    <div className='relative flex '>
                        <ShoppingCartIcon size={20}/>
                        <span className='absolute -top-2 -right-2 bg-white border-gray-300 rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold'>0</span>
                        <span className='ml-1'>Cart</span>

                    </div>
                </div>

                <button onClick={handleLogout} className='px-6 py-1.5 bg-red-500 text-white cursor-pointer rounded-lg '>
                    Logout
                </button>

            </div>

        
    </nav>
  )
}

export default Navbar
 