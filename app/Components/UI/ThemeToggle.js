
"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
const ThemeToggle = () => {
  const [lightMode, setLightMode] = useState(false) 
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme === 'light') {
      setLightMode(true)
    }
  }, [])
  useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }, [lightMode])
  return (
    <div className='relative ms-[60px] w-16 h-8 bg-secondary p-1 rounded-full cursor-pointer flex items-center' onClick={() => setLightMode(!lightMode)}>
      <FaMoon size={18}/>
      <div className='absolute h-6 w-6 rounded-full bg-primary transform transition-[0.5s] duration-500' 
      style={lightMode ? {left:"2px"} : {right: "2px"}}></div>
      <FaSun size={18} className='ml-auto text-yellow-500'/>
    </div>
  )
}

export default ThemeToggle