import React from 'react'

function Maps() {
    return (
        <div name="maps" className='w-full h-screen px-5 mb-20'>
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center gap-20'>
                <div className='mb-10 text-center'>
                    <p className='text-4xl text-brand4 inline font-bold border-b-4 border-brand1'>Neredeyiz ?</p>
                </div>
                <iframe className='px-5' src="https://www.google.com/maps/d/embed?mid=1Brg5Zsa3K2cG4AhGV5snT-w4ZVlGS6E&ehbc=2E312F" title='Yüksel Kombi Teknik' height="480"></iframe>
            </div>
        </div>
    )
}

export default Maps