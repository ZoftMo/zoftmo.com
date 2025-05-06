import React from 'react'
import { FaSquareFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Link from 'next/link';

const Footer = () => {
    const socialIcons = [
        { id: 'facebook', icon: <FaSquareFacebook className=''/> },
        { id: 'instagram', icon: <AiFillInstagram /> },
        { id: 'website', icon: <FaLinkedin /> },
        { id: 'twitter', icon: <FaXTwitter /> },
    ]

    return (
        <div>
            <div className="flex justify-center items-center gap-4 text-2xl text-white bg-primary h-16">
                {socialIcons.map(({ id, icon }) => (
                    <div key={id} className="bg-button w-10 h-10 flex justify-center items-center rounded-full hover:bg-white hover:text-[#607EBC] hover:text-4xl transition cursor-pointer">
                        {icon}
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center gap-4 text-lg text-primary bg-primary h-8'>
                <Link href='/about'>
                    <span className='hover:text-blue-900 hover:font-bold'>About</span>
                </Link>
                <Link href='/privacy'>
                    <span className='hover:text-blue-900 hover:font-bold'>Privacy</span>
                </Link>
                <Link href='/career'>
                    <span className='hover:text-blue-900 hover:font-bold'>Career</span>
                </Link>
            </div>
            <div className='flex justify-center items-center gap-4 text-base text-primary bg-primary h-8'>
                <span>@2025 | All Right Reserved by ZoftMo Solutions (PVT) Ltd.</span>
            </div>
        </div>
    )
}

export default Footer