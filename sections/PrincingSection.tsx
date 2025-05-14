'use client';

import { ArrowRight, CircleCheck } from 'lucide-react';
import { useState } from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export function PrincingSection () {
  return (
    <section className="h-full w-full max-w-screen-xl mx-auto px-6 py-16 pb-32 lg:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 text-center">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="text-pretty text-4xl font-bold lg:text-6xl text-white">
            Nossos Planos
          </h2>
          
          <p className="mb-4 max-w-xl text-sm text-white/50 md:text-base">
            Conheça os planos de cotas de investimento adequados ao seu perfil​
          </p>
        </div>

        <div className="flex flex-col flex-wrap items-stretch gap-6 lg:justify-center lg:flex-row">
          <Card className="flex flex-col justify-between text-left text-white border-white/25">
            <CardHeader>
              <CardTitle className='mb-4'>
                <p className='text-xl font-semibold'>Básico</p>
              </CardTitle>
              <span className="text-lg font-medium text-white/65">Projeto: <span className='text-orange-400'>R$ 100.000,00</span></span>
              <span className="text-lg font-medium text-white/65">Valor da cota:  <span className='text-orange-400'>R$ 10.000,00</span></span>
              <span className="text-lg font-medium text-white/65">
                Rendimento médio: <span className='text-orange-400'>1,7%</span> ao mes
              </span>
            </CardHeader>
            <CardContent className='text-white/40'>
              <Separator className="mb-2" />
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Cotas disponiveis: 10</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Prazo: 10 anos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Aprox. 200% do CDI</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="">
              <a href='https://w.app/DeG5rn' target='_blank' className="w-full flex items-center justify-center ">
                Saber mais
                <ArrowRight className="ml-2 size-4" />
              </a>
            </CardFooter>
          </Card>

          <Card className="flex w-80 flex-col justify-between text-left text-white border-white/25">
            <CardHeader>
              <CardTitle className='mb-4'>
                <p className='text-xl font-medium text-white/65'>Pro</p>
              </CardTitle>
              <span className="text-lg font-medium text-white/65">Projeto: <span className='text-orange-400'>R$ 200.000,00</span></span>
              <span className="text-lg font-medium text-white/65">Valor da cota:  <span className='text-orange-400'>R$ 50.000,00</span></span>
              <span className="text-lg font-medium text-white/65">
                Rendimento médio: <span className='text-orange-400'>1,8%</span> ao mes
              </span>
            </CardHeader>
            <CardContent className='text-white/40'>
              <Separator className="mb-2" />
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Cotas disponiveis: 04</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Prazo: 10 anos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Aprox. 210% do CDI</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="">
              <a href='https://w.app/DeG5rn' target='_blank' className="w-full flex items-center justify-center ">
                Saber mais
                <ArrowRight className="ml-2 size-4" />
              </a>
            </CardFooter>
          </Card>

          <Card className="flex w-80 flex-col justify-between text-left text-white border-white/25">
            <CardHeader>
              <CardTitle className='mb-4'>
                <p className='text-xl font-semibold'>Exclusivo</p>
              </CardTitle>
              <span className="text-lg font-medium text-white/65">Projeto: <span className='text-orange-400'>R$ 250.000,00</span></span>
              <span className="text-lg font-medium text-white/65">Valor da cota:  <span className='text-orange-400'>R$ 250.000,00</span></span>
              <span className="text-lg font-medium text-white/65">
                Rendimento médio: <span className='text-orange-400'>2,0%</span> ao mes
              </span>
            </CardHeader>
            <CardContent className='text-white/40'>
              <Separator className="mb-2" />
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Cotas disponiveis: Unica</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Prazo: 10 anos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Aprox. 224% do CDI</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="">
              <a href='https://w.app/DeG5rn' target='_blank' className="w-full flex items-center justify-center ">
                Saber mais
                <ArrowRight className="ml-2 size-4" />
              </a>
            </CardFooter>
          </Card>

          <Card className="flex w-80 flex-col justify-between text-left text-white border-white/25">
            <CardHeader>
              <CardTitle className='mb-4'>
                <p className='text-xl font-semibold'>Personalizado</p>
              </CardTitle>
              <span className="text-lg font-medium text-white/65">Projeto: <span className='text-orange-400'>Comodato</span></span>
              <span className="text-lg font-medium text-white/65">Valor da cota:  <span className='text-orange-400'>R$ 128.889,00</span></span>
              <span className="text-lg font-medium text-white/65">
                Rendimento médio: <span className='text-orange-400'>1,5%</span> ao mes
              </span>
              <span className="text-lg font-medium text-white/65">
                Retorno do capital: <span className='text-orange-400'>1,37%</span> ao mes
              </span>
            </CardHeader>
            <CardContent className=' text-white/40'>
              <Separator className="mb-2" />
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Cotas disponiveis: Unica</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Prazo: 72 meses</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="size-4" />
                  <span>Garantia: <span className='text-orange-400'>contrato comodato</span></span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="">
              <a href='https://w.app/DeG5rn' target='_blank' className="w-full flex items-center justify-center ">
                Saber mais
                <ArrowRight className="ml-2 size-4" />
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
