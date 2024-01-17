import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <motion.div
            className="icon"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}>
            <div className="">
                <div className="min-w-[100%] flex flex-row mt-[5%] justify-between relative">
                    <div className="max-h-[80%] max-w-[40%] flex flex-col justify-between about">
                        <div className="aboutimg">
                            <p className="header mb-4">About</p>
                            <p className="work-header work-header-new leading-snug">Call me Fanny.</p>
                            <p className="work-header work-header-new leading-none">A problem solver.</p>
                        </div>
                        <div className="text-sm space-y-4 abouttext">
                            <p>
                                I enjoy meeting new people and finding ways to help them have an uplifting experience.
                                People find me to be an upbeat, self-motivated team player with excellent communication
                                skills.
                            </p>
                            <p>
                                For the past few years, I have worked with people and corporate bodies in education,
                                designing and technology industries. My experiences are majored in UI/UX development and
                                administration. My skills are centered around designs, interpersonal relationship &
                                management. I have a track record of consistently maintaining an outstanding performance
                                in the exhibition of duties peculiar to my skills.
                            </p>
                            <p>I find opportunities to build and maintain high-quality business relationships.</p>
                        </div>
                    </div>

                    <div className="fanny-chest">
                        <img src="./images/FannyChest.png" alt="" />
                    </div>

                    <div className="clearAll"></div>
                </div>{' '}
            </div>
        </motion.div>
    )
}
