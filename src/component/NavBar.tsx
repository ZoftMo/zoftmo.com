'use client';

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="w-full md:flex justify-center md:top-4 fixed z-50">
            <nav className="bg-secondary backdrop-blur-md shadow-xl md:rounded-full h-14 xl:w-3xl md:w-2xl w-full flex items-center md:justify-center justify-evenly md:gap-6 gap-36">
                <Image src="/images/logo.png" alt="Logo" width={96} height={48} className='md:flex hidden' />
                <div className='hidden md:flex gap-6'>
                <Link href="/"><span className="text-primary hover:text-blue-900 font-bold transition cursor-pointer xl:text-xl md:text-base text-sm">Home</span></Link>
                <Link href="/about"><span className="text-primary hover:text-blue-900 font-bold transition cursor-pointer xl:text-xl md:text-base text-sm">About</span></Link>
                <Link href="/case-studies"><span className="text-primary hover:text-blue-900 font-bold transition cursor-pointer xl:text-xl md:text-base text-sm">Case Studies</span></Link>
                <Link href="/services"><span className="text-primary hover:text-blue-900 font-bold transition cursor-pointer xl:text-xl md:text-base text-sm">Services</span></Link>
                <Link href="/contact"><span className="text-primary hover:text-blue-900 font-bold transition cursor-pointer xl:text-xl md:text-base text-sm">Contact</span></Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-primary focus:outline-none">
                    {isOpen ? <FaTimes size={24} className='text-danger'/> : <FaBars size={24} className='text-primary'/>}
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-secondary px-4 pb-4 pt-2 rounded-b-lg shadow-lg backdrop-blur-md" style={{paddingBottom:'8px'}}>
                    <Link href="/"><span className="block py-2 text-primary hover:text-blue-900 font-bold transition text-sm bg-white rounded-sm" style={{margin:'6px',marginTop:'0px', padding:'4px', paddingInlineStart:'10px'}}>Home</span></Link>
                    <Link href="/about"><span className="block py-2 text-primary hover:text-blue-900 font-bold transition text-sm bg-white rounded-sm" style={{margin:'6px',marginTop:'0px', padding:'4px', paddingInlineStart:'10px'}}>About</span></Link>
                    <Link href="/case-studies"><span className="block py-2 text-primary hover:text-blue-900 font-bold transition text-sm bg-white rounded-sm" style={{margin:'6px',marginTop:'0px', padding:'4px', paddingInlineStart:'10px'}}>Case Studies</span></Link>
                    <Link href="/services"><span className="block py-2 text-primary hover:text-blue-900 font-bold transition text-sm bg-white rounded-sm" style={{margin:'6px',marginTop:'0px', padding:'4px', paddingInlineStart:'10px'}}>Services</span></Link>
                    <Link href="/contact"><span className="block py-2 text-primary hover:text-blue-900 font-bold transition text-sm bg-white rounded-sm" style={{margin:'6px',marginTop:'0px', padding:'4px', paddingInlineStart:'10px'}}>Contact</span></Link>
                </div>
            )}
        </header>
    )
}

export default NavBar
