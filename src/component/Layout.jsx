import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Layout() {
    return (
        <div className="container flex flex-row">
            <div className="sidebar lg:flex lg:sticky">
                <Sidebar />
            </div>
            <div className="move flex 1">{<Outlet />}</div>
        </div>
    )
}
