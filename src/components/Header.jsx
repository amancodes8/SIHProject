import React, { useState, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";
import { HiBars3 } from "react-icons/hi2";
import { gsap } from 'gsap';
import { NavLink } from 'react-router-dom';

function Header() {
    const [menuBar, setMenuBar] = useState(false);

    const navItems = [
        { label: 'LogIn/Signup', link: '/login' },
        { label: 'Products', link: '/products' }, // Updated path to a more generic '/products'
        { label: 'Calendar', link: '/calendar' },
        { label: 'About', link: '/about' }
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
            <div className='Navbar flex w-screen h-fit items-center justify-between px-4 py-1 bg-gray-800 text-white'>
                <NavLink to="/">
                    <img className='h-12 w-12 rounded-full' src="/images/logo.png" alt="logo" />
                </NavLink>
                <div className='ml-auto'>
                    {!menuBar ? (
                        <HiBars3 onClick={toggleMenu} size={30} className="cursor-pointer sm:hidden" />
                    ) : null}
                </div>
            </div>

            {/* Menu section */}
            <div className={`z-10 fixed top-0 right-0 h-full w-screen bg-white text-black menu transform ${menuBar ? 'translate-x-0' : 'translate-x-full'} sm:hidden opacity-80`}>
                <div className="flex justify-end px-6 py-3">
                    <RxCross2 onClick={toggleMenu} size={30} className="cursor-pointer text-black" />
                </div>

                {/* NavItems */}
                <nav className="p-4 flex justify-center">
                    <ul className='space-y-3 mt-6 text-md'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    onClick={toggleMenu}
                                    to={item.link}
                                    className={({ isActive }) =>
                                        `p-2 rounded-xl border-2 border-black flex justify-center w-40 ${isActive ? 'bg-gray-600 text-white' : 'bg-gray-500 bg-opacity-50'}`
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
