import React, { useState } from 'react'
import AppointmentForm from './AppointmentForm'

const Booking = ({userInfo}) => {
  return (
    <div className='w-full'>
        <div className='w-full max-w-7xl mx-auto flex flex-col p'>
            <h1 className='text-2xl text-center mt-8'>
                Book Your Slot Now.
            </h1>
            <p className='text-sm text-center mt-4'>
                Schedule your appointment with Kalaga Prasad Garu <br/> Available 7 days a week, 8AM to 8PM
            </p>
            <AppointmentForm userInfo={userInfo}/>
        </div>
    </div>
  )
}

export default Booking