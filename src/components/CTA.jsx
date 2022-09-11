import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'

function CTA() {
    return (
        <div className='w-full h-screen'>
            <div className='flex items-center w-full h-96 bg-brand2'>
                <div className='max-w-[1000px] flex flex-col justify-center text-brand4 mx-auto pt-10 text-center gap-4'>
                    <p className='font-medium text-xl'>Temiz işçilik, güler yüzlü hizmet.</p>
                    <h2 className='font-bold text-2xl'>İhtiyacınıza Yönelik Hızlı Çözümler</h2>
                    <button className='flex items-center py-3 px-5 gap-2 bg-brand4 text-white w-max rounded-full mx-auto my-3 hover:scale-110 duration-500'>
                        <FiPhoneCall size={20} />
                        <a href="tel:+905457683310">Hemen Ara</a>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default CTA