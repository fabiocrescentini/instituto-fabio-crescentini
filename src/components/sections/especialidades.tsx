'use client'
import Image from 'next/image'
import { Button } from '../common/button'
import { ArrowRight } from '../common/icons/arrow-right'
import { FaWhatsapp } from 'react-icons/fa'
import { DivSections } from '../common/div-sections'

interface SectionEspecialidadesProps {
  title: string
  description: string
  urlImg: string
  altImg: string
  urlLink: string
}

export function SectionEspecialidades({
  title,
  description,
  urlImg,
  altImg,
  urlLink,
}: SectionEspecialidadesProps) {
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
        <div className="container mt-14">
          <div className=" flex flex-wrap items-start justify-around  lg:px-20">
            <div className="flex flex-col items-center h-auto w-44 ">
              <Image
                src="/sistema-digestivo/figado.svg"
                alt="imagem de um figado"
                width={130}
                height={130}
                className="w-[80px] h-[80px] lg:w-auto lg:h-auto"
              />
              <span className="text-red-200 font-merriweather font-bold text-sm text-center">
                Hepatologia
              </span>
            </div>
            <div className="flex flex-col items-center h-auto w-44">
              <Image
                src="/sistema-digestivo/pancreas.svg"
                alt="imagem de um figado"
                width={130}
                height={130}
                className="w-[80px] h-[80px] lg:w-auto lg:h-auto"
              />
              <span className="text-red-200 font-merriweather font-bold text-sm text-center">
                Doenças do Pâncreas e via biliar
              </span>
            </div>
            <div className="flex flex-col items-center h-auto w-44">
              <Image
                src="/sistema-digestivo/aparelho-digestivo.svg"
                alt="imagem de um figado"
                width={130}
                height={130}
                className="w-[80px] h-[80px] lg:w-auto lg:h-auto"
              />
              <span className="text-red-200 font-merriweather font-bold text-sm text-center">
                Cirurgia do Aparelho Digestivo
              </span>
            </div>
            <div className="flex flex-col items-center h-auto w-44">
              <Image
                src="/sistema-digestivo/estomago.svg"
                alt="imagem de um figado"
                width={130}
                height={130}
                className="w-[80px] h-[80px] lg:w-auto lg:h-auto"
              />
              <span className="text-red-200 font-merriweather font-bold text-sm text-center">
                Gastroenterologia
              </span>
            </div>
          </div>
          <div className="px-5">
            <div className="rounded-[0.625rem] mt-14 shadow-card bg-white  h-auto w-full flex flex-col lg:flex-row">
              <Image
                src={urlImg}
                alt={altImg}
                width={508}
                height={416}
                quality={80}
                className="w-full h-full lg:w-[508px] lg:h-auto"
              />
              <div className="flex-1 py-4 lg:pt-[3.75rem] px-4  lg:pb-5 lg:pl-[3.75rem]">
                <h4 className="text-red-700 font-merriweather text-center lg:text-left font-bold text-xl">
                  {title}
                </h4>
                <p className="text-blue font-source font-light text-sm leading-heading lg:pr-[3.75rem] mt-3 text-center lg:text-left">
                  {description}
                </p>
                <div className="flex mt-8 lg:mr-12 flex-wrap gap-2 justify-between ">
                  <Button.Root href={urlLink}>
                    <Button.Text>Saiba mais</Button.Text>
                    <Button.Icon icon={ArrowRight} />
                  </Button.Root>
                  <Button.Root href="https://linktr.ee/drfabiocrescentini">
                    <Button.Text>Agendar uma consulta</Button.Text>
                    <Button.Icon icon={FaWhatsapp} size={25} />
                  </Button.Root>
                </div>
              </div>
            </div>
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
