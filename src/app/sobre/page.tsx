import { Button } from '@/components/common/button'
import { DivItem } from '@/components/common/div-item'
import { DivSections } from '@/components/common/div-sections'
import { ArrowRight } from '@/components/common/icons/arrow-right'
import { SectionInfo } from '@/components/sections/info'
import { FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'

import { awards } from '@/data/awards'
import { SectionUnits } from '@/components/sections/units'
import { units } from '@/data/units'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre',
}

export default function Sobre() {
  const awardsArray = awards
  const unitsArray = units
  return (
    <main className="w-sreen min-h-screen">
      <section className="h-auto bg-bannerSobre bg-cover mt-20 bg-no-repeat lg:mt-32">
        <div className="flex justify-center py-20 lg:py-32">
          <h1 className="font-merriweather text-2xl text-red-700 font-bold">
            Sobre
          </h1>
        </div>
        <div>
          <DivSections />
          <div className=" lg:hidden  bg-line bg-center bg-no-repeat w-full h-1" />
        </div>
      </section>
      <SectionInfo awards={awardsArray} />
      <section className="h-auto bg-radial bg-cover bg-center bg-no-repeat">
        <div className="bg-logoTopSobre bg-no-repeat bg-left-top">
          <div className="bg-logoBottomSobre bg-no-repeat bg-right-bottom">
            <div className="flex flex-col items-center justify-center pt-20">
              <h2 className="font-merriweather text-xl lg:text-1xl text-red-700 font-bold text-center">
                Nossas Especialidades
              </h2>

              <p className="pt-5 font-source text-blue text-lg font-medium leading-heading text-center lg:text-left">
                Somos especialistas em estudar, diagnosticar e tratar doenças do{' '}
                <span className="text-red-200">Sistema Digestivo</span>
              </p>
            </div>
            <div className="h-auto mt-14 flex justify-center">
              <div className=" flex flex-wrap items-start justify-around lg:px-8 gap-x-10 gap-y-10 lg:gap-y-0 ">
                <Link
                  href="/especialidades/hepatologia"
                  className="group cursor-pointer"
                >
                  <div className="flex flex-col items-center h-auto w-44  ">
                    <Image
                      src="/sistema-digestivo/image-1.png"
                      alt="imagem de um figado"
                      width={130}
                      height={130}
                      className="w-[80px] h-[80px] lg:w-auto lg:h-auto"
                    />
                    <span className="text-red-700 font-merriweather font-bold text-sm text-center group-hover:text-red-200 ">
                      Hepatologia
                    </span>
                  </div>
                </Link>
                <Link
                  href="/especialidades/doencas-do-pancreas"
                  className="group cursor-pointer"
                >
                  <div className="flex flex-col items-center h-auto w-44">
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
                </Link>
                <Link
                  href="/especialidades/cirurgia-aparelho-digestivo"
                  className="group cursor-pointer"
                >
                  <div className="flex flex-col items-center h-auto w-44">
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
                </Link>
                <Link
                  href={`/especialidades/oncologia-cirurgica`}
                  className="group cursor-pointer"
                >
                  <div className="flex flex-col items-center h-auto w-44">
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
                </Link>
              </div>
            </div>
            <div className="container px-5 flex flex-col justify-center items-center">
              <div className="mt-16 w-[12.188rem]">
                <Button.Root href="/especialidades/hepatologia">
                  <Button.Text>Saiba mais</Button.Text>
                  <Button.Icon icon={ArrowRight} />
                </Button.Root>
              </div>
            </div>
            <div className="mt-14">
              <DivSections />
              <div className=" lg:hidden  bg-line bg-center bg-no-repeat w-full h-1" />
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto pt-16">
        <div className="container px-5 flex flex-col justify-center items-center">
          <h2 className="font-merriweather text-xl lg:text-1xl text-red-700 font-bold text-center">
            Formação Acadêmica
          </h2>
        </div>
        <div className="pt-10 container flex flex-col lg:flex-row text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start space-y-5 ">
            <DivItem />
            <div className="pl-2 lg:w-[17.063rem]">
              <p className="font-merriweather font-bold text-sm text-red-200">
                Graduação em Medicina
              </p>
              <p className="font-source font-light text-sm text-blue">
                Santa Casa de Misericórdia de São Paulo, Brasil
              </p>
            </div>
            <DivItem />
            <div className="pl-2 ">
              <p className="font-merriweather font-bold text-sm text-red-200">
                Especialização em Cirurgia do Aparelho Digestivo
              </p>
              <p className="font-source font-light text-sm text-blue">
                Colégio Brasileiro de Cirurgia Digestiva, Brasil Título: Membro
                titular do CBCD
              </p>
            </div>
            <DivItem />
            <div className="pl-2 ">
              <p className="font-merriweather font-bold text-sm text-red-200">
                Transplante de Fígado Intervivos
              </p>
              <p className="font-source font-light text-sm text-blue lg:w-[17.063rem]">
                Asan Medical Center, Coréia do Sul
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-5 items-center lg:items-start">
            <DivItem />
            <div className="pl-2">
              <p className="font-merriweather font-bold text-sm text-red-200">
                Pós Graduação em Cirurgia Geral
              </p>
              <p className="font-source font-light text-sm text-blue  lg:w-[17.063rem]">
                Faculdade de Medicina de São Paulo (FMUSP), Brasil
              </p>
            </div>
            <DivItem />
            <div className="pl-2 ">
              <p className="font-merriweather font-bold text-sm text-red-200">
                Especialização em Hepatologia
              </p>
              <p className="font-source font-light text-sm text-blue">
                Sociedade Brasileira de Hepatologia, Brasil Título: Especialista
                em Hepatologia
              </p>
            </div>
            <DivItem />
            <div className="pl-2 ">
              <p className="font-merriweather font-bold text-sm text-red-200">
                Transplante Hepático Intervivos
              </p>
              <p className="font-source font-light text-sm text-blue lg:w-[17.063rem]">
                Chang Gung University, China
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-5 items-center lg:items-start">
            <DivItem />
            <div className="pl-2">
              <p className="font-merriweather font-bold text-sm text-red-200">
                Pós Graduação - Cirurgia do Aparellho Digestivo
              </p>
              <p className="font-source font-light text-sm text-blue  lg:w-[17.063rem]">
                Faculdade de Medicina de São Paulo (FMUSP), Brasil
              </p>
            </div>
            <DivItem />
            <div className="pl-2 ">
              <p className="font-merriweather font-bold text-sm text-red-200">
                Especialização em Gastroenterologia
              </p>
              <p className="font-source font-light text-sm">
                Federação Brasileira de Gastroenterologia, Brasil Título:
                Especialista em Gastroenterologia
              </p>
            </div>
            <DivItem />
            <div className="pl-2 ">
              <p className="font-merriweather font-bold text-sm text-red-200">
                Programa de Educação Médica Continuada
              </p>
              <p className="font-source font-light text-sm text-blue lg:w-[17.063rem]">
                Instituto Israelista de Ensino e Pesquisa Albert Eisntein
                (IIEPAE), Brasil
              </p>
            </div>
          </div>
        </div>
        <div className="pt-20">
          <DivSections />
          <div className=" lg:hidden  bg-line bg-center bg-no-repeat w-full h-1" />
        </div>
      </section>
      <section className="h-auto py-16">
        <div className="container px-5 flex flex-col justify-center items-center">
          <h2 className="font-merriweather text-xl lg:text-1xl text-red-700 font-bold text-center">
            Sobre o Instituto Fábio Crescentini
          </h2>
          <div className="flex flex-col lg:flex-row pt-10 lg:pt-24 gap-10 lg:gap-14 items-center lg:items-start">
            <Image
              src="/sobre/foto-instituto.png"
              alt="logo do instituto fabio crescentini"
              width={449}
              height={229}
              quality={100}
              about="imagem instituto fabio crescentini"
            />

            <div className="flex flex-col lg:py-5 space-y-5 text-center lg:text-left">
              <p className="font-source font-light text-blue text-sm leading-heading">
                Bem-vindo ao Instituto Dr. Fábio Crescentini, referência em
                excelência na área de saúde do fígado, pâncreas e oncologia
                cirúrgica digestiva. Sob a liderança do renomado Dr. Fábio
                Crescentini, nosso instituto é dedicado a proporcionar cuidados
                médicos de vanguarda, focados na prevenção, diagnóstico e
                tratamento das condições mais complexas desses órgãos vitais.
              </p>
              <p className="font-source font-light text-blue text-sm leading-heading">
                Nossa equipe altamente especializada e comprometida está aqui
                para oferecer soluções personalizadas, utilizando as mais
                recentes inovações em cirurgia e tratamentos avançados. No
                Instituto Dr. Fábio Crescentini, acreditamos na abordagem
                humanizada, centrada no paciente, proporcionando conforto e
                confiança durante toda a jornada de cuidados de saúde.
              </p>
              <div className="flex lg:justify-start justify-center pt-5 lg:pt-0">
                <Button.Root href="https://linktr.ee/drfabiocrescentini">
                  <Button.Text>Agendar uma consulta</Button.Text>
                  <Button.Icon icon={FaWhatsapp} size={25} />
                </Button.Root>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16 lg:pt-20">
          <DivSections />
          <div className=" lg:hidden  bg-line bg-center bg-no-repeat w-full h-1" />
        </div>
      </section>

      <SectionUnits units={unitsArray} />
    </main>
  )
}
