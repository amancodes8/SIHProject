import React, { useState, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";
import { HiBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { gsap } from 'gsap';
import { NavLink } from 'react-router-dom';

function Header() {
    const [menuBar, setMenuBar] = useState(false);

    const navItems = [
        { label: 'Home', link: '/home' },
        { label: 'Culture', link: '/culture' },
        { label: 'Heritage', link: '/heritage' },
        { label: 'Festivals', link: '/festivals' }
    ];

    const toggleMenu = () => {
        setMenuBar(!menuBar);
    };

    useEffect(() => {
        const menu = document.querySelector(".menu");
        const menuItems = document.querySelectorAll(".menu li");

        // Animate menu
        gsap.to(menu, {
            x: menuBar ? 0 : "100%",
            duration: 0.5,
            ease: "sine.inOut"
        });

        // Animate menu items
        gsap.to(menuItems, {
            opacity: menuBar ? 1 : 0,
            y: menuBar ? 0 : 30,
            stagger: 0.1,
            duration: 0.8,
            ease: "power4.inOut"
        });
    }, [menuBar]);

    return (
        <div>
            {/* Navbar */}
            <div className='Navbar flex w-screen max-h-12 items-center justify-between px-4 py-1 bg-gradient-to-r from-red-700 via-white to-green-700 text-white'>
                <NavLink to="home" className="flex items-center gap-4">
                    <img className='h-12 w-12 rounded-full' src="/images/logo1.jpeg" alt="logo" />
                </NavLink>
                
                {/* Search box */}
                <div className="search hidden sm:flex items-center gap-2 flex-1 justify-center">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="px-3 py-1 w-64 border rounded-full text-black focus:outline-none focus:ring focus:border-blue-500"
                    /> 
                    <CiSearch size={24} className="cursor-pointer text-black" />
                </div>

                {/* Nav Links */}
                <nav className={`hidden md:flex md:items-center transition-transform duration-300 ease-in-out`}>
                    <ul className='flex gap-10 text-lg text-black font-semibold font-serif'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.link}
                                    className={({ isActive }) =>
                                        `py-1 flex items-center justify-center w-full md:w-auto ${isActive ? 'px-2 bg-blue-900 text-xl rounded-xl text-white' : ''}`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Hamburger Menu Icon */}
                <div className='ml-auto'>
                    {!menuBar ? (
                        <HiBars3 onClick={toggleMenu} size={30} className="cursor-pointer md:hidden text-black font-xl" />
                    ) : null}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`z-10 fixed top-0 right-0 h-full w-screen bg-gradient-to-b from-red-300 via-white to to-green-300 text-black menu transform ${menuBar ? 'translate-x-0' : 'translate-x-full'} md:hidden opacity-100`}>
                <div className="flex justify-end px-6 py-3">
                    <RxCross2 onClick={toggleMenu} size={30} className="cursor-pointer text-black" />
                </div>

                {/* NavItems for Mobile */}
                <nav className="p-4 flex justify-center">
                    <ul className='space-y-3 mt-6 text-md'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    onClick={toggleMenu}
                                    to={item.link}
                                    className={({ isActive }) =>
                                        `opacity-100 p-2 rounded-ss-lg rounded-ee-lg font-serif border-2 border-black flex justify-center w-40 ${isActive ? 'bg-blue-700 text-white px-2' : 'bg-blue-500 bg-opacity-50'}`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
