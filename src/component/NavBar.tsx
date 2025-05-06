import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
    return (
        <header className="w-full flex justify-center top-4 fixed z-50">
            <nav className="bg-secondary backdrop-blur-md shadow-xl rounded-full h-14 w-4/9 flex items-center justify-center gap-6">
                <Image src="/images/logo.png" alt="Logo" width={96} height={48} />

                <Link href="/"><span className="text-primary hover:text-blue-900 font-bold transition cursor-pointer text-xl">Home</span></Link>
                <Link href="/about"><span className="text-primary hover:text-blue-900 font-bold transition cursor-pointer text-xl">About</span></Link>
                <Link href="/case-studies"><span className="text-primary hover:text-blue-900 font-bold transition cursor-pointer text-xl">Case Studies</span></Link>
                <Link href="/services"><span className="text-primary hover:text-blue-900 font-bold transition cursor-pointer text-xl">Services</span></Link>
                <Link href="/contact"><span className="text-primary hover:text-blue-900 font-bold transition cursor-pointer text-xl">Contact</span></Link>
            </nav>
        </header>
    )
}

export default NavBar
