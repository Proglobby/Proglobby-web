import Link from 'next/link'
import React from 'react'
type NavCompProps = {
    text: string
    href: string
}
const NavComp : React.FC<NavCompProps> = ({text, href}) => {
  return (
    <Link href={href} className="nav-link text-gray-300 hover:text-purple-400 px-4 py-2 transition-all duration-300 relative group">
        {text}
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

export default NavComp