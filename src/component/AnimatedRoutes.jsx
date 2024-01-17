import React from 'react'
import Layout from './Layout'
import Work from '../pages/Work'
import Main from '../pages/Main'
import About from '../pages/About'
import Contact from '../pages/Contact'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="work" element={<Work />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
