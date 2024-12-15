import React from 'react'
import Button from './UI/Button'
import ThemeToggle from './UI/ThemeToggle'
import Link from 'next/link'
export const sections = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
]
const NavBar = () => {
  return (
    <div className="flex justify-between w-screen p-[10px]">
      <img src="/Proglobbypsd.png" alt="logo" className="h-10 w-10 justify-start ms-[50px]"/>
      <div className='flex items-center mr-10'>
      <ul className="flex items-center gap-10 mr-[100px] ">
        {sections.map((section, index) => (
          <li key={index} className="capitalize text-lg text-primary">
            <Link href={section.href}>{section.name}</Link>
          </li>
        ))}
      </ul>
      <Button />
      <ThemeToggle />
      </div>
    </div>
    
  )
}

export default NavBar