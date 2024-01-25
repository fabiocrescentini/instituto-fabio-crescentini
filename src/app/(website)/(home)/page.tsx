import { Button } from '@/components/common/button'

import { CardRecommendation } from '@/components/common/card-recommendation'
import { DivSections } from '@/components/common/div-sections'

import { RoundIcon } from '@/components/common/round-icon'
import { SectionEspecialidades } from '@/components/sections/especialidades'
import { SectionInfo } from '@/components/sections/info'
import { SectionRecomendation } from '@/components/sections/recomendation'

import { awards } from '@/data/awards'
import { recommendations } from '@/data/recommendations'

import { Metadata } from 'next'
import Image from 'next/image'

import { FaInstagram, FaYoutube, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlinePhoneIphone, MdEmail } from 'react-icons/md'

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const awardsArray = await awards
  const recommendationsArray = await recommendations
  return (
    <main className="w-full min-h-screen py-0 ">
      <section className="mt-5 lg:mt-24 h-auto lg:bg-banner bg-cover bg-no-repeat ">
        <div className="lg:container lg:px-5 pt-32 text-center lg:text-left">
          <div className="px-5 lg:px-0">
            <h1 className="font-merriweather text-xl lg:text-1xl text-red-700 font-bold">
              Instituto Fábio Crescentini
            </h1>
            <p className="lg:max-w-[630px] mt-5 font-source text-blue text-lg font-medium leading-heading">
              A busca pela excelência é o alicerce do nosso compromisso. Nos
              mantemos atualizados com as mais recentes inovações em nossa área,
              aplicando as melhores práticas clínicas para garantir um cuidado
              de qualidade.
            </p>

            <div className="pt-12 hidden lg:flex">
              <Button.Root href="#">
                <Button.Text>Agendar uma consulta</Button.Text>
                <Button.Icon icon={FaWhatsapp} size={25} />
              </Button.Root>
            </div>
          </div>

          <div className="flex justify-center pt-6">
            <Image
              src="/home/image-dr-fabio.png"
              alt="imagem do Dr. Fabio"
              quality={100}
              priority
              width={360}
              height={500}
              className=" lg:hidden rounded-md shadow-md"
            />
          </div>
          <div className="pt-0 lg:pt-16 continer px-5 flex justify-center -mt-20 lg:-mt-0">
            <div className="bg-white w-full lg:w-10/12  rounded-[1.25rem] h-auto flex flex-col  lg:flex-row justify-around items-center py-5 shadow-md gap-4">
              <div className="flex justify-around items-center w-full h-full">
                <div className="flex flex-col items-center ">
                  <h4 className="text-red-200 font-inter text-xl lg:text-[2.5rem] font-medium">
                    4
                  </h4>
                  <p className="text-blue font-inter font-bold text-[0.75rem] lg:text-sm">
                    Especializações
                  </p>
                </div>

                <div className="w-1 h-full">
                  <div className="hidden lg:flex w-[0.125rem] h-full bg-gray-200 " />
                </div>

                <div className="flex flex-col items-center">
                  <h4 className="text-red-200 font-inter text-xl lg:text-[2.5rem]  font-medium">
                    20
                  </h4>
                  <p className="text-blue font-inter font-bold text-[0.75rem] lg:text-sm">
                    Anos de Experiência
                  </p>
                </div>
              </div>
              <div className="fle flex-col w-full  lg:w-auto h-full">
                <div className="w-1 h-full">
                  <div className="hidden lg:flex w-[0.125rem] h-full bg-gray-200 " />
                </div>
                <div className=" lg:hidden bg-line bg-center bg-no-repeat w-full h-1"></div>
              </div>
              <div className="flex justify-around items-center w-full h-full">
                <div className="flex flex-col items-center">
                  <h4 className="text-red-200 font-inter text-xl lg:text-[2.5rem] font-medium">
                    +2000
                  </h4>
                  <p className="text-blue font-inter font-bold text-[0.75rem] lg:text-sm">
                    Pacientes atendidos
                  </p>
                </div>
                <div className="w-1 h-full">
                  <div className="hidden lg:flex w-[0.125rem] h-full bg-gray-200 " />
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="text-red-200 font-inter text-xl lg:text-[2.5rem]  font-medium">
                    +2000
                  </h4>
                  <p className="text-blue font-inter font-bold text-[0.75rem] lg:text-sm">
                    Cirurgias realizadas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:pt-24 ">
          <DivSections />
        </div>
      </section>

      <SectionEspecialidades
        urlImg="/home/section-2.png"
        altImg="image de um figado"
        title="Hepatologia - Doenças do Fígado"
        description="A Hepatologia no Instituto Dr. Fábio Crescentini representa
                    uma área de especialização dedicada ao estudo, diagnóstico e
                    tratamento de doenças relacionadas ao fígado. Sob a
                    liderança do renomado Dr. Fábio Crescentini, nosso instituto
                    se destaca na abordagem abrangente e avançada para as
                    condições hepáticas, visando oferecer aos pacientes cuidados
                    de qualidade e soluções eficazes."
      />

      <SectionInfo awards={awardsArray} />

      <SectionRecomendation recommendations={recommendationsArray} />
      <section className="py-10 lg:py-28 bg-banner2 bg-right-bottom bg-no-repeat ">
        <div className="container px-5 flex flex-col items-center space-y-20">
          <h3 className="font-merriweather text-center lg:text-left text-xl lg:text-1xl text-red-700 font-bold">
            Contato Instituto Fábio Crescentini
          </h3>
          <div className="flex w-full flex-col  lg:flex-row lg:flex-wrap justify-between gap-10 lg:gap-24 items-center lg:items-start">
            <div className="flex flex-col space-y-5 w-full lg:w-auto">
              <div className="flex justify-center lg:justify-start  items-center gap-2 font-merriweather font-bold text-red-700 text-lg lg:text-xl border-b-[1px] border-gray-200 w-full lg:w-auto">
                <FaLocationDot size={20} className="h-5 lg:h-10" />
                <h4>Unidade - São Paulo</h4>
              </div>
              <div className="font-medium font-source leading-heading text-blue text-sm lg:text-lg text-center lg:text-left">
                <ul className="space-y-2">
                  <li>Av. Brigadeiro Faria Lima, 3900</li>
                  <li>7º andar, Itaim Bibi - São Paulo/SP</li>
                  <li>CEP 04538-132</li>
                </ul>
              </div>
              <div className="pt-2">
                <div className="flex gap-2 font-bold font-merriweather text-lg text-red-200 justify-center lg:justify-start items-center">
                  <MdOutlinePhoneIphone size={22} />
                  <h5>Telefone</h5>
                </div>
                <div className="font-medium font-source leading-heading text-blue text-sm lg:text-lg pt-6 text-center lg:text-left">
                  <ul>
                    <li>(11) 91959-8000</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-5 w-full lg:w-auto">
              <div className="flex justify-center lg:justify-start items-center gap-2 font-merriweather font-bold text-red-700 text-lg lg:text-xl w-full lg:w-auto border-b-[1px] border-gray-200">
                <FaLocationDot size={20} className="h-5 lg:h-10" />
                <h4>Unidade - Santos</h4>
              </div>
              <div className="font-medium font-source leading-heading text-blue text-sm lg:text-lg text-center lg:text-left">
                <ul className="space-y-2">
                  <li>Av. Conselheiro Nébias, 754</li>
                  <li>Conj. 2401, Boqueirão - Santos/SP</li>
                  <li>CEP 11045-002</li>
                </ul>
              </div>
              <div className="pt-2">
                <div className="flex gap-2 font-bold text-center lg:text-left font-merriweather text-lg text-red-200 items-center justify-center lg:justify-start">
                  <MdOutlinePhoneIphone size={22} />
                  <h5>Telefone</h5>
                </div>

                <div className="font-medium font-source leading-heading text-sm text-blue lg:text-lg pt-6">
                  <ul>
                    <li className="flex justify-center lg:justify-start items-center gap-2">
                      <span>(13) 3041-5988</span>
                      <div className="bg-red-700 h-[1px] w-[1px] rounded-full p-1" />
                      <span>(13) 3041-5987</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" hidden lg:flex flex-col space-y-5">
              <div className="flex  items-center gap-2 font-merriweather font-bold text-red-700 text-xl border-b-[1px] border-gray-200">
                <MdEmail size={30} />
                <h4>Email</h4>
              </div>
              <div className="font-medium font-source leading-heading text-blue text-lg">
                <ul className="space-y-2">
                  <li>contato@institutofabiocrescentini.com.br</li>
                </ul>
              </div>
              <div className="pt-16">
                <div className="flex flex-col items-center text-center">
                  <h5 className="font-merriweather font-bold text-red-700 text-lg">
                    Acompanhe nossas Redes Sociais
                  </h5>
                  <div className="flex gap-1 pt-5">
                    <RoundIcon
                      variant="red"
                      icon={FaInstagram}
                      href="https://g1.globo.com/"
                    />
                    <RoundIcon
                      variant="red"
                      icon={FaYoutube}
                      href="https://g1.globo.com/"
                    />
                    <RoundIcon
                      variant="red"
                      icon={FaFacebookF}
                      href="https://g1.globo.com/"
                    />
                    <RoundIcon
                      variant="red"
                      icon={FaWhatsapp}
                      href="https://g1.globo.com/"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
