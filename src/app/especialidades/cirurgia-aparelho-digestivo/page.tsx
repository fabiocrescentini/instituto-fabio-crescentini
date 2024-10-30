import { Video } from '@/components/common/Video'

import { DivSections } from '@/components/common/div-sections'

import { FaYoutube, FaWhatsapp } from 'react-icons/fa'

import { Button } from '@/components/common/button'
import Image from 'next/image'

import { Acordeon } from '@/components/common/acordeon'
import { SectionEspecialidades } from '@/components/sections/especialidades'
import { Metadata } from 'next'
import Contact from './Contact'

export const metadata: Metadata = {
  title: 'Cirurgia do Aparelho Digestivo',
}

export default function Hepatologia() {
  return (
    <main className="w-screen min-h-screen">
      <section className="h-auto bg-bannerEspecialidades bg-cover bg-no-repeat mt-24 lg:mt-32">
        <div className="flex flex-col justify-center  items-center py-32">
          <h1 className="font-merriweather text-xl lg:text-2xl text-red-700 font-bold text-center lg:w-3/6">
            Cirurgia do Aparelho Digestivo
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
            <Video videoId="1gWFwCf4uWo-Dl0B5xH-Q6yWg5bxqLUbt" />
          </div>
          <div className="w-[auto] flex-col space-y-8 text-center lg:text-left">
            <h2 className="font-merriweather text-[2rem] text-red-700 font-bold pt-6">
              Cirurgia do Aparelho Digestivo
            </h2>

            <p className="font-source leading-heading font-light text-sm text-blue">
              A cirurgia do aparelho digestivo é a base que conduz o cirurgião
              para a minha principal subespecialidade, a cirurgia
              hepatobiliopancreática e os transplantes. Neste período da minha
              formação, eu tive contatos com todos os outros órgãos que
              completam a digestão: esôfago, estômago, intestino delgado e
              colón. Essa completa formação profissional, permitiu-me fundar uma
              pós-graduação que traz todo esse conhecimento a jovens cirurgiões
              gerais.
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
            Assuntos mais comentados
          </h2>
          <div className="flex flex-col lg:flex-row pt-14 w-full gap-5 justify-center items-center lg:items-start ">
            <Image
              src="/especialidades/especialidade-3.png"
              alt="imagem de um figado"
              quality={100}
              width={400}
              height={400}
            />
            <div className="pt-2 w-full">
              <Acordeon.Root>
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Câncer gástrico"
                  description={`O câncer gástrico é diagnosticado frequentemente através de endoscopia, onde câmera examina o estômago, e biópsias são realizadas para análise. A localização do câncer pode variar, podendo afetar diferentes partes do estômago. A classificação do câncer gástrico em precoce ou avançado é importante para o tratamento. No estágio precoce, o câncer está limitado às camadas superficiais do estômago e tem um prognóstico melhor. Já no estágio avançado, o câncer se espalhou mais profundamente no estômago e possivelmente para outros órgãos.

                  O tratamento varia conforme o estágio. No câncer gástrico precoce, pode ser possível a remoção cirúrgica do tumor com margens seguras, às vezes utilizando técnicas endoscópicas. No câncer avançado, a cirurgia para remover parte ou todo o estômago pode ser necessária, muitas vezes combinada com quimioterapia e/ou radioterapia para reduzir o tamanho do tumor antes da cirurgia ou eliminar células cancerosas remanescentes após a cirurgia. A abordagem depende da extensão da doença e da saúde geral do paciente. O acompanhamento regular com um médico é crucial para monitorar a resposta ao tratamento e ajustar conforme necessário.
                  `}
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Refluxo gastroesofágico"
                  description={`
                  O refluxo gastroesofágico é uma condição onde o ácido do estômago volta para o esôfago, causando sintomas como azia. O diagnóstico é frequentemente baseado nos sintomas e pode ser confirmado com exames como a endoscopia, que visualiza o esôfago, e a pHmetria esofágica, que mede a acidez no esôfago para avaliar a frequência e a gravidade do refluxo.

                  A manometria esofágica é outro exame importante, pois avalia a função do esfíncter esofágico inferior - o músculo que impede o refluxo ácido. Esses exames são cruciais para determinar se a cirurgia é a melhor opção, especialmente em casos onde os medicamentos não são eficazes.

                  Quando a cirurgia é indicada, o procedimento mais comum é a fundoplicatura de Nissen. Nesta cirurgia, a parte superior do estômago é enrolada ao redor da parte inferior do esôfago para fortalecer o esfíncter e prevenir o refluxo. Este procedimento é geralmente realizado por laparoscopia, que é minimamente invasiva.

                  A cirurgia é considerada para casos mais graves ou quando há complicações relacionadas ao refluxo, como esofagite erosiva. A decisão de realizar a cirurgia depende da avaliação da gravidade dos sintomas, do impacto na qualidade de vida do paciente e dos resultados dos exames.
                  `}
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Tumores do colón"
                  description={`
                  O câncer de cólon é diagnosticado frequentemente por colonoscopia, um exame que permite visualizar o interior do intestino grosso, e biópsias das áreas suspeitas. Sintomas incluem mudanças nos hábitos intestinais, sangue nas fezes e dor abdominal. A localização do câncer no cólon pode afetar o tratamento e o prognóstico.

                  O tratamento varia conforme o estágio da doença. Em estágios iniciais, a cirurgia para remover o tumor é comum. Nos estágios mais avançados, pode ser necessária a combinação de cirurgia com quimioterapia e/ou radioterapia.

                  Alguns cânceres de cólon são hereditários e ligados a características genéticas específicas. As síndromes mais comuns são a Polipose Adenomatosa Familiar (PAF) e o Câncer Colorretal Hereditário Não Poliposo (HNPCC, também conhecido como Síndrome de Lynch). Esses tipos hereditários requerem vigilância rigorosa e frequente, como colonoscopias regulares, e às vezes cirurgia preventiva. Pessoas com histórico familiar de câncer de cólon devem discutir com seu médico sobre testes genéticos e um plano de vigilância adequado.
                  `}
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Tumores do reto"
                  description={`O câncer de reto é diagnosticado geralmente através de colonoscopia, onde uma câmera examina o reto, e biópsias são realizadas para análise. A localização do tumor no reto – alto, médio ou baixo – influencia o tratamento.

                  Nos tumores altos, mais próximos da junção com o cólon, a cirurgia para remover a parte afetada do reto é comum, podendo ser seguida por quimioterapia ou radioterapia. Nos tumores médios, a combinação de radioterapia e quimioterapia antes da cirurgia é frequentemente usada para reduzir o tamanho do tumor e aumentar as chances de uma cirurgia bem-sucedida. Já nos tumores baixos, próximos ao ânus, o tratamento pode envolver radioterapia e quimioterapia para preservar a função anal, seguido de cirurgia.

                  A abordagem depende do estágio do câncer, tamanho e localização exata do tumor, além da saúde geral do paciente. O objetivo é remover o câncer de forma eficaz, mantendo, sempre que possível, a função normal do reto. Acompanhamento regular e tratamento personalizado são essenciais.
                  `}
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
          <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 text-center lg:text-left">
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                O que é refluxo gastroesofágico e quando é necessária cirurgia?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                Refluxo gastroesofágico é a subida do conteúdo ácido do estômago
                para o esôfago, causando sintomas como azia e regurgitação. A
                cirurgia, geralmente uma fundoplicatura, é considerada quando o
                tratamento medicamentoso não é eficaz, há complicações como
                esofagite grave ou há uma hérnia de hiato volumosa associada.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                Como é diagnosticado e tratado o câncer gástrico?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                O câncer gástrico, ou câncer de estômago, geralmente é
                diagnosticado através de endoscopia e biópsia. Os sintomas podem
                incluir dor abdominal, perda de peso e dificuldade para comer. O
                tratamento varia de acordo com o estágio do câncer e pode
                incluir cirurgia para remover parte ou todo o estômago,
                quimioterapia e radioterapia.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                O que é diverticulite e quando a cirurgia é indicada?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                Diverticulite é a inflamação de pequenas bolsas que se formam na
                parede do intestino, chamadas divertículos. A cirurgia é
                considerada em casos de diverticulite recorrente, complicações
                como abscessos, perfuração intestinal, ou obstrução intestinal.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                Como é tratada a doença inflamatória intestinal cirurgicamente?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                Em doenças inflamatórias intestinais, como a doença de Crohn e a
                colite ulcerativa, a cirurgia é uma opção quando há falha no
                tratamento médico, ocorrência de complicações (como
                estreitamento intestinal, abscessos ou perfurações) ou risco de
                câncer. O tipo de cirurgia depende da localização e extensão da
                doença.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                Como é diagnosticado e tratado o câncer de esôfago
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                O câncer de esôfago é frequentemente diagnosticado através de
                endoscopia e biópsia. Os sintomas incluem dificuldade para
                engolir, perda de peso e dor no peito. O tratamento depende do
                estágio e pode incluir cirurgia para remover parte do esôfago,
                quimioterapia, radioterapia e terapias direcionadas.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center pt-4 lg:pt-16">
            <div className="flex pt-3 justify-center lg:justify-start">
              {/* <Button.Root href="https://linktr.ee/drfabiocrescentini">
                <Button.Text>Agendar uma consulta</Button.Text>
                <Button.Icon icon={FaWhatsapp} />
              </Button.Root> */}
              <Contact />
            </div>
          </div>
        </div>
        <div>
          <DivSections />
          <div className=" lg:hidden  bg-line bg-center bg-no-repeat w-full h-1" />
        </div>
      </section>
      <SectionEspecialidades defaultOption="gastroenterologia" />
    </main>
  )
}
