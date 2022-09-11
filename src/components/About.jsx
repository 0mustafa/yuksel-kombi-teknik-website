import React from 'react'

function About() {
    return (
        <div name="about" className='w-full h-screen'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right mb-16 pl-4 text-brand4'>
                        <p className='text-4xl font-bold inline border-b-4 border-brand1'>
                            Hakkımızda
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 items-center px-1'>
                    <div className='sm:text-right text-6xl md:text7xl text-brand3 font-bold'>
                        <p>YÜKSEL</p>
                        <p>KOMBİ</p>
                        <p>TEKNİK</p>
                    </div>
                    <div className='text-brand3 text-sm md:text-lg'>
                        <p>
                            Düzce'nin Cumayeri ilçesinde bulunan dükkanımızda
                            Cumayeri ve çevresindeki yerleşim yerlerine
                            <strong> Kombi Bakımı, Kombi Tamiri, Petek Temizliği </strong>
                            gibi konularda müşterilerimize hizmet vermekteyiz.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About