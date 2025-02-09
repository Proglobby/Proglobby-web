"use client";  // Important for Next.js client components

import React, { useState, useEffect } from 'react';
import Button from './Button';
import NavComp from './NavComp';
import Link from 'next/link';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            console.log("No token found in localStorage");
            setIsAuthenticated(false);
            setUsername("");
            return;
        }

        fetch('http://localhost:8000/api/auth/user/', {
            method: 'GET',
            headers: { 
                'Authorization': `Token ${token}`, 
                'Content-Type': 'application/json' 
            }
        })
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch user data");
            return response.json();
        })
        .then(data => {
            setIsAuthenticated(true);
            setUsername(data.username);
        })
        .catch(error => {
            console.error("Error fetching user:", error);
            setIsAuthenticated(false);
            setUsername("");
        });
    }, []);
    
    const handleLogout = () => {
        sessionStorage.removeItem('token'); // Remove token
        setIsAuthenticated(false);
        setUsername("");
        window.location.href = "/login"; // Redirect after logout
    };

    return (
        <nav className="sticky-nav fixed w-full z-50 bg-gray-900/80 border-b border-gray-800">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <Link href="/" className="flex items-center space-x-3">
                            <img src="/ProgLobby.png" alt="Proglobby Logo" className="w-12 h-12 hover:rotate-[15deg] transition-transform duration-300" />
                            <span className="text-2xl font-bold text-white">Proglobby</span>
                        </Link>
                        <div className="hidden md:flex items-center space-x-6">
                            <NavComp text="Home" href="/" />
                            <NavComp text="Blog" href="/blog" />
                            <NavComp text="Learn" href="/learn" />
                            <NavComp text="About" href="/about" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                    {isAuthenticated ? (
                        <div className="relative">
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                className="px-4 py-2 text-purple-400 hover:text-white transition-all duration-300 hover:bg-purple-600/20 rounded-lg"
                            >
                                {username}
                            </button>
                            {showDropdown && (
                                <div className="absolute right-0 mt-2 w-48 bg-gray-800/90 border border-gray-700/30 rounded-lg shadow-lg">
                                    <Link href="/profile" className="block px-4 py-2 text-gray-300 hover:bg-purple-600/20 hover:text-white">
                                        Profile
                                    </Link>
                                    <button 
                                        onClick={handleLogout} 
                                        className="w-full text-left px-4 py-2 text-gray-300 hover:bg-purple-600/20 hover:text-white"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link href="/login" className="px-4 py-2 text-purple-400 hover:text-white transition-all duration-300 hover:bg-purple-600/20 rounded-lg">
                                Sign In
                            </Link>
                            <Button text="Sign Up" path="/registration"/>
                        </>
                    )}

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
