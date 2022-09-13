import React from 'react'
import plumber from '../assets/plumber.png'
import { FiPhoneCall } from 'react-icons/fi'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

function Home() {

    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <div name="home" className='w-full h-screen flex flex-col'>

            <div className='header fixed w-full h-[80px] flex justify-between shadow-sm px-6 text-brand4 items-center bg-white z-20'>

                <div className='logo text-[1.5rem] font-bold min-w-max'>
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
                <ul className={mobileMenu ? 'absolute top-0 left-0 w-full h-screen bg-brand4 text-brand1 flex flex-col pt-20 text-3xl transition-all duration-500 ease-in-out font-thin z-auto' : 'absolute top-0 left-[-999rem] w-full h-screen transition-all duration-1000 ease-in-out'}>
                    <li className='border-b-[1px] border-gray-600 py-10 hover:pl-5 transition-all duration-500 ease-in-out'>
                        <Link className='pl-2' to="home" spy={true} smooth={true} offset={50} duration={500} onClick={() => setMobileMenu(false)}>
                            Anasayfa
                        </Link>
                    </li>
                    <li className='border-b-[1px] border-gray-600 py-10 hover:pl-5 transition-all duration-500 ease-in-out'>
                        <Link className='pl-2' to="about" spy={true} smooth={true} offset={50} duration={500} onClick={() => setMobileMenu(false)}>
                            Hakkımızda
                        </Link>
                    </li>
                    <li className='border-b-[1px] border-gray-600 py-10 hover:pl-5 transition-all duration-500 ease-in-out'>
                        <Link className='pl-2' to="service" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setMobileMenu(false)}>
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

            <div className="container h-screen max-w-[1000px] mx-auto grid grid-cols-2 items-center">
                <div className={mobileMenu ? 'content flex flex-col ml-5' : 'content flex flex-col ml-5 z-10'}>
                    <h1 className='text-brand4 text-5xl font-bold'>Kombi, Doğalgaz</h1>
                    <h1 className='text-brand4 text-5xl font-bold'>Teknik Tesisatçı mı</h1>
                    <h1 className='text-brand1 text-5xl font-bold'>Arıyorsunuz ?</h1>
                    <button className='bg-brand4 w-max flex items-center text-white py-3 px-5 rounded-full font-medium my-10 gap-2 hover:scale-110 duration-500'>
                        <FiPhoneCall size={18} />
                        <a href="tel:+905457683310">Hemen Ara</a>
                    </button>
                </div>
                <div className="img">
                    <img src={plumber} alt="plumber" />
                </div>
            </div>
        </div>
    )
}

export default Home