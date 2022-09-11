import React from 'react'
import kombi1 from '../assets/kombi1.jpg'
import kombi2 from '../assets/kombi2.jpg'
import petek from '../assets/petek.jpg'

function Service() {
    return (
        <div name="service" className='w-full px-5'>
            <div className='max-w-[1000px] h-full sm:h-screen mx-auto flex flex-col justify-center'>

                <div>
                    <p className='text-4xl text-brand4 inline font-bold border-b-4 border-brand1'>Hizmetlerimiz</p>
                </div>


                <div className='w-full grid md:grid-cols-3 sm:grid-cols-2 py-8 gap-2'>
                    <div className='shadow-lg shadow-black hover:scale-110 duration-500 px-4 max-w-xs bg-white rounded-md'>
                        <img className='w-[300px] mx-auto my-4 rounded-md' src={kombi1} alt="html logo" />
                        <p className='mt-8 text-lg font-bold'>Kombi Bakımı</p>
                        <p className='my-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam explicabo animi tempora aliquid asperiores nisi maxime</p>
                    </div>
                    <div className='shadow-lg shadow-black hover:scale-110 duration-500 px-4 max-w-xs bg-white rounded-md'>
                        <img className='w-[300px] mx-auto my-4 rounded-md' src={kombi2} alt="html logo" />
                        <p className='mt-8 text-lg font-bold'>Kombi Tamiri</p>
                        <p className='my-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam explicabo animi tempora aliquid asperiores nisi maxime</p>
                    </div>
                    <div className='shadow-lg shadow-black hover:scale-110 duration-500 px-4 max-w-xs bg-white rounded-md'>
                        <img className='w-[300px] mx-auto my-4 rounded-md' src={petek} alt="html logo" />
                        <p className='mt-8 text-lg font-bold'>Petek Temizliği</p>
                        <p className='my-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam explicabo animi tempora aliquid asperiores nisi maxime</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Service