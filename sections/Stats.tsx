import React from 'react'

function Stats() {
  return (
    <section className='min-h-[900px] w-full max-w-6xl mx-auto px-6 py-28 flex flex-col items-start md:py-49'>
        <div className='flex flex-col gap-24 lg:gap-48'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-4xl font-medium text-white'>
                    Alguns números da nossa empresa
                </h2>

                <p className='max-w-md text-white/50'>
                    Números que a nossa empresa chegou ao longo de 5 anos de trabalho, 
                    porpocionando o melhor para nosso cliente
                </p>
            </div>

            <div className='w-full flex flex-col items-start gap-4 lg:items-end lg:flex-row'>
                <div className='h-40 bg-white/5 p-8 rounded-2xl lg:min-w-80'>
                    <div className='h-full flex flex-col justify-between'>
                        <span className='text-4xl font-bold text-orange-400'>3.5 MW</span>
                        <span className='text-lg text-white/50'>De potência instalada​</span>
                    </div>
                </div>

                <div className='h-64 bg-white/5 p-8 rounded-2xl lg:min-w-80'>
                    <div className='h-full flex flex-col justify-between'>
                        <span className='text-4xl font-bold text-orange-400'>+R$ 3.2 milhões</span>
                        <span className='text-lg text-white/50'>Em retorno do investimento​</span>
                    </div>
                </div>

                <div className='h-52 bg-white/5 p-8 rounded-2xl lg:min-w-80'>
                    <div className='h-full flex flex-col justify-between'>
                        <span className='text-4xl font-bold text-orange-400'>+500</span>
                        <span className='text-lg text-white/50'>Clientes economizando energia​</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stats