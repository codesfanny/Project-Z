import React from 'react'
import { Link } from 'react-router-dom'
import { HiHome } from 'react-icons/hi2'

export default function Work() {
    return (
        <div className="">
            <div className="flex flex-row mt-[5%] justify-between">
                <div className="flex-col">
                    <div className="">
                        <div className="-ml-[5%] mb-24">
                            <Link to="/">
                                {' '}
                                <HiHome fontSize={32} />
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

                <div className="max-h-[80%] max-w-[40%] flex flex-col justify-between">
                    <div>
                        <p className="header">Work</p>
                    </div>
                    <div className="text-sm space-y-4">
                        <p>
                            Outlined on the right are my list of works. No thousands of work but I have put everything
                            into the little so far and I am still moving.
                        </p>
                        <p>
                            The world of digital design and development constantly evolves and so I keep pushing. I gain
                            new skills every day because I never stop learning.
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <a href="#">
                            <p className="work-header hover:line-through hover:decoration-2"> Project One </p>
                            <p> - Front-end Development</p>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <p className="work-header hover:line-through hover:decoration-2"> Project Two </p>
                            <p> - UI/UX Designing</p>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <p className="work-header hover:line-through hover:decoration-2"> Project Three </p>
                            <p> - Front-end Development</p>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <p className="work-header hover:line-through hover:decoration-2"> Project Four </p>
                            <p> - Front-end Development</p>
                        </a>
                    </div>
                </div>
                <div className="clearAll"></div>
            </div>
        </div>
    )
}
