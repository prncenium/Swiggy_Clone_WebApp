import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { loginUser } from '../features/auth/authSlice';
import { SWIGGY_LOGO } from '../utils/const';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error} = useSelector((state)=> state.auth);

  
  const [email,setEmail] = useState("tommy@gmail.com");
  const [password,setPassword] = useState("123456");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!email || !password){
        setFormError("Please fill out all the fields")
        return;
    }
    if(password.length<6){
        setFormError("Password length must be atleast 6 characters")
        return;
    }
    setFormError("");
    dispatch(loginUser({ email, password }));

  };

  useEffect(()=>{
    if(user){
        navigate("/home")
    }
  },[user,navigate])

  return(
  <> <div className="max-w-md mx-auto p-9 bg-white shadow-md rounded-lg">
        <div className="flex justify-center mb-4 ">
            {/*swiggy logo*/}
            <img className='w-24 h-auto ' src={SWIGGY_LOGO} alt='Swiggy Logo' />
       </div>
  
    <h2 className='text-2xl font-semibold mb-4 text-center'>Login for Swiggy</h2>
    <form onSubmit={handleSubmit}>
        <input 
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='w-full p-2 mb-4 border border-gray-300 rounded'
        />
        

        <input
            type='password'
            placeholder= 'Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className='w-full p-2 mb-4 border border-gray-300 rounded'
        />
        
        {/*agr form bharne mei koi error aaye to kya krna h */}
        {formError && (<div className='text-red-500 text-sm mb-2'>{formError}</div>)} 

        {/*agr backend mei koi error aaye to kya krna h */}
        {error && (<div className='text-red-500 text-sm mb-2'>{error}</div>) }

        {/*agr user n click kr dia ḣbutton pe to jbtk load ho rha h, tbtk button disable kr do + jb loading true h text mei "signing up... likha aaye"*/}
        <button type='submit' disabled={loading} className='w-full p-2 bg-orange-400 text-white rounded hover:bg-orange-600' > {loading ? "Logging in..." : "Login"}</button>

    </form>
    </div>
    
  </>);
}

export default Login;




