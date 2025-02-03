import React from 'react'
import Button from './Button'
import NavComp from './NavComp';
const isAuthenticated = false;
const username = "User";
const Navbar = () => {
  return (
    <>
        <nav className="sticky-nav fixed w-full z-50 bg-gray-900/80 border-b border-gray-800">
            <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-8">
                <a href="/" className="flex items-center space-x-3">
                    <img src="/ProgLobby.png" alt="Proglobby Logo" className="w-12 h-12 hover:rotate-[15deg] transition-transform duration-300" />
                    <span className="text-2xl font-bold text-white">Proglobby</span>
                </a>
                <div className="hidden md:flex items-center space-x-6">
                    <NavComp text="Home" href="/" />
                    <NavComp text="Blog" href="/blog" />
                    <NavComp text="Learn" href="/learn" />
                    <NavComp text="About" href="/about" />
                </div>
                </div>
                <div className="flex items-center space-x-4">
                {isAuthenticated ? (
                    <div className="relative group">
                    <button className="px-4 py-2 text-purple-400 hover:text-white transition-all duration-300 hover:bg-purple-600/20 rounded-lg">
                        {username}
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800/90 border border-gray-700/30 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a href="/profile" className="block px-4 py-2 text-gray-300 hover:bg-purple-600/20 hover:text-white">Profile</a>
                        <a href="/logout" className="block px-4 py-2 text-gray-300 hover:bg-purple-600/20 hover:text-white">Logout</a>
                    </div>
                    </div>
                ) : (
                    <>
                    <a href="/login" className="px-4 py-2 text-purple-400 hover:text-white transition-all duration-300 hover:bg-purple-600/20 rounded-lg">
                        Sign In
                    </a>
                    <Button text="Sign Up" />
                    </>
                )}
                </div>
            </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar