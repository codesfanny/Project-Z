import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <motion.div
            className="flex flex-col justify-center ml-[200%] icon bodycontact"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}>
            <div className="contact text-right">
                <p className="header mb-[30%]">Contact</p>
                <p className="work-header">Hi There,</p>
                <p className="pb-4 contact-p">Need a beautiful well-structured solution?</p>
                <p className="work-header">Get in Touch</p>
                <p className="contact-p">
                    Email:{' '}
                    <a href="mailto:felixanufanny@gmail.com" className="hover:line-through">
                        felixanufanny@gmail.com
                    </a>
                </p>
                <p className="contact-p">
                    Instant Messaging:{' '}
                    <a href="https://wa.me/2348068766636" className="hover:line-through">
                        WhatsApp
                    </a>{' '}
                    /{' '}
                    <a href="https://t.me/oversabi_parrot" className="hover:line-through">
                        Telegram
                    </a>{' '}
                </p>
            </div>
        </motion.div>
    )
}
