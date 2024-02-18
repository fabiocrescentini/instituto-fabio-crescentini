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
              As doenças do pâncreas e da via biliar exigem uma larga
              experiência para que o sucesso do tratamento seja alcançado. Com
              uma formação toda voltada para a essas áreas, o instituto Fábio
              Crescentini conta com todos os recursos para te auxiliar no
              diagnóstico e tratamento destas lesões. Destaque para o tratamento
              cirúrgico das doenças do pâncreas com mais de 500 procedimentos
              realizados apenas nesta área de atuação. Um número atingido por
              pouquíssimos cirurgiões neste país.
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
                  title="Câncer de Pâncreas"
                  description={`O adenocarcinoma de pâncreas é um tipo comum de câncer pancreático, muitas vezes diagnosticado em estágios avançados devido a sintomas iniciais sutis. Os sintomas podem incluir dor abdominal, perda de peso e icterícia. O diagnóstico é geralmente feito com exames de imagem, como tomografia computadorizada ou ressonância magnética, e confirmado por biópsia. Porém em casos ressecáveis, a cirurgia pode ser indicada mesmo sem a comprovação histológica obtida com as biópsias. O tempo é precioso no tratamento desta doença que muitas vezes não pode ser excluída com os exames menos invasivos.

                  O tratamento depende do estágio do câncer. Se detectado precocemente, a cirurgia para remover o tumor pode ser uma opção. Em estágios mais avançados, opções de tratamento incluem quimioterapia e radioterapia para controlar o crescimento do tumor e aliviar os sintomas. Terapias direcionadas e imunoterapia são novas abordagens em alguns casos. O manejo dos sintomas e o suporte nutricional são importantes para manter a qualidade de vida. O acompanhamento médico regular é crucial para adaptar o tratamento conforme necessário e gerenciar os efeitos colaterais.`}
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Tumor da Via Biliar"
                  description={`
                  O tumor de via biliar, conhecido como colangiocarcinoma, é um câncer que afeta os ductos biliares. Esses tumores são classificados com base em sua localização: intra-hepático (dentro do fígado), peri-hilar (na junção dos ductos biliares) e distal (próximo ao pâncreas). Os sintomas incluem icterícia (amarelamento da pele e olhos), dor abdominal e perda de peso.

                  O diagnóstico é feito através de exames de imagem como ultrassonografia, tomografia computadorizada e ressonância magnética. Procedimentos como colangiopancreatografia retrógrada endoscópica (CPRE) também são usados, às vezes com biópsia. A coledocoscopia é um recurso útil que vem ganhando espaço.

                  O tratamento depende da localização e estágio do tumor. A cirurgia é a principal opção para tumores ressecáveis. O principal desafio das doenças peri-hilares é a drenagem biliar adequada para a preparação cirúrgica. Em casos avançados, onde a cirurgia não é viável, tratamentos como quimioterapia, radioterapia e procedimentos para aliviar a obstrução dos ductos biliares são considerados. O manejo dos sintomas e cuidados paliativos são importantes para melhorar a qualidade de vida.Acompanhamento médico regular é essencial para monitoramento e ajuste do tratamento.
                  `}
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Colelitíase e suas complicações"
                  description={`
                  A colelitíase, conhecida como pedras na vesícula, pode levar a várias complicações. A mais comum é a colecistite, uma inflamação da vesícula biliar, causando dor intensa e febre. Se uma pedra bloqueia o ducto biliar, pode causar icterícia e coledocolitíase, a presença de pedras no ducto biliar comum, potencialmente levando a infecções como colangite. Pancreatite aguda é outra complicação séria, ocorrendo quando as pedras bloqueiam o ducto pancreático.

                  Duas complicações menos comuns, mas importantes, incluem o íleo biliar, uma obstrução intestinal causada por uma grande pedra que passa para o intestino, e a síndrome de Mirizzi, onde uma pedra na vesícula biliar ou no ducto cístico causa obstrução e inflamação do ducto biliar comum.

                  Essas complicações requerem avaliação e tratamento médico imediato, frequentemente envolvendo procedimentos para remover as pedras e, em alguns casos, cirurgia para remover a vesícula biliar. O tratamento adequado é crucial para prevenir danos mais sérios ao fígado, pâncreas e sistema digestivo.
                  `}
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Pancreatite Aguda"
                  description={`A pancreatite aguda é uma inflamação súbita do pâncreas. É classificada, segundo a Classificação de Atlanta, como leve, moderada ou grave. Os sintomas incluem dor intensa na parte superior do abdômen, náuseas e vômitos. A pancreatite aguda geralmente é causada por pedras na vesícula ou consumo excessivo de álcool.

                  O diagnóstico é feito através de exames de sangue, que mostram enzimas pancreáticas elevadas, e exames de imagem, como ultrassonografia ou tomografia computadorizada, para avaliar o pâncreas.

                  O tratamento depende da gravidade. Na pancreatite leve, o manejo inclui jejum para ajuda no controle dos sintomas, hidratação intravenosa e medicação para dor. Na pancreatite moderada ou grave, tratamentos mais intensivos são necessários, incluindo cuidados em unidade de terapia intensiva, nutrição especial e, em alguns casos, procedimentos para drenar fluidos ou remover tecido danificado. Evitar álcool e gerenciar a saúde da vesícula biliar são importantes para prevenir recorrências. O acompanhamento médico é essencial para monitorar a recuperação e prevenir complicações.
                  `}
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Doenças Biliares e transplante"
                  description={`As doenças biliares, afetando a vesícula biliar e os ductos biliares, podem às vezes levar à necessidade de um transplante de fígado. Isso geralmente ocorre em condições avançadas, como cirrose biliar primária ou colangite esclerosante primária, que causam danos progressivos ao fígado. Nestes casos, o fígado deixa de funcionar adequadamente, e o transplante se torna uma opção de tratamento vital.

                  Um sintoma comum dessas doenças é o prurido intratável, uma coceira intensa e persistente que não melhora com tratamentos convencionais. Além do desconforto significativo, o prurido intratável pode indicar agravamento da doença hepática, reforçando a necessidade de considerar o transplante.

                  No processo de transplante de fígado, o fígado doente é substituído por um fígado saudável de um doador. A avaliação para transplante considera a gravidade da doença hepática e a saúde geral do paciente. Após o transplante, os pacientes geralmente têm uma melhora significativa na qualidade de vida e alívio dos sintomas, incluindo o prurido. O acompanhamento médico contínuo é essencial para monitorar a função do novo fígado e para o manejo de medicamentos imunossupressores, que ajudam a prevenir a rejeição do órgão transplantado.
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
                O que é colelitíase e quais são seus sintomas?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                Colelitíase é o termo médico para pedras na vesícula biliar. Os
                sintomas podem incluir dor na parte superior direita do abdômen,
                náuseas, vômitos e, em alguns casos, febre. Algumas pessoas
                podem não apresentar sintomas. As pedras são formadas por
                colesterol ou bilirrubina e podem causar complicações se
                bloquearem os ductos biliares o que leva a icterícia.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                O que é um Tumor de Klatskin?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                O Tumor de Klatskin é um tipo de câncer que ocorre nos ductos
                biliares no local onde eles se dividem para entrar no fígado. É
                um tipo de colangiocarcinoma. Os sintomas incluem icterícia,
                coceira na pele, fezes claras, urina escura e perda de peso. O
                tratamento pode envolver cirurgia, radioterapia e quimioterapia.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                Como é tratada a coledocolitíase?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                Coledocolitíase é a presença de pedras no ducto biliar comum. O
                tratamento geralmente envolve a remoção das pedras, que pode ser
                feita por endoscopia (CPRE - Colangiopancreatografia Retrógrada
                Endoscópica). Em alguns casos, pode ser necessária cirurgia. O
                tratamento também inclui o manejo de qualquer infecção
                associada.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                O que é pancreatite aguda e quais são suas causas?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                Pancreatite aguda é a inflamação súbita do pâncreas, que pode
                ser leve ou grave. As causas comuns incluem pedras na vesícula
                biliar e abuso de álcool. Os sintomas incluem dor intensa no
                abdômen superior, náuseas e vômitos. O tratamento envolve
                repouso, tratamento da dor, hidratação intravenosa e, em alguns
                casos, alimentação por sonda ou cirurgia.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                Todo tumor no pâncreas é maligno?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                Não, nem todo tumor de pâncreas é maligno. Existem tanto tumores
                benignos quanto malignos no pâncreas. Porém tumores malignos do
                pâncreas são mais comuns e preocupantes. O tipo mais frequente é
                o adenocarcinoma ductal, que representa cerca de 85% de todos os
                casos de câncer de pâncreas. Este tipo se origina nas células
                que revestem os ductos pancreáticos.
              </p>
              <p className="text-blue text-sm font-source leading-heading font-light">
                Além do adenocarcinoma ductal, existem outros tipos menos comuns
                de tumores malignos no pâncreas, incluindo: Tumores
                neuroendócrinos pancreáticos, carcinoma acinar, carcinoma
                adenosquamoso, carcinoma de células em anel de sinete e
                carcinoma de células gigantes, que são tipos muito raros de
                câncer de pâncreas.
              </p>
              <p className="text-blue text-sm font-source leading-heading font-light">
                Por outro lado, existem também tumores benignos do pâncreas,
                como cistodenomas serosos e tumores neuroendócrinos não
                funcionais. Embora estes não sejam cancerosos, podem necessitar
                de acompanhamento ou tratamento, dependendo do tamanho,
                localização e possíveis sintomas que causam.
              </p>
              <p className="text-blue text-sm font-source leading-heading font-light">
                É importante notar que, mesmo os tumores pancreáticos benignos,
                podem, em algumas circunstâncias, apresentar riscos à saúde e
                requerem avaliação médica adequada.
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
      <SectionEspecialidades defaultOption="cirurgia-aparelho-digestivo" />
    </main>
  )
}
