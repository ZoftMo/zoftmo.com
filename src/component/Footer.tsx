import React from 'react'
import { FaSquareFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Link from 'next/link';

const Footer = () => {
    const socialIcons = [
        { id: 'facebook', icon: <FaSquareFacebook />, link: 'https://www.facebook.com/zoftmo' },
        { id: 'instagram', icon: <AiFillInstagram />, link: 'https://www.instagram.com/zoftmo/' },
        { id: 'linkedin', icon: <FaLinkedin />, link: 'https://www.linkedin.com/company/zoftmo-solutions' },
        { id: 'twitter', icon: <FaXTwitter />, link: '#' },
    ]

    return (
        <div>
            <div className="flex justify-center items-center gap-4 md:text-2xl text-base text-white bg-primary md:h-16 h-8">
                {socialIcons.map(({ id, icon, link }) => (
                    <Link key={id} href={link} target="_blank" rel="noopener noreferrer">
                        <div className="bg-button md:w-10 md:h-10 w-6 h-6 flex justify-center items-center rounded-full hover:bg-white hover:text-[#607EBC] hover:text-4xl transition cursor-pointer">
                        {icon}
                    </div>
                    </Link>
                ))}
            </div>
            <div className='flex justify-center items-center gap-4 md:text-lg text-sm text-primary bg-primary md:h-8 h-12'>
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
            <div className='flex justify-center items-center gap-4 md:text-base text-sm text-center text-primary bg-primary md:h-8 h-12'>
                <span>@2025 | All Right Reserved by ZoftMo Solutions (PVT) Ltd.</span>
            </div>
        </div>
    )
}

export default Footer