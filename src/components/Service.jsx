import React from 'react'
import kombi1 from '../assets/kombi1.jpg'
import kombi2 from '../assets/kombi2.jpg'
import petek from '../assets/petek.jpg'
import termostat from '../assets/termostat.jpg'
import kesif from '../assets/oda.jpg'

function Service() {
    return (
        <div name="service" className='w-full px-5'>
            <div className='max-w-[1000px] h-full mx-auto flex flex-col justify-center gap-20'>

                <div className='text-center'>
                    <p className='text-4xl text-brand4 inline font-bold border-b-4 border-brand1'>Hizmetlerimiz</p>
                </div>


                <div className='w-full grid md:grid-cols-3 sm:grid-cols-2 justify-center py-8 gap-2'>
                    <div className='shadow-lg shadow-black hover:scale-110 duration-500 p-4 max-w-xs bg-white rounded-md'>
                        <img className='w-[300px] mx-auto my-4 rounded-md' src={kesif} alt="html logo" />
                        <p className='mt-8 text-lg font-bold'>Ücretsiz Keşif</p>
                        <p className='my-4 text-sm'>
                            Evinizde rahatlık ve konfor için ihtiyacınız olan çözümleri <strong>Ücretsiz Keşif</strong> fırsatıyla öğrenmek için hemen bize ulaşın.
                        </p>
                    </div>
                    <div className='shadow-lg shadow-black hover:scale-110 duration-500 p-4 max-w-xs bg-white rounded-md'>
                        <img className='w-[300px] mx-auto my-4 rounded-md' src={kombi1} alt="html logo" />
                        <p className='mt-8 text-lg font-bold'>Kombi Bakımı</p>
                        <p className='my-4 text-sm'>
                            Enerji tasarrufu sağlamak, kombinizin verimliliğini ve kullanım ömrünü arttırmak için <strong>Kombi Bakımı</strong> çok önemlidir.
                            Güvenilir ve ekonomik kombi bakımı hizmeti için doğru yerdesiniz.
                        </p>
                    </div>
                    <div className='shadow-lg shadow-black hover:scale-110 duration-500 p-4 max-w-xs bg-white rounded-md'>
                        <img className='w-[300px] mx-auto my-4 rounded-md' src={kombi2} alt="html logo" />
                        <p className='mt-8 text-lg font-bold'>Kombi Tamiri</p>
                        <p className='my-4 text-sm'>
                            Arızalı kombilerinizin daha büyük sorunlara yol açmaması için en hızlı şekilde tamir edilmesi gerekir. Tüm marka kombilerin 
                            <strong> Kombi Tamiri</strong> özenle yapılır.
                        </p>
                    </div>
                    <div className='shadow-lg shadow-black hover:scale-110 duration-500 p-4 max-w-xs bg-white rounded-md'>
                        <img className='w-[300px] mx-auto my-4 rounded-md' src={petek} alt="html logo" />
                        <p className='mt-8 text-lg font-bold'>Petek Satışı, Montajı ve Temizliği</p>
                        <p className='my-4 text-sm'>
                            Faturalarda tasarruf etmek istiyorsanız yıllık olarak <strong>Petek temizliği</strong> yaptırmak verimliliği arttıracağından dolayı
                            faturalarınızdaki değişimi hissedeceksiniz. Petek temizliği, satışı ve montajı için hemen bize ulaşın.
                        </p>
                    </div>
                    <div className='shadow-lg shadow-black hover:scale-110 duration-500 p-4 max-w-xs bg-white rounded-md'>
                        <img className='w-[300px] mx-auto my-4 rounded-md' src={termostat} alt="html logo" />
                        <p className='mt-8 text-lg font-bold'>Oda Termostatı Satışı ve Montajı</p>
                        <p className='my-4 text-sm'>
                            Oda sıcaklığını dilediğin derecede sabitlemek için aradığın teknoloji <strong>Oda Termostatı</strong>. Evinize en uygun oda termostatı
                            için hemen bize ulaşın.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Service