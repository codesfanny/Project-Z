import React from 'react'
import { HiHome } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="">
            <div className="w-60 p-3 h-screen flex flex-col">
                <div className="pt-6 mb-[80%]">
                    <Link to="/">
                        <HiHome fontSize={24} />
                    </Link>
                </div>
                <div className="ml-[5%] mb-0 max-w-2 min-h-36 border-l border-l-gray-500"></div>
                <div className=" pt-6">
                    <div className="space-y-4 ">
                        <div className="h-5 w-5">
                            <a href="https://github.com/codesfanny">
                                <img src="../images/github.png" alt="" />
                            </a>
                        </div>
                        <div className="h-5 w-5">
                            <a href="https://www.instagram.com/funmilaanu/">
                                <img src="../images/instagram.png" alt="" />
                            </a>
                        </div>
                        <div className="h-5 w-5">
                            <a href="https://www.linkedin.com/in/felix-fanny-289b4755/">
                                <img src="../images/linkedin.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative mt-[20%] -ml-[8%]">
                    <div className="absolute semi-header">
                        <p className="-rotate-90"> &copy; 2024 </p>
                    </div>
                </div>

                {/* <Link to="/work"> Go to Work</Link>
            <Link to="/contact"> Go to Contact</Link>
            <Link to="/about"> Go to About</Link> */}
            </div>
        </div>
    )
}
