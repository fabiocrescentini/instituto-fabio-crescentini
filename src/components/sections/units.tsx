'use client'
import { useRef } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { Carousel } from '../common/carousel'
import { CardUnit } from '../common/card-unit'
import { IUnits } from '@/data/types/units'

interface SectionUnitsProps {
  units: IUnits[]
}

export function SectionUnits({ units }: SectionUnitsProps) {
  const nextButtonRef = useRef(null)
  const prevButtonRef = useRef(null)
  return (
    <section className="h-auto pb-5">
      <div className="container px-5 flex flex-col justify-center items-center">
        <h2 className="font-merriweather text-xl lg:text-1xl text-red-700 font-bold text-center">
          Nossas Estruturas
        </h2>
      </div>
      <div className="flex gap-12 items-center pt-16">
        <button ref={prevButtonRef} className="hidden ">
          <RiArrowLeftSLine size={30} className="text-red-700" />
        </button>
        <Carousel
          renderItem={(item) => <CardUnit {...item} />}
          items={units}
          nextButtonRef={nextButtonRef}
          prevButtonRef={prevButtonRef}
        />
        <button ref={nextButtonRef} className="hidden">
          <RiArrowRightSLine size={30} className="text-red-700" />
        </button>
      </div>
    </section>
  )
}
