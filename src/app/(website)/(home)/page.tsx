import { DivSections } from '@/components/common/div-sections'
import { ArrowRight } from '@/components/common/icons/arrow-right'
import { Metadata } from 'next'
import Image from 'next/image'
import { FaInstagram, FaYoutube, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <main className="w-full min-h-screen py-0">
      <section className="mt-24 h-auto bg-banner bg-cover bg-no-repeat">
        <div className="container px-5 pt-32">
          <h1 className="font-merriweather text-1xl text-red-700 font-bold">
            Instituto Fábio Crescentini
          </h1>
          <p className="max-w-[630px] mt-5 font-source text-blue text-lg font-medium leading-heading">
            A excelência é um valor fundamental para nós. Buscamos
            constantemente atualizar nosso conhecimento sobre os avanços mais
            recentes em nossa área de atuação e estamos sempre prontos para
            aplicar as melhores práticas clínicas.
          </p>
          <p className="max-w-[650px] font-source text-blue text-lg font-medium">
            Nosso compromisso com a excelência se estende além do consultório.
          </p>
          <div className=" mt-12 bg-red-700 flex items-center justify-center w-[294px] rounded-full px-[1.875rem] py-[0.75rem] gap-2">
            <span className="font-merriweather font-bold text-yellow-100 text-md">
              Agendar uma consulta
            </span>
            <FaWhatsapp size={25} className="text-yellow-100" />
          </div>
          <div className="w-full flex justify-center mt-24">
            <div className=" shadow-md rounded-[1.25rem] w-11/12 h-auto bg-white flex justify-around items-center py-6 px-5">
              <div className="flex flex-col items-center ">
                <h4 className="text-red-200 font-inter text-[2.5rem] font-medium">
                  4
                </h4>
                <p className="text-blue font-inter font-bold text-sm">
                  Especializações
                </p>
              </div>
              <div className=" w-[0.125rem] h-full bg-gray-200" />
              <div className="flex flex-col items-center">
                <h4 className="text-red-200 font-inter text-[2.5rem] font-medium">
                  20
                </h4>
                <p className="text-blue font-inter font-bold text-sm">
                  Anos de Experiência
                </p>
              </div>
              <div className=" w-[0.125rem] h-full bg-gray-200" />
              <div className="flex flex-col items-center">
                <h4 className="text-red-200 font-inter text-[2.5rem] font-medium">
                  +2000
                </h4>
                <p className="text-blue font-inter font-bold text-sm">
                  Pacientes atendidos
                </p>
              </div>
              <div className=" w-[0.125rem] h-full bg-gray-200" />
              <div className="flex flex-col items-center">
                <h4 className="text-red-200 font-inter text-[2.5rem] font-medium">
                  +2000
                </h4>
                <p className="text-blue font-inter font-bold text-sm">
                  Cirurgias realizadas
                </p>
              </div>
            </div>
          </div>
          <div className="pt-16">
            <DivSections />
          </div>
        </div>
      </section>
      <section className="h-auto pt-12 ">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-merriweather text-1xl text-red-700 font-bold">
            Nossas Especialidades
          </h2>
          <p className="pt-5 font-source text-blue text-lg font-medium leading-heading">
            Somos especialistas em estudar, diagnosticar e tratar doenças do{' '}
            <span className="text-red-200">Sistema Digestivo</span>
          </p>
        </div>
        <div className="h-full container mt-14">
          <div className="bg-radial bg-cover bg-center bg-no-repeat ">
            <div className=" flex items-start justify-around">
              <div className="flex flex-col items-center h-auto w-44">
                <Image
                  src="/sistema-digestivo/figado.svg"
                  alt="imagem de um figado"
                  width={130}
                  height={130}
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
                />
                <span className="text-red-200 font-merriweather font-bold text-sm text-center">
                  Gastroenterologia
                </span>
              </div>
            </div>
            <div className="rounded-[0.625rem] mt-14 shadow-card bg-white  h-auto w-full flex">
              <Image
                src="/home/section-2.png"
                alt="imagem de um figado"
                width={508}
                height={416}
                quality={80}
              />
              <div className="flex-1 pt-[3.75rem] pb-5 pl-[3.75rem]">
                <h4 className="text-red-700 font-merriweather font-bold text-xl">
                  Hepatologia - Doenças do Fígado{' '}
                </h4>
                <p className="text-blue font-source font-light text-sm leading-heading pr-[3.75rem] mt-3 text-left">
                  A Hepatologia no Instituto Dr. Fábio Crescentini representa
                  uma área de especialização dedicada ao estudo, diagnóstico e
                  tratamento de doenças relacionadas ao fígado. Sob a liderança
                  do renomado Dr. Fábio Crescentini, nosso instituto se destaca
                  na abordagem abrangente e avançada para as condições
                  hepáticas, visando oferecer aos pacientes cuidados de
                  qualidade e soluções eficazes.
                </p>
                <div className="flex mt-8 mr-12 flex-wrap gap-2 ">
                  <div className=" bg-red-700 flex items-center justify-center max-h-12 rounded-full px-[1.875rem] py-[0.75rem] gap-2">
                    <span className="font-merriweather font-bold text-yellow-100 text-md">
                      Saiba mais
                    </span>
                    <ArrowRight />
                  </div>
                  <div className=" bg-red-700 flex items-center justify-center max-h-12 rounded-full px-[1.875rem] py-[0.75rem] gap-2">
                    <span className="font-merriweather font-bold text-yellow-100 text-md">
                      Agendar uma consulta
                    </span>
                    <FaWhatsapp size={25} className="text-yellow-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <DivSections />
        </div>
      </section>
      <section className="h-screen"></section>
    </main>
  )
}
