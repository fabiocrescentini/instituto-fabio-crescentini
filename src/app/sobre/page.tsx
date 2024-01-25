import { Button } from '@/components/common/button'
import { DivItem } from '@/components/common/div-item'
import { DivSections } from '@/components/common/div-sections'
import { ArrowRight } from '@/components/common/icons/arrow-right'
import { SectionInfo } from '@/components/sections/info'
import { FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'
import { api } from '@/data/api'
import { IAwards } from '@/data/types/awards'

async function getAwards(): Promise<IAwards[]> {
  const response = await api('/awards', {
    next: {
      revalidate: 60 * 60 * 2, // 2 hour
    },
  })
  const awards = await response.json()
  return awards
}

export default async function Sobre() {
  const awards = await getAwards()
  return (
    <main className="w-sreen min-h-screen">
      <section className="h-auto bg-bannerSobre bg-cover bg-no-repeat mt-32">
        <div className="flex justify-center py-32">
          <h1 className="font-merriweather text-2xl text-red-700 font-bold">
            Sobre
          </h1>
        </div>
        <DivSections />
      </section>
      <SectionInfo awards={awards} />
      <section className="h-auto bg-radial bg-cover bg-center bg-no-repeat">
        <div className="bg-logoTopSobre bg-no-repeat bg-left-top">
          <div className="bg-logoBottomSobre bg-no-repeat bg-right-bottom">
            <div className="flex flex-col items-center justify-center pt-20">
              <h2 className="font-merriweather text-1xl text-red-700 font-bold">
                Nossas Especialidades
              </h2>
              <p className="pt-5 font-source text-blue text-lg font-medium leading-heading">
                Somos especialistas em estudar, diagnosticar e tratar doenças do
                <span className="text-red-200">Sistema Digestivo</span>
              </p>
            </div>
            <div className="h-auto mt-14">
              <div className="container">
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
              </div>
            </div>
            <div className="container px-5 flex flex-col justify-center items-center">
              <div className="mt-16 w-[12.188rem]">
                <Button.Root href="#">
                  <Button.Text>Saiba mais</Button.Text>
                  <Button.Icon icon={ArrowRight} />
                </Button.Root>
              </div>
            </div>
            <div className="mt-14">
              <DivSections />
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto pt-16">
        <div className="container px-5 flex flex-col justify-center items-center">
          <h2 className="font-merriweather text-1xl text-red-700 font-bold">
            Formação Acadêmica
          </h2>
        </div>
        <div className="pt-10 container  flex">
          <div className="flex flex-col space-y-5">
            <DivItem />
            <div className="pl-2 w-[17.063rem]">
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
              <p className="font-source font-light text-sm text-blue w-[17.063rem]">
                Asan Medical Center, Coréia do Sul
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <DivItem />
            <div className="pl-2">
              <p className="font-merriweather font-bold text-sm text-red-200">
                Pós Graduação em Cirurgia Geral
              </p>
              <p className="font-source font-light text-sm text-blue  w-[17.063rem]">
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
              <p className="font-source font-light text-sm text-blue w-[17.063rem]">
                Chang Gung University, China
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <DivItem />
            <div className="pl-2">
              <p className="font-merriweather font-bold text-sm text-red-200">
                Pós Graduação - Cirurgia do Aparellho Digestivo
              </p>
              <p className="font-source font-light text-sm text-blue  w-[17.063rem]">
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
                Esepcialista em Gastroenterologia
              </p>
            </div>
            <DivItem />
            <div className="pl-2 ">
              <p className="font-merriweather font-bold text-sm text-red-200">
                Programa de Educação Médica Continuada
              </p>
              <p className="font-source font-light text-sm text-blue w-[17.063rem]">
                Instituto Israelista de Ensino e Pesquisa Albert Eisntein
                (IIEPAE), Brasil
              </p>
            </div>
          </div>
        </div>
        <div className="pt-20">
          <DivSections />
        </div>
      </section>
      <section className="h-auto py-16">
        <div className="container px-5 flex flex-col justify-center items-center">
          <h2 className="font-merriweather text-1xl text-red-700 font-bold">
            Sobre o Instituto Fábio Crescentini
          </h2>
          <div className="flex pt-24 gap-14">
            <Image
              src="/sobre/foto-instituto.png"
              alt="logo do instituto fabio crescentini"
              width={449}
              height={229}
              quality={100}
              about="imagem instituto fabio crescentini"
            />

            <div className="flex flex-col py-5 space-y-5">
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
              <div className="flex">
                <Button.Root href="#">
                  <Button.Text>Agendar uma consulta</Button.Text>
                  <Button.Icon icon={FaWhatsapp} size={25} />
                </Button.Root>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20">
          <DivSections />
        </div>
      </section>
      <section className="h-screen py-16">
        <div className="container px-5 flex flex-col justify-center items-center">
          <h2 className="font-merriweather text-1xl text-red-700 font-bold">
            Nossas Estruturas
          </h2>
        </div>
      </section>
    </main>
  )
}
