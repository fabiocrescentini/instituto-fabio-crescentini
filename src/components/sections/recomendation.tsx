'use client'

import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '../common/button'
import { CardRecommendation } from '../common/card-recommendation'
import { DivSections } from '../common/div-sections'

import { Carousel } from '../common/carousel'
import { IRecommendations } from '@/data/types/recommendations'
import { useRef } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

interface SectionRecomendationProps {
  recommendations: IRecommendations[]
}
export function SectionRecomendation({
  recommendations,
}: SectionRecomendationProps) {
  const nextButtonRef = useRef(null)
  const prevButtonRef = useRef(null)
  return (
    <section className=" h-auto bg-radial2 bg-no-repeat bg-cover bg-bottom bg-blend-overlay lg:pt-10">
      <div className="container px-5 flex flex-col items-center pt-6 lg:pt-0 space-y-12">
        <h3 className="font-merriweather text-center lg:text-left text-xl lg:text-1xl text-red-700 font-bold">
          Nossos Pacientes recomendam
        </h3>
        <div className="flex gap-12 items-center">
          <button
            ref={prevButtonRef}
            className="hidden lg:flex absolute left-10 mb-10 "
          >
            <RiArrowLeftSLine size={30} className="text-red-700" />
          </button>
          <Carousel
            renderItem={(item) => <CardRecommendation {...item} />}
            items={recommendations}
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

        <div className="pt-3">
          <Button.Root href="#">
            <Button.Text>Agendar uma consulta</Button.Text>
            <Button.Icon icon={FaWhatsapp} size={25} />
          </Button.Root>
        </div>
      </div>
      <div className="pt-16 lg:pt-10">
        <DivSections />
        <div className=" lg:hidden  bg-line bg-center bg-no-repeat w-full h-1" />
      </div>
    </section>
  )
}
