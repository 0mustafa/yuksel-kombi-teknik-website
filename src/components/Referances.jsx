import React from 'react'
import vaillant from '../assets/vaillant.png'
import demirdokum from '../assets/demirdokum.png'
import buderus from '../assets/buderus.png'
import eca from '../assets/eca.png'
import baymak from '../assets/baymak.png'
import bosch from '../assets/bosch.png'
import viessman from '../assets/viessmann.png'
import daikin from '../assets/daikin.png'

function Referances() {
    return (
        <div className='w-full'>
            <div className='max-w-[1000px] mx-auto my-20 h-full flex flex-col'>
                <div>
                    <p className='text-4xl text-brand4 inline font-bold border-b-4 border-brand1'>Çalıştığımız Markalar</p>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 px-5'>

                    <div className='shadow-lg px-5 py-10 rounded-md flex items-center hover:scale-110 duration-500'>
                        <img src={vaillant} alt="vaillant" />
                    </div>
                    <div className='shadow-lg px-5 py-10 rounded-md flex items-center hover:scale-110 duration-500'>
                        <img src={demirdokum} alt="demirdokum" />
                    </div>
                    <div className='shadow-lg px-5 py-10 rounded-md flex items-center hover:scale-110 duration-500'>
                        <img src={buderus} alt="buderus" />
                    </div>
                    <div className='shadow-lg px-5 py-10 rounded-md flex items-center hover:scale-110 duration-500'>
                        <img src={eca} alt="e.c.a" />
                    </div>
                    <div className='shadow-lg px-5 py-10 rounded-md flex items-center hover:scale-110 duration-500'>
                        <img src={baymak} alt="baymak" />
                    </div>
                    <div className='shadow-lg px-5 py-10 rounded-md flex items-center hover:scale-110 duration-500'>
                        <img src={bosch} alt="bosch" />
                    </div>
                    <div className='shadow-lg px-5 py-10 rounded-md flex items-center hover:scale-110 duration-500'>
                        <img src={viessman} alt="viessman" />
                    </div>
                    <div className='shadow-lg px-5 py-10 rounded-md flex items-center hover:scale-110 duration-500'>
                        <img src={daikin} alt="daikin" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Referances