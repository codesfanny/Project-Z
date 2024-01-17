import React from 'react'
import { motion } from 'framer-motion'

export default function Work() {
    return (
        <motion.div
            className="icon"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}>
            <div className="flex flex-row mt-[5%] justify-between">
                <div className="allwork max-h-[80%] max-w-[40%] flex flex-col justify-between">
                    <div>
                        <p className="header">Work</p>
                    </div>
                    <div className="work-text text-md space-y-4">
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

                <div className="portfolio lg:space-y-8 mt-[12%]">
                    <div className="">
                        <a href="#">
                            <p className="work-header hover:line-through hover:decoration-2"> Project One </p>
                            <p className="portfolio-a"> - Front-end Development</p>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <p className="work-header hover:line-through hover:decoration-2"> Project Two </p>
                            <p className="portfolio-a"> - UI/UX Designing</p>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <p className="work-header hover:line-through hover:decoration-2"> Project Three </p>
                            <p className="portfolio-a"> - Front-end Development</p>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <p className="work-header hover:line-through hover:decoration-2"> Project Four </p>
                            <p className="portfolio-a"> - Front-end Development</p>
                        </a>
                    </div>
                </div>
                <div className="clearAll"></div>
            </div>
        </motion.div>
    )
}
