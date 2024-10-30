'use client'
import Image from 'next/image'
import { Button } from '../common/button'
import { ArrowRight } from '../common/icons/arrow-right'
import { FaWhatsapp } from 'react-icons/fa'
import { DivSections } from '../common/div-sections'
import { useState } from 'react'
import { Specialty } from '@/data/types/specialty'
import { especialidades } from '@/data/specialty'
import Contact from '../analytics/Contact'

interface SectionEspecialidadesProps {
  defaultOption?:
    | 'hepatologia'
    | 'doecas-do-pancreas'
    | 'cirurgia-aparelho-digestivo'
    | 'gastroenterologia'
}

export function SectionEspecialidades({
  defaultOption = 'hepatologia',
}: SectionEspecialidadesProps) {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(
    null,
  )

  const filtered: Specialty[] = especialidades.filter((item: Specialty) =>
    selectedSpecialty === null
      ? item.type === defaultOption
      : item.type === selectedSpecialty,
  )

  const selectedSpecialtyData = filtered.length > 0 ? filtered[0] : null

  return (
    <section className="h-auto pt-12 ">
      <div className="container px-5 flex flex-col items-center justify-center">
        <h2 className="font-merriweather text-xl lg:text-1xl text-red-700 font-bold text-center">
          Nossas Especialidades
        </h2>

        <p className="pt-5 font-source text-blue text-lg font-medium leading-heading text-center lg:text-left">
          Somos especialistas em estudar, diagnosticar e tratar doenças do{' '}
          <span className="text-red-200">Sistema Digestivo</span>
        </p>
      </div>
      <div className="h-full bg-radial bg-cover bg-center bg-no-repeat ">
        <div className="lg:container mt-14">
          <div className=" flex flex-wrap items-start justify-around  lg:px-8 gap-x-10 gap-y-10 lg:gap-y-0">
            <div
              className="flex flex-col items-center h-auto w-44  group cursor-pointer"
              onClick={() => setSelectedSpecialty('hepatologia')}
            >
              <Image
                src="/sistema-digestivo/image-1.png"
                alt="imagem de um figado"
                width={130}
                height={130}
                className="w-[80px] h-[80px] lg:w-auto lg:h-auto"
              />
              <span className="text-red-700 font-merriweather font-bold text-sm text-center group-hover:text-red-200">
                Hepatologia
              </span>
            </div>
            <div
              className="flex flex-col items-center h-auto w-44 group cursor-pointer"
              onClick={() => setSelectedSpecialty('doecas-do-pancreas')}
            >
              <Image
                src="/sistema-digestivo/image-2.png"
                alt="imagem de um figado"
                width={130}
                height={130}
                className="w-[80px] h-[80px] lg:w-auto lg:h-auto"
              />
              <span className="text-red-700 font-merriweather font-bold text-sm text-center group-hover:text-red-200">
                Doenças do Pâncreas e Via Biliar
              </span>
            </div>
            <div
              className="flex flex-col items-center h-auto w-44 group cursor-pointer"
              onClick={() =>
                setSelectedSpecialty('cirurgia-aparelho-digestivo')
              }
            >
              <Image
                src="/sistema-digestivo/image-3.png"
                alt="imagem de um figado"
                width={130}
                height={130}
                className="w-[80px] h-[80px] lg:w-auto lg:h-auto"
              />
              <span className="text-red-700 font-merriweather font-bold text-sm text-center group-hover:text-red-200">
                Cirurgia do Aparelho Digestivo
              </span>
            </div>
            <div
              className="flex flex-col items-center h-auto w-44 group cursor-pointer"
              onClick={() => setSelectedSpecialty('gastroenterologia')}
            >
              <Image
                src="/sistema-digestivo/image-4.png"
                alt="imagem de um figado"
                width={130}
                height={130}
                className="w-[80px] h-[80px] lg:w-auto lg:h-auto"
              />
              <span className="text-red-700 font-merriweather font-bold text-sm text-center group-hover:text-red-200">
                Gastroenterologia
              </span>
            </div>
          </div>
          <div className="px-5">
            {selectedSpecialtyData && (
              <div
                className={`rounded-[0.625rem] mt-14 shadow-card bg-white  h-auto w-full flex flex-col lg:flex-row transition-opacity duration-500 ease-in-out ${
                  selectedSpecialtyData ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={selectedSpecialtyData.urlImg}
                  alt={selectedSpecialtyData.altImg}
                  width={508}
                  height={416}
                  quality={80}
                  className="w-full h-full lg:w-[508px] lg:h-auto"
                />
                <div className="flex-1 py-4 lg:pt-[3.75rem] px-4  lg:pb-5 lg:pl-[3.75rem]">
                  <h4 className="text-red-700 font-merriweather text-center lg:text-left font-bold text-xl">
                    {selectedSpecialtyData.title}
                  </h4>
                  <p className="text-blue font-source font-light text-sm leading-heading lg:pr-[3.75rem] mt-3 text-center lg:text-left">
                    {selectedSpecialtyData.description}
                  </p>
                  <div className="flex flex-col lg:flex-row  mt-8 lg:mr-12 flex-wrap gap-5 lg:gap-2 justify-between lg:max-w-[500px]">
                    <Button.Root href={selectedSpecialtyData.urlLink}>
                      <Button.Text>Saiba mais</Button.Text>
                      <Button.Icon icon={ArrowRight} />
                    </Button.Root>
                    {/* <Button.Root href="https://linktr.ee/drfabiocrescentini">
                      <Button.Text>Agendar uma consulta</Button.Text>
                      <Button.Icon icon={FaWhatsapp} size={25} />
                    </Button.Root> */}
                    <Contact specialty={selectedSpecialtyData} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=" pt-6 lg:pt-16 ">
          <DivSections />
          <div className=" lg:hidden  bg-line bg-center bg-no-repeat w-full h-1" />
        </div>
      </div>
    </section>
  )
}
