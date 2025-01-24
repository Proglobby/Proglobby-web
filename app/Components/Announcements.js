import React from 'react'
import Link from 'next/link'
import { IoIosClose } from "react-icons/io";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const Announcements = () => {
  const [announcements, setAnnouncements] = useState([
    {
      title: "Proglobby Standouts Sessions",
      description: "Join us on Discord",
      link: "https://discord.gg/proglobby",
    },
    {
      title: "New Course",
      description: "We are excited to announce the launch of our new course on React",
      link: "/courses/react",
    },
  ]);
  return (
    <div className='w-screen order-1 lg:w-[20%] lg:order-2'>
      <div className="text-primary font-avenir">
        <ul className="text-start">
          {announcements.map((announcement, index) => (
            <li key={index} className='mx-[60px] lg:mx-[8px] my-[20px] cursor-pointer transition-transform hover:translate-y-[-8px]'>
              
                <div className='glassCard p-[20px]'>
                  <div className='flex justify-end -m-[10px]'>
                    <IoIosClose className='hover:text-red-600'/>
                  </div>
                  <h1 className='text-xl'>{announcement.title}</h1>
                  <p className=''>{announcement.description}</p>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Announcements