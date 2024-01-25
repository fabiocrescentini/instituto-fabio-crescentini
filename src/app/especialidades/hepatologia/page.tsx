import { Video } from '@/components/common/Video'

import { DivSections } from '@/components/common/div-sections'

import { FaYoutube, FaWhatsapp } from 'react-icons/fa'

import { Button } from '@/components/common/button'
import Image from 'next/image'

import { Acordeon } from '@/components/common/acordeon'
import { SectionEspecialidades } from '@/components/sections/especialidades'

export default function Hepatologia() {
  return (
    <main className="w-screen min-h-screen">
      <section className="h-auto bg-bannerEspecialidades bg-cover bg-no-repeat mt-24 lg:mt-32">
        <div className="flex flex-col justify-center  items-center py-32">
          <h1 className="font-merriweather text-xl lg:text-2xl text-red-700 font-bold">
            Hepatologia
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
              Hepatologia
            </h2>

            <p className="font-source leading-heading font-light text-sm text-blue">
              A Hepatologia no Instituto Dr. Fábio Crescentini representa uma
              área de especialização dedicada ao estudo, diagnóstico e
              tratamento de doenças relacionadas ao fígado. Sob a liderança do
              renomado Dr. Fábio Crescentini, nosso instituto se destaca na
              abordagem abrangente e avançada para as condições hepáticas,
              visando oferecer aos pacientes cuidados de qualidade e soluções
              eficazes.
            </p>
            <div className="flex pt-3 justify-center lg:justify-start">
              <Button.Root href="#">
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
              src="/especialidades/especialidade-1.png"
              alt="imagem de um figado"
              quality={100}
              width={400}
              height={400}
            />
            <div className="pt-2 w-full">
              <Acordeon.Root>
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Hepatite"
                  description="Inflamação do fígado, frequentemente causada por vírus, álcool, drogas ou distúrbios autoimunes."
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Cirrose Hepática"
                  description="Uma condição crônica que resulta em cicatrização do tecido hepático, comprometendo sua função normal."
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Esteatose Hepática (Fígado Gordo)"
                  description="Acúmulo excessivo de gordura nas células do fígado, muitas vezes associado a hábitos de vida pouco saudáveis."
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Câncer Hepático"
                  description="Desenvolvimento de células cancerosas no fígado, com várias causas, incluindo hepatite crônica e cirrose."
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Doença Hepática Alcoólica"
                  description="Danos ao fígado causados pelo consumo excessivo de álcool, resultando em inflamação e cicatrização."
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
                O consumo moderado de álcool é seguro para quem possui doenças
                hepáticas?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                A resposta pode variar dependendo do tipo e da gravidade da
                doença hepática. Em algumas condições, como a esteatose
                hepática, é recomendado evitar o consumo de álcool, mesmo em
                quantidades moderadas. Pacientes com doenças hepáticas
                avançadas, como cirrose, geralmente são aconselhados a abster-se
                completamente do álcool, pois pode agravar ainda mais a
                condição.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                Como posso prevenir a hepatite?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                A prevenção da hepatite envolve práticas como a vacinação contra
                as hepatites A e B, adoção de medidas de higiene pessoal e
                alimentar, e o uso de práticas seguras durante atividades que
                envolvam fluidos corporais. Evitar o compartilhamento de agulhas
                e práticas sexuais seguras também são essenciais para prevenir a
                transmissão de hepatites.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                Quais são os tratamentos disponíveis para a cirrose hepática?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                O tratamento da cirrose hepática depende da causa subjacente e
                do estágio da doença. Em alguns casos, pode ser necessário
                tratar a condição que está causando a cirrose, como hepatite
                viral ou abuso de álcool. Medidas para controlar os sintomas,
                como diuréticos para o controle da ascite, e, em casos
                avançados, transplante hepático, podem ser consideradas. A
                gestão inclui uma abordagem multidisciplinar para garantir o
                suporte adequado ao paciente.
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
              <Button.Root href="#">
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
        urlImg="/especialidades/pancreas.png"
        altImg="image de um pancreas"
        title="Doenças do Pâncreas e Via Biliar"
        description="No Instituto Dr. Fábio Crescentini, reconhecemos a importância vital do pâncreas e da via biliar para o funcionamento saudável do sistema digestivo. Nosso compromisso é oferecer diagnóstico preciso e tratamento eficaz para uma variedade de condições que afetam essas estruturas cruciais."
      />
    </main>
  )
}
