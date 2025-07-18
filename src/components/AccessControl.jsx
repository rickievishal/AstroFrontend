import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const AccessControl = ({userInfo}) => {
    console.log(userInfo.role)
    const nav = useNavigate()
    const [users,setUsers] = useState([])
    const getUsers = async() => {
        const response = await axios.get("http://localhost:8080/api/users")
        setUsers(response.data)
        console.log(response.data)
      }
    useEffect(() => {
      const getUsers = async() => {
        if (userInfo?.role === "user"){
            nav("/")
        }
        const response = await axios.get("http://localhost:8080/api/users")
        setUsers(response.data)
        console.log(response.data)
      }
      getUsers()
     
    }, [])
    const handleRoleChange = async (user) => {
        let role;
        if(user.role === "admin"){
            role= "user"
        }else{
            role = "admin"
        }
        const newData = {
            ...user,role: role
        }
        const response = await axios.put(`http://localhost:8080/api/users/${user._id}`,newData)
        getUsers();
        console.log(response)
    }
    
  return (
    <div className='w-full py-8'>
        <div className='max-w-4xl mx-auto'>
            <h1 className='text-2xl'>
                UserBase
            </h1>
            <div className='w-full border rounded-lg'>
                <table className='w-full rounded-lg overflow-hidden border-1 border-black'>
                        <tr className=' bg-black text-white'>
                            <th className='px-4 py-2 border-r'>userId</th>
                            <th className='px-4 py-2 border-r'>Name</th>
                            <th className='px-4 py-2 border-r'>Email</th>
                            <th className='px-4 py-2 border-r'>Role</th>
                            <th className='px-4 py-2 border-r'>Action</th>
                        </tr>
                        {
                            users.map((user) => (
                                <tr id={user._id}>
                                    <td className='border-r px-2 py-2'>
                                        {user._id.slice(0,10)+"..."}
                                    </td>
                                    <td className='border-r px-2 py-2'>
                                        {user.name}
                                    </td>
                                    <td className='border-r px-2 py-2'>
                                        {user.email}
                                    </td>
                                    <td className='border-r px-2 py-2'>
                                        {user.role}
                                    </td>
                                    <td className='border-r px-2 hover:underline hover:cursor-pointer hover:text-blue-600 py-2' onClick={()=>handleRoleChange(user)}>
                                    change
                                    </td>
                                </tr>
                            ))
                        }
                </table>
            </div>  
        </div>
    </div>
  )
}

export default AccessControl