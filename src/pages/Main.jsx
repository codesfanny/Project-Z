import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
    return (
        <div className="">
            <div className="flex flex-row mt-[5%] justify-between relative">
                <div className="pt-40 flex flex-col ">
                    <ul className="header ">
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

                <div className="z-50 min-w-72 ml-[30%] text-center mt-[5%]">
                    <div className="flex justify-center">
                        <div className="h-52 w-52 mb-[5%]">
                            <img src="./images/profile-image.png" alt="" />
                        </div>
                    </div>
                    <div className="space-y-[10%]">
                        <p className="xl:text-xl uppercase tracking-widest font-semibold"> Felix Fanny</p>
                        <p>Front-end Web Developer, UI/UX Designer, Graphics Designer</p>
                        <p>
                            Currently working full-time as a Web Developer at{' '}
                            <button className="hover:line-through hover:decoration-1">Skyttechnology</button>{' '}
                        </p>
                    </div>
                </div>
                <div>
                    <div className="absolute bg-[#efefef] h-[70%] w-[20%] flex -ml-[29%] -mt-[20%]"></div>
                </div>
            </div>
        </div>
    )
}
