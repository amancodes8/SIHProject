
import React from 'react'

import Header from './components/Header'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer'
import Card from './components/Card';
import Articles from './components/Articles';

function Layout() {
    return (
        <div className='App w-screen h-screen overflow-x-hidden overflow-y-aut'>
            <Header />
            <Outlet />
            <Card />
            <Articles />
        </div>
    )
}

export default Layout
