import { Video } from '@/components/common/Video'

import { DivSections } from '@/components/common/div-sections'

import { FaYoutube, FaWhatsapp } from 'react-icons/fa'

import { Button } from '@/components/common/button'
import Image from 'next/image'

import { Acordeon } from '@/components/common/acordeon'
import { SectionEspecialidades } from '@/components/sections/especialidades'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cirurgia do Aparelho Digestivo',
}

export default function Hepatologia() {
  return (
    <main className="w-screen min-h-screen">
      <section className="h-auto bg-bannerEspecialidades bg-cover bg-no-repeat mt-24 lg:mt-32">
        <div className="flex flex-col justify-center  items-center py-32">
          <h1 className="font-merriweather text-xl lg:text-2xl text-red-700 font-bold text-center lg:w-3/6">
            Gastroenterologia
          </h1>
          <p className="font-source font-medium text-lg text-blue">
            NOSSAS ESPECIALIDADES
          </p>
        </div>
        <div>
          <DivSections />
          <div className=" lg:hidden  bg-line bg-center bg-no-repeat w-full h-1" />
        </div>
      </section>
      <section className="h-auto bg-gradientEspecialidades bg-center bg-cover bg-no-repeat">
        <div className="container px-5 py-20 grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          <div className=" w-full lg:w-[50%]">
            <Video videoId="JwlhvApRQ9c" />
          </div>
          <div className="w-[auto] flex-col space-y-8 text-center lg:text-left">
            <h2 className="font-merriweather text-[2rem] text-red-700 font-bold pt-6">
              Gastroenterologia
            </h2>

            <p className="font-source leading-heading font-light text-sm text-blue">
              No Instituto Dr. Fábio Crescentini, a excelência na Cirurgia do
              Aparelho Digestivo é uma missão que redefine padrões de cuidado.
              Sob a liderança visionária do Dr. Fábio Crescentini, nosso
              instituto é reconhecido por oferecer soluções cirúrgicas avançadas
              e personalizadas para uma variedade de condições
              gastrointestinais.
            </p>
            <div className="flex pt-3 justify-center lg:justify-start">
              <Button.Root href="https://www.youtube.com/@fabiocrescentini1686">
                <Button.Text>Acesse nosso Canal</Button.Text>
                <Button.Icon icon={FaYoutube} />
              </Button.Root>
            </div>
          </div>
        </div>
        <div>
          <DivSections />
          <div className=" lg:hidden  bg-line bg-center bg-no-repeat w-full h-1" />
        </div>
      </section>
      <section>
        <div className="container  flex flex-col items-center px-5  py-16 ">
          <h2 className="font-merriweather text-xl lg:text-1xl text-red-700 font-bold text-center">
            Principais Patologias
          </h2>
          <div className="flex flex-col lg:flex-row pt-14 w-full gap-5 justify-center items-center lg:items-start ">
            <Image
              src="/especialidades/especialidade-4.png"
              alt="imagem de um figado"
              quality={100}
              width={400}
              height={400}
            />
            <div className="pt-2 w-full">
              <Acordeon.Root>
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Doença do Refluxo Gastroesofágico (DRGE)"
                  description="A DRGE ocorre quando o conteúdo ácido do estômago retorna ao esôfago, causando sintomas como azia, regurgitação ácida, tosse crônica e, em casos graves, danos ao esôfago. Pode levar a complicações como esofagite e estreitamento esofágico."
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Síndrome do Intestino Irritável (SII)"
                  description="A SII é um distúrbio funcional do intestino caracterizado por dor abdominal, alterações nos padrões de evacuação, como constipação ou diarreia, e desconforto abdominal. Apesar de não causar danos permanentes, a SII pode afetar significativamente a qualidade de vida."
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Doença Inflamatória Intestinal (DII)"
                  description="Inclui condições como a doença de Crohn e a colite ulcerativa, nas quais o sistema imunológico ataca o trato gastrointestinal, resultando em inflamação crônica. Os sintomas incluem dor abdominal, diarréia, sangramento retal e perda de peso."
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Câncer Colorretal"
                  description="O câncer colorretal é um tipo de câncer que afeta o cólon ou o reto. Pode se desenvolver a partir de pólipos pré-cancerígenos. Os sintomas incluem mudanças nos hábitos intestinais, sangramento retal, dor abdominal e perda de peso. O diagnóstico precoce é crucial para o tratamento eficaz."
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Pancreatite Aguda e Crônica"
                  description="A pancreatite é a inflamação do pâncreas. A forma aguda pode ser causada por cálculos biliares, alcoolismo ou infecções. A pancreatite crônica é uma condição progressiva que resulta em danos permanentes ao pâncreas, afetando a digestão e o controle do açúcar no sangue."
                />
                <div className="h-[1px] w-full bg-pink-100" />
              </Acordeon.Root>
            </div>
          </div>
        </div>
        <div>
          <DivSections />
          <div className=" lg:hidden  bg-line bg-center bg-no-repeat w-full h-1" />
        </div>
      </section>
      <section className="h-auto bg-bannerSectionEspecialidades bg-no-repeat bg-right">
        <div className="container px-5 pt-16 pb-16">
          <h2 className="font-merriweather text-xl lg:text-1xl text-red-700 font-bold text-center">
            Dúvidas Frequentes
          </h2>
          <div className="py-10 flex flex-col space-y-10 text-center lg:text-left">
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                Quais são os sintomas de uma doença do refluxo gastroesofágico
                (DRGE) e como é tratada?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                Os sintomas da DRGE incluem azia, regurgitação ácida, dor no
                peito e tosse crônica. O tratamento pode envolver mudanças no
                estilo de vida, como ajustes na dieta e elevação da cabeceira da
                cama. Medicamentos antiácidos e inibidores de bomba de prótons
                também são comumente prescritos para controlar a produção de
                ácido estomacal.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                Qual é a diferença entre doença de Crohn e colite ulcerativa?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                A doença de Crohn e a colite ulcerativa são ambas doenças
                inflamatórias intestinais (DII), mas têm diferenças
                significativas. A doença de Crohn pode afetar qualquer parte do
                trato digestivo, desde a boca até o ânus, com áreas de
                inflamação intercaladas com áreas saudáveis. Já a colite
                ulcerativa afeta apenas o cólon e o reto, causando inflamação
                contínua e úlceras superficiais na mucosa. Os sintomas e
                tratamentos podem variar, razão pela qual um diagnóstico preciso
                é essencial.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                Quando devo fazer uma colonoscopia e como me preparar para o
                exame?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                A colonoscopia é geralmente recomendada para rastreamento de
                câncer colorretal, especialmente em indivíduos com mais de 50
                anos. Pode ser indicada mais cedo para pessoas com histórico
                familiar de câncer colorretal ou em casos de sintomas
                gastrointestinais específicos. A preparação para o exame envolve
                seguir uma dieta especial e tomar laxantes para limpar o cólon,
                permitindo uma visualização clara durante o procedimento.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                Mais perguntas...
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo con. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatu lorem ipsum
                dolor sit amet.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center pt-4 lg:pt-16">
            <div className="flex pt-3 justify-center lg:justify-start">
              <Button.Root href="https://linktr.ee/drfabiocrescentini">
                <Button.Text>Agendar uma consulta</Button.Text>
                <Button.Icon icon={FaWhatsapp} />
              </Button.Root>
            </div>
          </div>
        </div>
        <div>
          <DivSections />
          <div className=" lg:hidden  bg-line bg-center bg-no-repeat w-full h-1" />
        </div>
      </section>
      <SectionEspecialidades
        urlImg="/especialidades/figado.png"
        urlLink="/especialidades/hepatologia"
        altImg="image de um figado"
        title="Hepatologia - Doenças do Fígado "
        description="No Instituto Dr. Fábio Crescentini, a excelência na Cirurgia do Aparelho Digestivo é uma missão que redefine padrões de cuidado. Sob a liderança visionária do Dr. Fábio Crescentini, nosso instituto é reconhecido por oferecer soluções cirúrgicas avançadas e personalizadas para uma variedade de condições gastrointestinais."
      />
    </main>
  )
}
