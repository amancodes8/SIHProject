
import React from 'react'

import Header from './components/Header'
import { Outlet } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';

function Layout() {
    return (
        <div className='bg-gradient-to-b from-red-400 via-white to-green-400 App w-screen h-screen overflow-x-hidden overflow-y-auto'>
        
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout
