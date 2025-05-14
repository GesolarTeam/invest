export function HowWeWorkSection() {
  return (
    <section className="min-h-[75vh] h-full w-full max-w-screen-xl mx-auto px-4 lg:pt-8 lg:pb-20 lg:px-8">
      <div className='w-full h-full flex flex-col justify-between gap-4 relative lg:flex-row lg:gap-24'>
        <div className="w-full h-full flex flex-col items-start  lg:sticky lg:inset-y-32">
          <h2 className="mt-4 mb-4 text-3xl font-medium lg:text-4xl text-white">
            Siga essa esteira e faça parte da <span className='text-orange-400'>Gesolar Invest</span>
          </h2>

          <p className="mb-4 max-w-xl text-sm text-white/50 md:text-base">Cadastre-se, escolha o plano de cotas de usinas alinhadas ao seu perfil e faça investimentos no mercado de energia renovável. ​</p>
        </div>

        <div className="w-full mt-14 grid gap-16 lg:mt-20">
          <div className="relative flex gap-3 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 md:size-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-400 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </span>

            <div>
              <h3 className="font-medium md:mb-2 md:text-xl text-white">
                <span className='mr-2'>1.</span>Fale com um especialista​
                <span className="absolute -left-px hidden h-6 w-px bg-orange-400 md:inline-block"></span>
              </h3>

              <p className="text-sm text-white/50 md:text-base">
                Saiba todas as informações, benefícios e vantagens ao contratar sua cota de investimento​
              </p>
            </div>
          </div>
          
          <div className="relative flex gap-3 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 md:size-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
              </svg>

            </span>
            
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl  text-white">
              <span className='mr-2'>2.</span>Acesse os projetos 
                <span className="absolute -left-px hidden h-6 w-px bg-orange-400 md:inline-block"></span>
              </h3>
              <p className="text-sm text-white/50 md:text-base">
                Avalie as condições do projeto da usina, 
                leia os termos e condições de investimentos e 
                escolha o que mais se encaixa com a sua necessidade.
              </p>
            </div>
          </div>

          <div className="relative flex gap-3 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 md:size-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
              </svg>

            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl text-white">
              <span className='mr-2'>3.</span>Contrate o plano 
                <span className="absolute -left-px hidden h-6 w-px bg-orange-400 md:inline-block"></span>
              </h3>
              <p className="text-sm text-white/50 md:text-base">
                Escolha a forma de pagamento do seu plano (TED, Cartão, Pix) 
                e transfira o saldo pertinente para sua conta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};