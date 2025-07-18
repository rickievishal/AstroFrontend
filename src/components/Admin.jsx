import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from 'react-router';
const Admin = ({userInfo}) => {
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [selectedView, setSelectedView] = useState(null);
  const [bookings, setBookings] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    const getBookings = async () => {
        if (userInfo.role === "user"){
            nav("/")
        }
      try {
        const response = await axios.get("http://localhost:8080/api/bookings");
        setBookings(response.data); 
        console.log(response.data)
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    };
    getBookings();
  }, []);
    
  return (
    <div className='min-h-screen w-full relative'>
        
        {
            isViewOpen && (
                <div className='w-full h-full fixed top-0 left-0 flex justify-center items-center'>
                    <div className='w-[500px] h-[400px] bg-white rounded-lg border relative shadow-lg py-8 px-4'>
                        <div className='w-[35px] h-[35px] rounded-full border absolute right-2 top-2 flex justify-center items-center shadow-lg hover:cursor-pointer' onClick={()=> setIsViewOpen(false)}>  
                            <IoCloseOutline />
                        </div>
                        <div>
                            <h1 className='text-xl'>
                                Appointment Details
                            </h1>
                            <div className='w-full flex-col my-4 grid grid-cols-2 px-4 gap-y-4'>
                                <div className='col-span-1'>
                                    Name
                                </div>
                                <div className='col-span-1 flex items-end justify-end'>
                                    {selectedView.name}
                                </div>
                                <div className='col-span-1'>
                                    Date
                                </div>
                                <div className='col-span-1 flex items-end justify-end'>
                                    {new Date(selectedView.date).toISOString().split('T')[0]}
                                </div>
                                <div className='col-span-1'>
                                    Appointment Type
                                </div>
                                <div className='col-span-1 flex items-end justify-end'>
                                    {selectedView.appointment_type}
                                </div>
                                <div className='col-span-1'>
                                    Email
                                </div>
                                <div className='col-span-1 flex items-end justify-end'>
                                    {selectedView.email}
                                </div>
                                 <div className='col-span-1'>
                                    Phone Number
                                </div>
                                <div className='col-span-1 flex items-end justify-end'>
                                    {selectedView.whatsapp_number}
                                </div>
                                <div className='col-span-1'>
                                    Time Slot
                                </div>
                                <div className='col-span-1 flex items-end justify-end'>
                                    {selectedView.time_slot}
                                </div>
                            </div>
                            <button className='w-full rounded-lg bg-black text-white py-4'>
                                Send Email Reminder
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
        <div className='max-w-6xl mx-auto py-16'>
            <div className='w-full text-4xl flex items-center'>
                <h2>Total Appointments</h2>
                <p className='pl-8'>{bookings.length}</p>
            </div>
            <h1 className='text-lg mt-8'>Your Appointments </h1>
            <div className='w-full rounded-lg border mt-4 overflow-hidden'>
                <table className='w-full'>
               <tr className='bg-black text-white'>
                <th className='px-4 py-2 border-r'>OrderId</th>
                <th className='px-4 py-2 border-r'>Name</th>
                <th className='px-4 py-2 border-r'>Email</th>
                <th className='px-4 py-2 border-r'>Phone</th>
                <th className='px-4 py-2 border-r'>Apt. Type</th>
                <th className='px-4 py-2 border-r'>Details</th>
                <th className='px-4 py-2 '>Status</th>
               </tr>
               {
                bookings.map((order) => (
                    <tr className='border-t'>
                <td className='px-4 py-2 border-r'>
                    {order.booking_id.slice(0,10)+"..."}
                </td >
                <td className='px-4 py-2 border-r'>
                    {order.name}
                </td>
                <td className='px-4 py-2 border-r'>
                    {order?.email}
                </td>
                <td className='px-4 py-2 border-r'>
                    {order.whatsapp_number}
                </td>
                <td className='px-4 py-2 border-r'>
                    {order.appointment_type}
                </td>
                <td className='px-4 py-2 border-r'>
                    <p className='hover:underline hover:cursor-pointer text-blue-600' onClick={()=> {setIsViewOpen(true)
                        setSelectedView(order)
                    }}>
                        view
                    </p>
                </td>
                <td className='px-4 py-2 border-r'>{order.payment_status ? (<p className='text-green-500'>Paid</p>) :(<p className='text-red-500'>Failed</p>)}</td>
               </tr>
                ))
               }
               
            </table>
            </div>
        </div>
    </div>
  )
}

export default Admin