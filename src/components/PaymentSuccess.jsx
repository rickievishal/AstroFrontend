import React from 'react'
import Button from './Button'

const PaymentSuccess = ({userName}) => {
  return (
    <div className='w-full min-h-[80%] flex flex-col items-center justify-center'>
        <h1 className='max-w-lg text-2xl text-purple-100 mb-2 flex justify-center items-center text-center '>
            {userName}, Your appointment is recevied and set a reminder.
        </h1>
        <p className='mb-4'>
          You will shortly receive a email
        </p>
        <Button className={"py-2"}>
          Set a remainder
        </Button>
    </div>
  )
}

export default PaymentSuccess