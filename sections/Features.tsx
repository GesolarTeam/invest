"use client"
 
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"
import RowSteps from "@/components/row-steps"

const chartData = [
  { month: "January", desktop: 72, mobile: 72 },
  { month: "February", desktop: 90, mobile: 75 },
  { month: "March", desktop: 120, mobile: 82 },
  { month: "April", desktop: 160, mobile: 80 },
  { month: "May", desktop: 180, mobile: 60 },
  { month: "June", desktop: 200, mobile: 50 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

function Features() {
  return (
    <section className='w-full max-w-6xl mx-auto px-4 flex items-center justify-center'>
      <div className="gap-2 grid grid-cols-12 grid-rows-2">
        <div className="col-span-12 sm:col-span-7 min-h-[300px] rounded-2xl border-1 border-neutral-900 bg-white/5">
          <div className='w-full h-full px-6 py-4 flex flex-col justify-between'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-20 text-orange-400">
              <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
            </svg>


            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-2xl text-white'>
                Investimento <b className='text-orange-400'>seguro e inteligente</b> 
              </h1>

              <p className='text-white/50 text-sm font-normal lg:text-base'>
                As usinas são ativos de grande apelo tecnológico e ambiental. 
                A demanda por energia está cada vez maior e por ser sustentavel, 
                a energia solar promove potencial de alta rentabilidade em operações de uma plataforma fácil e simples de operar.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-5 min-h-[300px] rounded-2xl border-1 border-neutral-900 bg-white/5">
          <div className='w-full h-full p-6 flex flex-col justify-between gap-8'>
            <img 
              src='./assets/bento_image_2.svg'
              className='max-h-36'
            />

            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-2xl text-white'>
                Especialistas
              </h1>

              <p className='text-white/50 text-sm font-normal lg:text-base'>
                Nossos especialistas são profissionais qualificados e certificados no mercado. 
                Realizam análises nas áreas de crédito, jurídica e financeira para apresentar os 
                melhores projetos fotovoltaicos para você investir com segurança.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full min-h-[300px] col-span-12 sm:col-span-5 rounded-2xl border-1 border-neutral-900 bg-white/5">
          <div className='w-full h-full p-6 flex flex-col justify-between gap-8'>
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-2xl'>
                <span className="text-orange-400">Alto retorno</span> <b className="font-medium text-white">&</b> <span className="text-orange-200">baixo risco​</span>
              </h1>

              <p className='text-white/50 text-sm font-normal lg:text-base'>
                O seu investimento estará atrelado à energia do futuro,
                que figura nas pautas da agenda mundial e que tem muito a crescer.
              </p>
            </div>

            <ChartContainer config={chartConfig}>
              <LineChart
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <Line
                  dataKey="desktop"
                  type="monotone"
                  stroke="#ff6900"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="mobile"
                  type="monotone"
                  stroke="#ffb86a"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </div>

        <div className="w-full min-h-[300px] col-span-12 sm:col-span-7 rounded-2xl border-1 border-neutral-900 bg-white/5">
          <div className='w-full h-full p-6 flex flex-col gap-8'>
            <div className="h-full flex items-center justify-center">
              <RowSteps
                defaultStep={2}
                steps={[
                  {
                    title: "Projeto",
                  },
                  {
                    title: "Execução",
                  },
                  {
                    title: "Produção",
                  },
                ]}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-2xl text-white'>
                Transparência
              </h1>

              <p className='text-white/50 text-sm font-normal lg:text-base'>
                Acompanhe em tempo real o status do andamento da construção, 
                geração e economia das usinas nas quais você investiu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features