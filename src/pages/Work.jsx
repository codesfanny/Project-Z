import React from 'react'
import { Link } from 'react-router-dom'
import { HiHome } from 'react-icons/hi2'

export default function Work() {
    return (
        <div className="">
            <div className="flex flex-row mt-[13%] justify-between relative">
                <div className="flex-col">
                    <div className="">
                        <div className="-ml-[20%] mb-32">
                            <Link to="/">
                                {' '}
                                <HiHome fontSize={36} />
                            </Link>
                        </div>
                        <div className=" ml-[23%] max-w-2 min-h-72 border-l border-l-gray-500"></div>

                        <div className="semi-header w-[200%] mt-[60%] -ml-[80%] -rotate-90 float-start">
                            {' '}
                            <p> &copy; 2024 </p>{' '}
                        </div>

                        {/* <Link to="/work"> Go to Work</Link>
            <Link to="/contact"> Go to Contact</Link>
            <Link to="/about"> Go to About</Link> */}
                    </div>
                </div>

                <div className="pl-[18%] pt-40 flex flex-col "></div>

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
                    <div className="absolute bg-[#efefef] h-[70%] w-[20%] flex -ml-[28%] -mt-[20%]"></div>
                </div>
            </div>
        </div>
    )
}
