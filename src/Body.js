import React from 'react'
import Badge from './components/Badge'
import Button from './components/Button'
import { Link } from 'react-router'

const Body = () => {
  return (
    <div className='w-full py-8 flex flex-col'>
        <div className='w-full max-w-7xl mx-auto px-4 flex flex-col justify-start items-start'>
            <div className='max-w-xl'>
                <Badge>
                 30+ Years of Experience
                </Badge>
                <h1 className='text-4xl font-semibold'>
                    Kalaga Prasad Astrology
                </h1>
                <p className='text-xl mt-4'> 
                    Expert in Scientific Astrology
                </p>
                <p className='text-sm mt-2'>
                    Serving 2+ lakh clients across Andhra Pradesh, Telangana, Karnataka, Tamil Nadu, Odisha, and Maharashtra with accurate predictions and personalized guidance. With 500+ appointments per month and excellent reputation built through great word of mouth spread.
                </p>
                <Link to={'/Booking'}>
                    <Button className={"w-full text-xl mt-4"}>
                        BookNow
                    </Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Body