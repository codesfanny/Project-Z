import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Main() {
    return (
        <motion.div
            className=""
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}>
            <div className="flex flex-row mt-[5%] justify-between relative">
                <div className="menus pt-40 flex flex-col ">
                    <ul className="header icon">
                        <Link to="/work" className="hover:line-through hover:decoration-4">
                            <li>Work</li>
                        </Link>
                        <Link to="/about" className="hover:line-through hover:decoration-4">
                            <li>About</li>
                        </Link>
                        <Link to="/contact" className="hover:line-through hover:decoration-4">
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>

                <div className="profile z-50 min-w-72 ml-[30%] text-center mt-[5%]">
                    <div className="flex justify-center">
                        <div className="h-70 w-70 mb-[5%] imgsize">
                            <img src="./images/profile-image.png" alt="" />
                        </div>
                    </div>
                    <div className="space-y-[10%] icon">
                        <p className="main-h xl:text-xl uppercase tracking-widest font-semibold"> Felix Fanny</p>
                        <p className="main-p">Front-end Web Developer, UI/UX Designer, Graphics Designer</p>
                        <p className="main-p">Currently working full-time as a Web Developer at Skyttechnology</p>
                    </div>
                </div>
                <div>
                    <div className="slate absolute bg-[#efefef] h-[90%] w-[20%] flex -ml-[30%] -mt-[20%]"></div>
                </div>
            </div>
        </motion.div>
    )
}
