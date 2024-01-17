import React from 'react'
import { HiHome } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'

export default function Sidebar() {
    return (
        <div className="mobile-sidebar">
            <div className="tablet-sidebar w-60 p-3 h-screen flex flex-col">
                <div className="pt-6 mb-[80%] icon">
                    <Link to="/">
                        <HiHome fontSize={24} className="hihome" />
                    </Link>
                </div>
                <div className="bar ml-[5%] mb-0 max-w-2 min-h-36 border-l border-l-gray-500"></div>
                <div className="icon pt-6">
                    <div className="space-y-4 flex flex-col justify-items-center align-middle">
                        <div>
                            <a href="https://github.com/codesfanny">
                                <FaGithubSquare fontSize={22} className="github" />
                            </a>
                        </div>
                        <div className="">
                            <a href="https://www.instagram.com/funmilaanu/">
                                <FaInstagramSquare fontSize={22} className="instagram" />
                            </a>
                        </div>
                        <div className="">
                            <a href="https://www.linkedin.com/in/felix-fanny-289b4755/">
                                <FaLinkedin fontSize={22} className="linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="copyright relative mt-[20%] -ml-[8%]">
                    <div className="absolute semi-header">
                        <p className="-rotate-90 icon copyright"> &copy; 2024 </p>
                    </div>
                </div>

                {/* <Link to="/work"> Go to Work</Link>
            <Link to="/contact"> Go to Contact</Link>
            <Link to="/about"> Go to About</Link> */}
            </div>
        </div>
    )
}
