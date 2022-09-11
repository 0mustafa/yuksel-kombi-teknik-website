import React from 'react'

function About() {
    return (
        <div name="about" className='w-full h-screen'>
            <div className='flex flex-col justify-center items-center w-full h-full gap-20'>
                <div className='text-right md:text-center mb-16 text-brand4'>
                    <p className='text-4xl font-bold inline border-b-4 border-brand1'>
                        Hakkımızda
                    </p>
                </div>
                <div className='max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 items-center text-center px-1 gap-8 md:gap-0'>
                    <div className='text-5xl md:text7xl text-center text-brand3 font-bold'>
                        <p>YÜKSEL KOMBİ TEKNİK</p>
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