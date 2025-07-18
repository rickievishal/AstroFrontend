import React from 'react'
import { MdLocationCity, MdLocationOn } from "react-icons/md";
import { FaMapLocation } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { AiFillFacebook } from "react-icons/ai";
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
const Footer = () => {
  return (
    // <footer className='w-full flex flex-col border-t pt-8 pb-2'>
    //         <div className='w-full max-w-7xl mx-auto flex flex-col gap-y-4 sm:grid sm:grid-cols-3 px-4'>
    //             <div className='col-span-1'>
    //                 <h2 className='flex items-center text-2xl font-semibold'>
    //                             <MdLocationCity className='text-2xl' /> Contact Information
    //                 </h2>
    //                 <ol className='mt-4 flex flex-col gap-y-2'>
    //                     <li>
    //                         <p className='flex items-center text-lg'>
    //                           <FaPhone className='text-xl mr-2'/> +91 (Available via appointment)
    //                         </p>
    //                     </li>
    //                     <li>
    //                         <p className='flex items-center text-lg'>
    //                            <IoIosMail className='text-xl mr-2' /> kalagaprasadastrology@gmail.com
    //                         </p>
    //                     </li>
    //                     <li>
    //                         <p className='flex items-start justify-start text-lg'>
    //                            <MdLocationOn className='text-2xl mr-2' /> <span className=''>Kalaga Prasad Astrology Center Tanuku, Andhra Pradesh</span>
    //                         </p>
    //                     </li>
                        

    //                 </ol>
    //             </div>
    //            <div className='col-span-1'>
    //                 <h2 className='flex items-center text-2xl font-semibold'>
    //                             <FaMapLocation className='text-2xl mr-2' /> Location
    //                 </h2>
    //                 <ol className='mt-4 flex flex-col gap-y-2'>
    //                     <li>
    //                         <p className='flex items-center text-lg'>
    //                            <MdLocationOn className='text-xl mr-2' /> Andhra Pradesh
    //                         </p>
    //                     </li>
    //                     <li>
    //                         <p className='flex items-center text-lg'>
    //                            <MdLocationOn className='text-xl mr-2' /> Andhra Pradesh
    //                         </p>
    //                     </li>
    //                     <li>
    //                         <p className='flex items-center text-lg'>
    //                            <MdLocationOn className='text-xl mr-2' /> Andhra Pradesh
    //                         </p>
    //                     </li>
    //                     <li>
    //                         <p className='flex items-center text-lg'>
    //                            <MdLocationOn className='text-xl mr-2' /> Andhra Pradesh
    //                         </p>
    //                     </li>
    //                     <li>
    //                         <p className='flex items-center text-lg'>
    //                            <MdLocationOn className='text-xl mr-2' /> Andhra Pradesh
    //                         </p>
    //                     </li>

    //                 </ol>
    //             </div>
    //             <div className='col-span-1'>
    //                 <h2 className='flex items-center text-2xl font-semibold'>
    //                      Consultation Hours
    //                 </h2>
    //                 <ol className='mt-4 flex flex-col gap-y-2'>
    //                     <li>
    //                         <p className='flex items-center text-lg'>
    //                            <IoMdTime  className='text-3xl mr-2 mt-2' /> Monday - Saturday <br/>9:00 AM - 6:00 PM
    //                         </p>
    //                     </li>
    //                     <li>
    //                         <p className='flex items-center text-lg'>
    //                            <IoMdTime  className='text-3xl mr-2 mt-2 leading-tight' /> Sunday <br/>By Appointment Only
    //                         </p>
    //                     </li>
    //                 </ol>
    //             </div>
    //         </div>
    //         <div className='w-full flex justify-center items-center text-sm mt-8'>
    //             All rights reserved @2024 Kalaga Prasad Astrology
    //         </div>
    // </footer>
    <footer className="bg-black/40 border-t border-yellow-400/20 py-12 px-4 bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900  text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-blue-200">
          <div>
            <h3 className="text-xl font-bold text-yellow-300 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-green-400" /><span>+91 (Appointment Only)</span></div>
              <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-blue-400" /><span>kalagaprasadastrology@gmail.com</span></div>

              <div className="flex items-center gap-3"><AiFillFacebook className="w-5 h-5 text-blue-400" /><a href='https://www.facebook.com/prasad.kalaga1'><span>kalagaprasadastrology@gmail.com</span></a></div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                <div>
                  <p>Kalaga Prasad Astrology Center</p>
                  <p>Tanuku, Andhra Pradesh</p>
                  <a href="https://maps.app.goo.gl/ohi7ZPQXF8UyY4hU7" className="text-yellow-400 hover:text-yellow-300 underline">View on Google Maps</a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-300 mb-4">Services Areas</h3>
            <p>🏛️ Andhra Pradesh</p>
            <p>🏛️ Telangana</p>
            <p>🏛️ Karnataka</p>
            <p>🏛️ Tamil Nadu</p>
            <p>🏛️ Odisha</p>
            <p>🏛️ Maharashtra</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-300 mb-4">Consultation Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-yellow-400" /><div><p>Mon - Sat</p><p>9:00 AM - 6:00 PM</p></div></div>
              <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-yellow-400" /><div><p>Sunday</p><p>By Appointment</p></div></div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-yellow-400/20 text-center text-blue-200">
          <p>&copy; 2024 Kalaga Prasad Astrology. All rights reserved.</p>
          <p className="mt-2 text-sm">Serving with 30+ years of experience in Scientific Astrology</p>
        </div>
      </footer>
  )
}

export default Footer