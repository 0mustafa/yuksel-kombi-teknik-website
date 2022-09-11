import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { FaInstagram } from 'react-icons/fa'

function Footer() {
    return (
        <div className='w-full bg-brand4 pt-20 divide-y text-brand2'>
            <div className='max-w-[1100px] mx-auto w-full md:h-full h-screen flex md:flex-row sm:flex-col flex-wrap justify-between text-brand1 p-10 md:gap-10 sm:gap-10'>

                <div className='h-max'>
                    <h2 className='font-bold text-3xl md:text-3xl sm:text-4xl'>YÜKSEL KOMBİ TEKNİK</h2>
                    <p className='mt-5 text-sm max-w-sm'>Düzce'nin Cumayeri ilçesinde Kombi Bakımı,
                        Kombi Tamiri, Petek Temizliği konularında
                        hizmet veren yerel bir işletmedir.</p>
                </div>

                <div className='h-max'>
                    <h2 className='font-bold text-xl mb-4'>Hızlı Linkler</h2>
                    <ul className='flex flex-col gap-2'>
                        <li>
                            <a className='flex items-center hover:text-white' href="/"><BiChevronRight /> Anasayfa</a>
                        </li>
                        <li>
                            <a className='flex items-center hover:text-white' href="/"><BiChevronRight /> Hakkımızda</a>
                        </li>
                        <li>
                            <a className='flex items-center hover:text-white' href="/"><BiChevronRight /> Hizmetlerimiz</a>
                        </li>
                    </ul>
                </div>

                <div className='h-max'>
                    <h2 className='font-bold text-xl mb-4'>İletişim</h2>
                    <div className='flex gap-2'>
                        <a href="tel:+905457683310">Telefon:</a>
                        <p className='inline'>0545 768 33 10</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='inline'>Eposta:</p>
                        <a href="mailto:yukselkombiteknik@gmail.com">yukselkombiteknik@gmail.com</a>
                    </div>
                    <div className='flex flex-col'>
                        <p className='my-4 inline'>Adres Bilgileri</p>
                        <p className='max-w-sm'>Yeni Mahalle Şahin Sokak No: 14/A
                            Cumayeri/Düzce</p>
                    </div>
                </div>
            </div>

            <div className='max-w-[1100px] mx-auto flex justify-center items-center py-2 gap-1'>
                <a className='text-sm flex items-center gap-1 text-brand1' href="instagram.com/yukselkombiteknik" rel="noreferrer" target="_blank">
                    <FaInstagram/> 
                    yukselkombiteknik
                </a>
            </div>


        </div>
    )
}

export default Footer