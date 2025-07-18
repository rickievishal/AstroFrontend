import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebaseConfig/firebaseConfig';
import { FaGoogle } from "react-icons/fa";
import PhoneComp from '../PhoneComp';
import { useNavigate } from 'react-router';
import axios from 'axios';

const SignIn = ({setUser}) => {
    const navigate = useNavigate()
  const handleGoogleSignIn = async () => {
  try {

    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userData = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      phoneNumber : "",
      role : "user"
    };

    try{
      const user = await axios.post("http://localhost:8080/api/users", userData)
      localStorage.setItem("user", JSON.stringify(user.data[0]));
      setUser(user.data[0]); 
      navigate("/booking");
    }
    catch(err) {
      console.log(err)
    }
      // .then(() => console.log("User saved to backend"))
      // .catch((err) => console.error("Backend save error:", err));
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};


  return (
    <div className='w-full min-h-[80%] flex items-center justify-center'>
        <div className='max-w-[600px] flex flex-col justify-center items-center border mx-auto px-4 py-8 sm:px-8 sm:py-16 rounded-lg bg-purple-700 shadow-lg'>
        <h2 className='text-2xl'>Sign In</h2>
        <p className='mb-4'>Signing in is required to book an appointment</p>
        <button className='flex items-center gap-2 py-1 px-8 border rounded-lg mt-4 text-lg text-black bg-yellow-500' onClick={handleGoogleSignIn}><FaGoogle /> Sign in with Google</button>
        </div>
    </div>
  );
};

export default SignIn;