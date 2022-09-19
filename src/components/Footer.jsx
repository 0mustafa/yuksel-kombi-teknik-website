import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { FaInstagram } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Footer() {
    return (
        <div className='w-full h-full bg-brand4 divide-y text-brand2'>
            <div className='max-w-[1100px] mx-auto w-full md:h-full p-10 h-screen text-brand1 flex items-center'>

                <div className='w-full mx-auto gap-10 flex flex-col md:flex-row flex-wrap justify-start md:justify-between'>
                    <div className='h-max'>
                        <h2 className='font-bold text-3xl md:text-3xl sm:text-4xl'>YÜKSEL KOMBİ TEKNİK</h2>
                        <p className='mt-5 text-sm max-w-sm'>
                            Düzce ili ve tüm ilçelerine Ücretsiz Keşifle birlikte
                            Kombi Bakımı, Kombi Tamiri, Petek Satışı, Petek Montajı, Petek Temizliği Oda Termostatı Satışı ve Oda Termostatı Montajı
                            gibi konularda müşterilerimize hizmet veren yerel bir işletmeyiz.
                        </p>
                    </div>

                    <div className='h-max'>
                        <h2 className='font-bold text-xl mb-4 tracking-wider'>Hızlı Linkler</h2>
                        <ul className='flex flex-col gap-2 text-sm'>
                            <li>
                                <Link className='flex items-center hover:text-white cursor-pointer' to="home" spy={true} smooth={true} offset={50} duration={500}>
                                    <BiChevronRight />
                                    Anasayfa
                                </Link>
                            </li>
                            <li>
                                <Link className='flex items-center hover:text-white cursor-pointer' to="about" spy={true} smooth={true} offset={50} duration={500}>
                                    <BiChevronRight />
                                    Hakkımızda
                                </Link>
                            </li>
                            <li>
                                <Link className='flex items-center hover:text-white cursor-pointer' to="service" spy={true} smooth={true} offset={50} duration={500}>
                                    <BiChevronRight />
                                    Hizmetlerimiz
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='h-max'>
                        <h2 className='font-bold text-xl mb-4 tracking-wider'>İletişim</h2>
                        <div className='text-sm max-w-xs'>
                            <div className='flex gap-2'>
                                <p className='inline'>Telefon:</p>
                                <a href="tel:+905457683310">0545 768 33 10</a>
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
                </div>

            </div>

            <div className='max-w-[1100px] mx-auto flex justify-center items-center py-2 gap-1'>
                <a className='text-sm flex items-center gap-1 text-brand1' href="https://www.instagram.com/yukselkombiteknik" rel="noreferrer" target="_blank">
                    <FaInstagram />
                    yukselkombiteknik
                </a>
            </div>


        </div>
    )
}

export default Footer