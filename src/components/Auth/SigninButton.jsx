import React, { useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import Button from '../Button';
import { getAuth, signOut } from "firebase/auth";
const SigninButton = ({userData,setUser}) => {
  const [isHowered,setIsHowered] =useState(false)

  const handleSignOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Clear local storage
      localStorage.removeItem("user");

      // Optionally update your app state
      setUser(null);

      console.log("User signed out");
    })
    .catch((error) => {
      console.error("Sign-out error:", error);
    });
};
  return  userData ? (
  <div className='relative h-full' onMouseEnter={()=> {setIsHowered(true)} }  >
   {
    isHowered && ( 
    <div className='absolute right-0 bottom-0 translate-y-[115%] w-[180px] px-2 py-4 bg-purple-700 rounded-lg border border-purple-400 shadow-lg' onMouseLeave={()=> setIsHowered(false)}>
      <p>{userData.name?.slice(0,15)+"..."}</p>
      <Button onClick={handleSignOut} className={"w-full mt-2"}>
        SignOut
      </Button>
    </div>)
   }
    <button className='w-[35px] h-[35px] rounded-full border border-blue-200 bg-[var(--background)] flex justify-center items-center overflow-hidden'>
      <img src={userData.photo} className='w-full h-full object-cover'/>
    </button>
  </div>) : 
  (<button className='w-[35px] h-[35px] rounded-full border border-blue-200 bg-[var(--background)] flex justify-center items-center'>
        <FaUserAlt className='text-blue-600' />
  </button>)
}

export default SigninButton