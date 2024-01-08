import { Button } from '@/components/common/button'
import { CardAwards } from '@/components/common/card-awards'
import { CardRecommendation } from '@/components/common/card-recommendation'
import { DivSections } from '@/components/common/div-sections'
import { ArrowRight } from '@/components/common/icons/arrow-right'
import { RoundIcon } from '@/components/common/round-icon'
import { Metadata } from 'next'
import Image from 'next/image'
import { FaInstagram, FaYoutube, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlinePhoneIphone, MdEmail } from 'react-icons/md'

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
            A busca pela excelência é o alicerce do nosso compromisso. Nos
            mantemos atualizados com as mais recentes inovações em nossa área,
            aplicando as melhores práticas clínicas para garantir um cuidado de
            qualidade.
          </p>

          <div className="mt-12 w-[18.75rem]">
            <Button.Root href="#">
              <Button.Text>Agendar uma consulta</Button.Text>
              <Button.Icon icon={FaWhatsapp} size={25} />
            </Button.Root>
          </div>
          <div className="w-full flex justify-center mt-24">
            <div className=" shadow-md rounded-[1.25rem] w-10/12 h-auto bg-white flex justify-around items-center py-6 px-5">
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
            Somos especialistas em estudar, diagnosticar e tratar doenças do
            <span className="text-red-200">Sistema Digestivo</span>
          </p>
        </div>
        <div className="h-full container mt-14">
          <div className="bg-radial bg-cover bg-center bg-no-repeat ">
            <div className=" flex items-start justify-around px-20">
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
                  <Button.Root href="#">
                    <Button.Text>Saiba mais</Button.Text>
                    <Button.Icon icon={ArrowRight} />
                  </Button.Root>
                  <Button.Root href="#">
                    <Button.Text>Agendar uma consulta</Button.Text>
                    <Button.Icon icon={FaWhatsapp} size={25} />
                  </Button.Root>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <DivSections />
        </div>
      </section>
      <section className="h-auto bg-gradient bg-no-repeat flex flex-col space-y-10">
        <div className="pt-[5.69rem] container px-5 grid grid-col-1 lg:grid-flow-col items-start gap-24">
          <div className="w-auto">
            <Image
              src="/home/fabio-crescentini.png"
              width={357}
              height={518}
              alt="imagem do Dr. Fábio Crescentini "
            />
          </div>
          <div className="flex w-full flex-col space-y-5">
            <div className="flex flex-col space-y-2">
              <h3 className="font-merriweather text-1xl text-red-700 font-bold">
                Dr. Fábio Crescentini
              </h3>
              <span className="font-merriweather font-bold text-md text-red-200">
                Cirurgião do aparelho digestivo, Gastroenterologista,
                Hepatologista
              </span>
              <span className='className="font-merriweather font-bold text-md text-red-200'>
                CRM: 102.070
              </span>
            </div>
            <div className="flex flex-col space-y-5">
              <p className="font-source font-light text-sm text-blue leading-heading">
                Possui graduação em Medicina - Santa Casa de Misericórdia de São
                Paulo (2000), pós-graduação em Cirurgia Geral pela FMUSP (2003)
                e pós-graduação em Cirurgia do Aparelho Digestivo pela FMUSP
                (2005). Como extensão profissional, realizou estágios de
                transplante de fígado intervivos e cirurgia hepática em Taiwan e
                Coréia do Sul, além de estágios de transplante de pâncreas nos
                Estados Unidos.
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
                fígado, pâncreas e ruim; cirurgia de doadores vivos e falecidos
                de fígados, pâncreas e ruim; assistência a pacientes
                transplantados.
              </p>
            </div>
            <div className="w-[12.188rem] pt-5">
              <Button.Root href="#">
                <Button.Text>Saiba mais</Button.Text>
                <Button.Icon icon={ArrowRight} />
              </Button.Root>
            </div>
          </div>
        </div>
        <div className="container px-5 flex flex-col items-center">
          <h3 className="font-merriweather text-1xl text-red-700 font-bold">
            Prêmios Médicos
          </h3>
          <div className="flex gap-12 py-7">
            <CardAwards
              title="Destaque em Doação de Órgãos"
              subTitle="1 º Lugar em Transplante de Pâncreas"
              description="Equipe Hepato - Coordenador Eq. Tx Hospital Beneficência Portuguesa"
              date="São Paulo, 2008"
            />
            <CardAwards
              title="Destaque em Doação de Órgãos"
              subTitle="2 º Lugar em Transplante de Pâncreas e Rim"
              description="Equipe Hepato - Coord. Eq. Tx Pâncreas e Rim
              Hospital Albert Einstein"
              date="São Paulo, 2008"
            />
            <CardAwards
              title="Destaque em Doação de Órgãos"
              subTitle="3 º Lugar em Transplante de Fígado"
              description="Equipe Hepato - Coordenador Eq. Tx
              Hospital Benedicência Portuguesa"
              date="São Paulo, 2008"
            />
          </div>
          <div className="flex gap-2 pt-8">
            <div className="p-1 bg-red-200 rounded-full" />
            <div className="p-1 bg-red-700 rounded-full" />
            <div className="p-1 bg-red-700 rounded-full" />
          </div>
        </div>
        <div className="pt-11">
          <DivSections />
        </div>
      </section>
      <section className="bg-radial2 bg-no-repeat ">
        <div className="container px-5 flex flex-col items-center pt-20 space-y-12">
          <h3 className="font-merriweather text-1xl text-red-700 font-bold">
            Nossos Pacientes recomendam
          </h3>
          <div className="flex gap-12">
            <CardRecommendation />
            <CardRecommendation />
            <CardRecommendation />
          </div>
          <div className="pt-3">
            <Button.Root href="#">
              <Button.Text>Agendar uma consulta</Button.Text>
              <Button.Icon icon={FaWhatsapp} size={25} />
            </Button.Root>
          </div>
          <div className="pt-6">
            <DivSections />
          </div>
        </div>
      </section>
      <section className="py-28 bg-banner2 bg-right-bottom bg-no-repeat">
        <div className="container px-5 flex flex-col items-center space-y-20">
          <h3 className="font-merriweather text-1xl text-red-700 font-bold">
            Contato Instituto Fábio Crescentini
          </h3>
          <div className="flex w-full  flex-row justify-between gap-24 items-start">
            <div className="flex flex-col space-y-5">
              <div className="flex  items-center gap-2 font-merriweather font-bold text-red-700 text-xl border-b-[1px] border-gray-200">
                <FaLocationDot size={30} />
                <h4>Unidade - São Paulo</h4>
              </div>
              <div className="font-medium font-source leading-heading text-blue text-lg">
                <ul className="space-y-2">
                  <li>Av. Brigadeiro Faria Lima, 3900</li>
                  <li>7º andar, Itaim Bibi - São Paulo/SP</li>
                  <li>CEP 04538-132</li>
                </ul>
              </div>
              <div className="pt-2">
                <div className="flex gap-2 font-bold font-merriweather text-lg text-red-200 items-center">
                  <MdOutlinePhoneIphone size={22} />
                  <h5>Telefone</h5>
                </div>
                <div className="font-medium font-source leading-heading text-blue text-lg pt-6">
                  <ul>
                    <li>(11) 91959-8000</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <div className="flex  items-center gap-2 font-merriweather font-bold text-red-700 text-xl border-b-[1px] border-gray-200">
                <FaLocationDot size={30} />
                <h4>Unidade - Santos</h4>
              </div>
              <div className="font-medium font-source leading-heading text-blue text-lg">
                <ul className="space-y-2">
                  <li>Av. Conselheiro Nébias, 754</li>
                  <li>Conj. 2401, Boqueirão - Santos/SP</li>
                  <li>CEP 11045-002</li>
                </ul>
              </div>
              <div className="pt-2">
                <div className="flex gap-2 font-bold font-merriweather text-lg text-red-200 items-center">
                  <MdOutlinePhoneIphone size={22} />
                  <h5>Telefone</h5>
                </div>
                <div className="font-medium font-source leading-heading text-blue text-lg pt-6">
                  <ul>
                    <li className="flex items-center gap-2">
                      <span>(13) 3041-5988</span>
                      <div className="bg-red-700 h-[1px] w-[1px] rounded-full p-1" />
                      <span>(13) 3041-5987</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-5">
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
