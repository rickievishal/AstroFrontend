import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Body from './Body'
import { Navigate, Route, Routes } from 'react-router'
import Booking from './components/Booking'
import SignIn from './components/Auth/SignIn'
import PaymentSuccess from './components/PaymentSuccess'
import Admin from './components/Admin'
import AccessControl from './components/AccessControl'
import TimeBlock from './components/TimeBlock'
import StaticLandingPage from './StaticLandingPage'

const App = () => {
  
  const [user, setUser] = useState(() => {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
});

  return (
    <div className='w-screen h-screen relative bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 min-h-screen text-white'>
      <Navbar userData={user} setUser={setUser}/>
        <Routes>
          <Route path='/admin/access-control' element={user?.role === "admin" ? (<AccessControl userInfo={user}/>) : (<Navigate to={"/booking"}/>)}/>
          <Route path='/' element={<StaticLandingPage/>}/>
          <Route path='/admin/timeblock' element={<TimeBlock userInfo={user}/>}/>
          <Route path='/booking' element={user ? (<Booking userInfo={user}/>) : (<Navigate to={"/SignIn"}/>)}/>
          <Route path='/signin' element={<SignIn setUser={setUser}/>}/>
          <Route path='/PaymentSuccess' element={user ? (<PaymentSuccess userName={user.name}/>) : (<Navigate to={"/SignIn"}/>)}/>
          <Route path='/Admin' element={user ? <Admin userInfo={user}/> : <SignIn setUser={setUser}/>} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default App