import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

function Header() {

    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <div className='fixed w-full h-[80px] flex justify-between shadow-sm px-6 text-brand4 items-center bg-white'>

            <div className='logo text-[1.5rem] font-bold'>
                <a href="/">YÜKSEL KOMBİ TEKNİK</a>
            </div>

            <div className="nav hidden md:flex">
                <ul className='flex gap-4 font-medium'>
                    <li className='my-auto py-7 cursor-pointer'>
                        <Link className='py-7' to="home" spy={true} smooth={true} offset={50} duration={500}>
                            Anasayfa
                        </Link>
                    </li>
                    <li className='my-auto py-7 cursor-pointer'>
                        <Link className='py-7' to="about" spy={true} smooth={true} offset={50} duration={500}>
                            Hakkımızda
                        </Link>
                    </li>
                    <li className='my-auto py-7 cursor-pointer'>
                        <Link className='py-7' to="service" spy={true} smooth={true} offset={50} duration={500}>
                            Hizmetlerimiz
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="cta gap-5 hidden lg:flex items-center">
                <div className="map font-medium cursor-pointer">
                    <Link className='py-7' to="maps" spy={true} smooth={true} offset={-100} duration={500}>
                        Yol Tarifi Al
                    </Link>
                </div>
                <div className="call">
                    <button className='py-3 px-5 bg-brand4 text-white rounded-full font-medium hover:scale-110 duration-500'>
                        <a href="tel:+905457683310">Hemen Ara</a>
                    </button>
                </div>
            </div>

            {/* Hamburger */}
            <div className='md:hidden z-10 p-3 cursor-pointer' onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? <FaTimes className='text-brand1 duration-1000' /> : <FaBars />}
            </div>

            {/* Mobile Menu */}
            <ul className={mobileMenu ? 'absolute top-0 left-0 w-full h-screen bg-brand4 text-brand1 flex flex-col pt-20 text-3xl transition-all duration-500 ease-in-out font-thin' : 'absolute top-0 left-[-999rem] w-full h-screen transition-all duration-1000 ease-in-out'}>
                <li className='border-b-[1px] border-gray-600 py-10 hover:pl-5 transition-all duration-500 ease-in-out'>
                    <Link to="home" spy={true} smooth={true} offset={50} duration={500} onClick={() => setMobileMenu(false)}>
                        Anasayfa
                    </Link>
                </li>
                <li className='border-b-[1px] border-gray-600 py-10 hover:pl-5 transition-all duration-500 ease-in-out'>
                    <Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={() => setMobileMenu(false)}>
                        Hakkımızda
                    </Link>
                </li>
                <li className='border-b-[1px] border-gray-600 py-10 hover:pl-5 transition-all duration-500 ease-in-out'>
                    <Link to="service" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setMobileMenu(false)}>
                        Hizmetlerimiz
                    </Link>
                </li>
                <div className='flex gap-5 mt-32 justify-center items-center font-light text-2xl transition-all duration-500 ease-in-out'>
                    <Link className='text-white cursor-pointer' to="maps" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setMobileMenu(false)}>
                        Yol Tarifi Al
                    </Link>
                    <button className='bg-brand3 text-white py-3 px-5 rounded-full'>
                        <a href="tel:+905457683310">Hemen Ara</a>
                    </button>
                </div>
            </ul>

        </div>
    )
}

export default Header