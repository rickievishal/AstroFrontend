import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const TimeBlock = ({userInfo}) => {
    console.log(userInfo)
    const nav = useNavigate()
    useEffect(() => {
        if(userInfo?.role === "user"){
            nav("/")
        }
        
    }, [])
    
  return (
    <div className='w-full min-h-[70vh]'>
        <div className='max-w-7xl  w-full mx-auto py-16'>
            <div className='flex flex-col'>
                <h2 className='text-2xl'>
                    Block Time Slots
                </h2>
                <h3>
                    pick a date
                </h3>
                <div>
                    <DatePicker/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TimeBlock