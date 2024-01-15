import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Layout() {
    return (
        <div className="container flex flex-row">
            <div className="lg:flex lg:sticky">
                <Sidebar />
            </div>
            <div className="flex 1">{<Outlet />}</div>
        </div>
    )
}
