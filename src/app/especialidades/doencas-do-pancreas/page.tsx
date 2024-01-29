import { Video } from '@/components/common/Video'

import { DivSections } from '@/components/common/div-sections'

import { FaYoutube, FaWhatsapp } from 'react-icons/fa'

import { Button } from '@/components/common/button'
import Image from 'next/image'

import { Acordeon } from '@/components/common/acordeon'
import { SectionEspecialidades } from '@/components/sections/especialidades'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Doenças do Pâncreas',
}

export default function Hepatologia() {
  return (
    <main className="w-screen min-h-screen">
      <section className="h-auto bg-bannerEspecialidades bg-cover bg-no-repeat mt-24 lg:mt-32">
        <div className="flex flex-col justify-center  items-center py-32">
          <h1 className="font-merriweather text-xl lg:text-2xl text-red-700 font-bold text-center lg:w-3/6">
            Doenças do Pâncreas e Via Biliar
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
              Doenças do Pâncreas e Via Biliar
            </h2>

            <p className="font-source leading-heading font-light text-sm text-blue">
              No Instituto Dr. Fábio Crescentini, reconhecemos a importância
              vital do pâncreas e da via biliar para o funcionamento saudável do
              sistema digestivo. Nosso compromisso é oferecer diagnóstico
              preciso e tratamento eficaz para uma variedade de condições que
              afetam essas estruturas cruciais.
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
              src="/especialidades/especialidade-2.png"
              alt="imagem de um figado"
              quality={100}
              width={400}
              height={400}
            />
            <div className="pt-2 w-full">
              <Acordeon.Root>
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Pancreatite"
                  description="A pancreatite é a inflamação do pâncreas, muitas vezes desencadeada por cálculos biliares, consumo excessivo de álcool ou infecções. Os sintomas incluem dor abdominal intensa, náuseas e vômitos. O tratamento varia desde medidas de suporte até intervenções cirúrgicas, dependendo da gravidade."
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Cálculos Biliares"
                  description="Cálculos biliares são depósitos sólidos que se formam na vesícula biliar. Quando esses cálculos bloqueiam a passagem da bile, podem causar dor intensa e inflamação. O tratamento pode envolver mudanças na dieta, medicamentos ou, em casos graves, a remoção cirúrgica da vesícula biliar."
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Câncer de Pâncreas"
                  description="O câncer de pâncreas é uma condição grave que muitas vezes não apresenta sintomas evidentes nos estágios iniciais. Quando os sintomas aparecem, como perda de peso inexplicada e icterícia, geralmente indicam um estágio avançado. O tratamento pode envolver cirurgia, quimioterapia e radioterapia, dependendo do estágio e da extensão da doença."
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Pancreatite Crônica"
                  description="Diferentemente da pancreatite aguda, a pancreatite crônica é uma inflamação persistente do pâncreas que pode resultar em danos irreversíveis. Isso pode levar a problemas digestivos e diabetes. O tratamento visa controlar os sintomas e prevenir complicações, muitas vezes incluindo modificações na dieta e medicamentos."
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Estenose Biliar"
                  description="A estenose biliar refere-se ao estreitamento anormal dos ductos biliares, muitas vezes devido à formação de cicatrizes. Isso pode resultar em obstrução do fluxo biliar, levando a icterícia e desconforto abdominal. O tratamento pode envolver procedimentos endoscópicos para aliviar a obstrução."
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
                Como posso prevenir cálculos biliares?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                Embora nem todos os casos de cálculos biliares possam ser
                prevenidos, há medidas que podem reduzir o risco. Manter uma
                dieta equilibrada, rica em fibras, e evitar ganho de peso
                excessivo podem ajudar. Além disso, manter-se hidratado e
                praticar atividade física regular pode contribuir para a saúde
                da vesícula biliar e prevenir a formação de cálculos.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                Quais são os sintomas de câncer de pâncreas e como posso
                reconhecê-los precocemente?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                O câncer de pâncreas é muitas vezes assintomático nos estágios
                iniciais, tornando o diagnóstico precoce desafiador. No entanto,
                sintomas como perda de peso inexplicada, dor abdominal
                persistente, icterícia, e mudanças nos hábitos intestinais podem
                ser indicativos. Consultar um profissional de saúde ao
                experimentar esses sintomas é crucial para uma avaliação
                adequada.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                Quais são as opções de tratamento para pancreatite crônica?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                O tratamento da pancreatite crônica visa controlar os sintomas e
                prevenir complicações. Isso pode envolver mudanças na dieta,
                abstenção de álcool, medicamentos para aliviar a dor e a
                inflamação, e, em alguns casos, procedimentos cirúrgicos para
                aliviar a obstrução dos ductos pancreáticos. A abordagem
                terapêutica é personalizada, dependendo da gravidade e das
                necessidades individuais do paciente.
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
        urlImg="/especialidades/aparelho-digestivo.png"
        altImg="image do aparelho digestivo"
        title="Cirurgia do Aparelho Digestivo"
        description="No Instituto Dr. Fábio Crescentini, a excelência na Cirurgia do Aparelho Digestivo é uma missão que redefine padrões de cuidado. Sob a liderança visionária do Dr. Fábio Crescentini, nosso instituto é reconhecido por oferecer soluções cirúrgicas avançadas e personalizadas para uma variedade de condições gastrointestinais."
      />
    </main>
  )
}
