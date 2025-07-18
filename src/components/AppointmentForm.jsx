import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa6";
import Button from './Button';
import Input from './Input';
import PhoneComp from './PhoneComp';
import 'react-phone-number-input/style.css'
import { IoMdTime } from 'react-icons/io';
import DatePickerComp from './DatePickerComp';
import PaymentComponent from './PaymentComponent';
import {v4 as uuid } from "uuid"
import cities from '../citiesJson/cities';

const AppointmentForm = ({userInfo}) => {
    const [step,setStep] = useState(1)
    const [number,setNumber] = useState()
    const [appointmentType,setAppointmentType] = useState(null)
    const [formData,setFormData] = useState({
        name : "",
        phone : "",
        timeSlot : "",
        city : "sivakasi",
        pickedDate : "",
        appointmentType : "",
        price : 0,
        paymentStatus : false,
        bookingId : uuid()
    })
    const timeSlots = [
  { time: '09:00 AM', isAvailable: true },
  { time: '09:30 AM', isAvailable: true },
  { time: '10:00 AM', isAvailable: false}, // Example of booked slot
  { time: '10:30 AM', isAvailable: true },
  { time: '11:00 AM', isAvailable: true },
  { time: '11:30 AM', isAvailable: true },
  { time: '12:00 PM', isAvailable: false }, // Example of booked slot
  { time: '12:30 PM', isAvailable: true },
  { time: '01:00 PM', isAvailable: true },
  { time: '01:30 PM', isAvailable: true },
  { time: '02:00 PM', isAvailable: true },
  { time: '02:30 PM', isAvailable: false }, // Example of booked slot
  { time: '03:00 PM', isAvailable: true },
  { time: '03:30 PM', isAvailable: true },
  { time: '04:00 PM', isAvailable: true },
  { time: '04:30 PM', isAvailable: true },
  { time: '05:00 PM', isAvailable: false }, // Example of booked slot
  { time: '05:30 PM', isAvailable: true },
  { time: '06:00 PM', isAvailable: true },
  { time: '06:30 PM', isAvailable: true },
  { time: '07:00 PM', isAvailable: true }
];


    const handleNext = () => {
        if(step === 1 && !appointmentType){
            return
        }
        if(step === 2 && !number && formData.name === "" ){
            return
        }
        if(step === 3 && !formData.pickedDate )
        if (step === 4){
            return 
        }
        
        setStep((prev) => prev+1)
    }
    const handlePrev = () => {
        if (step === 1){
            return 
        }
        setStep((prev) => prev-1)
    }
    const handleNameChange = (e) =>{
        setFormData((prev) => ({
            ...prev , 
            name : e.target.value
        }))
    }
    const handleNumberChange = (e) => {
        setFormData((prev)=> ({
            ...prev,number : e.target.value
        }))
    }
    const handleAppointmentSelect = (apt) => {
        if(apt === "phone"){
            setAppointmentType("phone")
            setFormData((prev)=> ({...prev,appointmentType : "phone" ,price : 1000 }))
        }else if(apt === "video") {
            setAppointmentType("video")
            setFormData((prev)=> ({...prev,appointmentType : "video",price : 1000 }))
        }else if(apt === "offline"){
            setAppointmentType("offline")
            setFormData((prev)=> ({...prev,appointmentType : "location",price : 1500 }))
        }
    }
    const handleTimeSelect = (slot) =>{
        setFormData((prev)=> ({...prev,timeSlot : slot}))
    }
    const handleDateChange = (newValue) => {
        setFormData((prev) => ({
            ...prev,
            pickedDate: newValue.format('YYYY-MM-DD'), // or newValue.toISOString()
        }));
     };
    
  return (
    <div className='w-full my-8'>
            <div className='w-full flex justify-center items-center px-4 pb-8'>
                <div className={'w-[35px] h-[35px] rounded-full  flex justify-center items-center '+`${step === 1 ? "bg-black" : "bg-black/35"}`}>
                    {
                        step > 1 ? (<FaCheck />) : (<p className='text-sm text-[var(--background)] '>1</p>) 
                    }
                </div>
                <div className='w-[30px] h-[5px] bg-black mx-2'>

                </div>
                <div className={'w-[35px] h-[35px] rounded-full  flex justify-center items-center '+`${step === 2 ? "bg-black" : "bg-black/35"}`}>
                    {
                        step > 2 ? (<FaCheck />) : (<p className='text-sm text-[var(--background)] '>2</p>) 
                    }
                </div>
                <div className='w-[30px] h-[5px] bg-black mx-2'>

                </div>
               <div className={'w-[35px] h-[35px] rounded-full  flex justify-center items-center '+`${step === 3 ? "bg-black" : "bg-black/35"}`}>
                    {
                        step > 3 ? (<FaCheck />) : (<p className='text-sm text-[var(--background)] '>3</p>) 
                    }
                </div>
                <div className='w-[30px] h-[5px] bg-black mx-2'>

                </div>
                <div className={'w-[35px] h-[35px] rounded-full  flex justify-center items-center '+`${step === 4 ? "bg-black" : "bg-black/35"}`}>
                    {
                        step > 4 ? (<FaCheck />) : (<p className='text-sm text-[var(--background)] '>4</p>) 
                    }
                </div>
            </div>
            
            <div className='w-full max-w-sm sm:max-w-xl lg:max-w-4xl  mx-auto px-2 pb-8'>
                {
                    step === 1 && (<>
                            <div className='w-full flex flex-col justify-center gap-y-2'>
                                <div className='w-full flex justify-start items-start py-4 px-2 border border-black/20 hover:bg-[rgb(142,53,194)] rounded-lg'
                                    onClick={()=>handleAppointmentSelect("phone")}>
                                    <div className='w-[20px] h-[20px] rounded-full border p-1 ' >
                                        <div className={`w-full h-full rounded-full ${appointmentType === "phone" && ("bg-yellow-600") }`}>
                                        </div>
                                    </div>
                                    <div className='pl-4 flex flex-col leading-[105%]'>
                                        <p className=''>
                                            Phone
                                        </p>
                                        <p className='mt-2 text-gray-300'>
                                            You get a 30 mins call for 1000rs
                                        </p>
                                    </div>
                                </div>
                                <div className='w-full flex justify-start items-start py-4 px-2 border border-black/20 hover:bg-[rgb(142,53,194)] rounded-lg'
                                onClick={()=>handleAppointmentSelect("video")} >
                                    <div className='w-[20px] h-[20px] rounded-full border p-1 ' >
                                        <div className={`w-full h-full rounded-full ${appointmentType === "video" && ("bg-yellow-600") }`}>
                                        </div>
                                    </div>
                                    <div className='pl-4 flex flex-col leading-[105%]'>
                                        <p>
                                            Video Call
                                        </p>
                                        <p className='mt-2 text-gray-300'>
                                            You get a 30min video call for the 1000rs
                                        </p>
                                    </div>
                                </div>
                                <div className='w-full flex justify-start items-start py-4 px-2 border border-black/20 hover:bg-[rgb(142,53,194)] rounded-lg'
                                onClick={()=>handleAppointmentSelect("offline")}>
                                    <div className='w-[20px] h-[20px] rounded-full border p-1 ' >
                                        <div className={`w-full h-full rounded-full ${appointmentType === "offline" && ("bg-yellow-600") }`}>
                                        </div>
                                    </div>
                                    <div className='pl-4 flex flex-col leading-[105%]'>
                                        <p>
                                            Location
                                        </p>
                                        <p className='mt-2 text-gray-300'>
                                            You get a offline appointment for the 1500rs
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </>)
                }
                {
                    step === 2 && (
                        <>
                            <Input name='Name' className={"w-full text-black"} placeholder='Enter your Name' value={formData.name} onChange={handleNameChange}/>
                           <PhoneComp
                                value={formData.phone}
                                setValue={(value) =>
                                    setFormData((prev) => ({ ...prev, phone: value }))
                                }
                                className="mt-1 mb-4 text-black"
                            />
                            <label htmlFor='city' className=''>
                                Select a city
                            </label>
                            <select className='w-full py-2 px-4 mt-2 border border-black/20 rounded-lg text-black' onChange={(e) => setFormData({...formData , city : e.target.value})} id="city">
                                {
                                    cities.map((city) =>
                                   ( <option value={city.name} id={city.id} className='text-black'>
                                        {city.name}
                                    </option>))
                                }
                            </select>
                        </>
                    )
                }
                {
                    step === 3 && (
                        <>
                            <div className='w-full grid grid-cols-3 gap-x-4'>
                                <div className='col-span-3 mb-4'>
                                    <h1 className='text-2xl'>
                                        Select Time and Date
                                    </h1>
                                </div>
                                <div className='col-span-3 lg:col-span-1 flex flex-col'>
                                   <label className='mb-4'>
                                    Select the Date
                                   </label>
                                   <DatePickerComp  onDateChange={handleDateChange} />
                                </div>
                                <div className='col-span-3 lg:col-span-2 mt-4 lg:mt-0 border border-black/20 p-4 rounded-lg'>
                                    <h2>
                                        Time Slot
                                    </h2>
                                    <div className='grid grid-cols-2 gap-2 mt-4 max-h-[300px] overflow-auto'>
                                        {
                                            timeSlots.map((timeslot)=> (
                                                <div className={`col-span-1 border border-purple-300 rounded-lg h-[50px] text-sm flex justify-center items-center ${timeslot.isAvailable ? ("hover:bg-purple-600 hover:cursor-pointer") :("opacity-35")} ${timeslot.time === formData.timeSlot && ("border-purple-500 bg-purple-500")}`} 
                                                    onClick={()=>{
                                                        if(timeslot.isAvailable){
                                                            handleTimeSelect(timeslot.time)
                                                        }
                                                    }}>
                                                    <IoMdTime  className='text-xl' /> <p className='pl-1'>8.00 AM - 8.30 AM </p>
                                                </div>   
                                            ))
                                        }  
                                         
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
                {
                    step === 4 && (<>
                    <div className='max-w-2xl mx-auto w-full border border-purple-300 rounded-lg py-4 px-2'>
                        <h2 className='text-lg'>
                            Appointment summary
                        </h2>
                        <div className='w-full grid grid-cols-2 mt-4'>
                            <p className='col-span-1 '>
                                Name
                            </p>
                            <p className='col-span-1 font-semibold capitalize'>
                                {formData.name}
                            </p>
                        </div>
                        <div className='w-full grid grid-cols-2 mt-4'>
                            <p className='col-span-1 '>
                                PhoneNumber
                            </p>
                            <p className='col-span-1 font-semibold capitalize'>
                                {formData.phone}
                            </p>
                        </div>
                        <div className='w-full grid grid-cols-2 mt-4'>
                            <p className='col-span-1 '>
                                Date
                            </p>
                            <p className='col-span-1 font-semibold capitalize'>
                                {formData.pickedDate}
                            </p>
                        </div>
                        <div className='w-full grid grid-cols-2 mt-4'>
                            <p className='col-span-1 '>
                                Time Slot
                            </p>
                            <p className='col-span-1 font-semibold capitalize'>
                                {formData.timeSlot}
                            </p>
                        </div>
                    </div>
                    </>)
                }
            </div>

            <div className='w-full max-w-sm lg:max-w-4xl mx-auto flex justify-between px-2'>
                    <Button className={"py-2 bg-white hover:bg-[rgb(240,240,240)] text-black border mr-2"} onClick={handlePrev}>
                        Prev
                    </Button>
                    {
                        step !== 4 && (
                            <>
                            
                            <Button className={"py-2 bg-black hover:bg-[rgb(39,39,39)]"} onClick={handleNext}>
                                Next
                            </Button>
                            </>
                        )
                    }
                    {
                        step === 4 && (<PaymentComponent formData={formData} userInfo={userInfo} paymentAmount={formData.price}/>)
                    }
            </div>
    </div>
  )
}

export default AppointmentForm