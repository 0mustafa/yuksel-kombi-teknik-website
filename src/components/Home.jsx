import React from 'react'
import plumber from '../assets/plumber.png'
import { FiPhoneCall } from 'react-icons/fi'

function Home() {
    return (
        <div name="home" className='w-full h-screen'>
            <div className="container h-full max-w-[1000px] flex flex-wrap items-center justify-between mx-auto">
                <div className="content flex flex-col ml-5">
                    <h1 className='text-brand4 text-5xl font-bold'>Kombi, Doğalgaz</h1>
                    <h1 className='text-brand4 text-5xl font-bold'>Teknik Tesisatçı mı</h1>
                    <h1 className='text-brand1 text-5xl font-bold'>Arıyorsunuz ?</h1>
                    <button className='bg-brand4 w-max flex items-center text-white py-3 px-5 rounded-full font-medium my-10 gap-2 hover:scale-110 duration-500'><FiPhoneCall size={18}/> Hemen Ara</button>
                </div>
                <div className="img hidden md:flex">
                    <img src={plumber} alt="plumber" />
                </div>
            </div>
        </div>
    )
}

export default Home