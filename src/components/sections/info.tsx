'use client'
import Image from 'next/image'
import { Button } from '../common/button'
import { CardAwards } from '../common/card-awards'
import { DivSections } from '../common/div-sections'
import { ArrowRight } from '@/components/common/icons/arrow-right'
import { Carousel } from '../common/carousel'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { IAwards } from '@/data/types/awards'
import { useRef } from 'react'

interface SectionInfoProps {
  awards: IAwards[]
}

export function SectionInfo({ awards }: SectionInfoProps) {
  const nextButtonRef = useRef(null)
  const prevButtonRef = useRef(null)
  return (
    <section className="h-auto bg-gradient bg-cover bg-no-repeat flex flex-col space-y-6 lg:space-y-10">
      <div className="pt-6 lg:pt-[3.69rem] container px-5 grid items-center grid-col-1 lg:grid-flow-col lg:items-start gap-6 lg:gap-24">
        <div className="w-auto flex justify-center">
          <Image
            src="/home/fabio-crescentini.png"
            width={357}
            height={518}
            alt="imagem do Dr. Fábio Crescentini "
            className="hidden lg:flex"
          />
          <Image
            src="/home/fabio-crescentini-2.png"
            width={312}
            height={379}
            alt="imagem do Dr. Fábio Crescentini "
            className="flex lg:hidden"
          />
        </div>
        <div className="flex w-full flex-col space-y-5 text-center lg:text-left">
          <div className="flex flex-col space-y-2">
            <h3 className="font-merriweather text-xl lg:text-1xl text-red-700 font-bold">
              Dr. Fábio Crescentini
            </h3>
            <span className="font-merriweather font-bold text-sm lg:text-md text-red-200">
              Cirurgião do aparelho digestivo, Gastroenterologista,
              Hepatologista
            </span>
            <span className='className="font-merriweather font-bold text-md text-red-200'>
              CRM: 102.070
            </span>
          </div>
          <div className="flex flex-col space-y-4 lg:space-y-5">
            <p className="font-source font-light text-sm text-blue leading-heading">
              Possui graduação em Medicina - Santa Casa de Misericórdia de São
              Paulo (2000), pós-graduação em Cirurgia Geral pela FMUSP (2003) e
              pós-graduação em Cirurgia do Aparelho Digestivo pela FMUSP (2005).
              Como extensão profissional, realizou estágios de transplante de
              fígado intervivos e cirurgia hepática em Taiwan e Coréia do Sul,
              além de estágios de transplante de pâncreas nos Estados Unidos.
            </p>
            <p className="font-source font-light text-sm text-blue leading-heading">
              Tem formação complementar nas seguintes áreas: cirurgia
              videolaparoscópica e cirurgia oncológica do aparelho digestivo,
              transplante de órgãos abdominais, microcirurgia e hepatologia
              clínica e cirúrgica.
            </p>
            <p className="font-source font-light text-sm text-blue leading-heading">
              Tem atuação intensa nas seguintes áreas: assistência ao paciente
              com doenças do sistema digestivo, incluindo doenças hepáticas e
              oncológicas; cirurgias do aparelho digestivo, incluindo
              laparoscopias e cirurgias oncológicas do trato
              hepatobiliopancreático; transplante de órgãos abdominais, como
              fígado, pâncreas e ruim; cirurgia de doadores vivos e falecidos de
              fígados, pâncreas e ruim; assistência a pacientes transplantados.
            </p>
          </div>
          <div className="justify-center lg:justify-start flex pt-5">
            <Button.Root href="#">
              <Button.Text>Saiba mais</Button.Text>
              <Button.Icon icon={ArrowRight} />
            </Button.Root>
          </div>
        </div>
      </div>
      <div className="container px-5 flex flex-col items-center">
        <h3 className="font-merriweather text-xl lg:text-1xl text-red-700 font-bold">
          Prêmios Médicos
        </h3>
        <div className="flex gap-12 pt-7 items-center">
          <button
            ref={prevButtonRef}
            className="hidden lg:flex absolute left-10 mb-10 "
          >
            <RiArrowLeftSLine size={30} className="text-red-700" />
          </button>
          <Carousel
            renderItem={(item) => <CardAwards {...item} />}
            items={awards}
            nextButtonRef={nextButtonRef}
            prevButtonRef={prevButtonRef}
          />

          <button
            ref={nextButtonRef}
            className="hidden lg:flex  absolute right-10 mb-10"
          >
            <RiArrowRightSLine size={30} className="text-red-700" />
          </button>
        </div>
      </div>
      <div className="">
        <DivSections />
        <div className=" lg:hidden  bg-line bg-center bg-no-repeat w-full h-1" />
      </div>
    </section>
  )
}
