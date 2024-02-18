import { Video } from '@/components/common/Video'

import { DivSections } from '@/components/common/div-sections'

import { FaYoutube, FaWhatsapp } from 'react-icons/fa'

import { Button } from '@/components/common/button'
import Image from 'next/image'

import { Acordeon } from '@/components/common/acordeon'
import { SectionEspecialidades } from '@/components/sections/especialidades'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hepatologia',
}

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
              A Hepatologia representa a área de especialização dedicada ao
              estudo, diagnóstico e tratamento de doenças relacionadas ao
              fígado. Sob a liderança do renomado Dr. Fábio Crescentini, a
              atuação do grupo vai além do tratamento clínico, com apoio de
              tratamentos cirúrgicos e transplantes, incluindo o transplante
              intervivos. Modalidades de destaque no nosso programa com
              expertise singular em nosso meio. Com mais de 20 anos de
              experiência, aqui encontra-se o ambiente ideal para solução das
              doenças do fígado.
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
                  title="Hepatocarcinoma"
                  description={`O hepatocarcinoma, também conhecido como carcinoma hepatocelular, é um tipo de câncer de fígado. O diagnóstico é geralmente feito através de exames de imagem, como ultrassonografia, tomografia computadorizada ou ressonância magnética, e pode incluir uma biópsia para confirmar o diagnóstico. Fatores de risco incluem cirrose hepática, hepatite crônica, e consumo excessivo de álcool. Neste cenário, o rastreamento é muito importante. Ultrassonografia a cada semestre é a recomendação mais utilizadas nos consensos.

                  O tratamento depende do estágio do câncer e da saúde geral do paciente. Em estágios iniciais, a cirurgia para remover o tumor ou um transplante de fígado podem ser opções. Em casos mais avançados, tratamentos como ablação (destruição do tumor por calor ou frio), embolização (bloqueio do fluxo sanguíneo para o tumor), radioterapia e quimioterapia podem ser utilizados. A terapia direcionada, que usa medicamentos para atacar características específicas das células cancerosas, também é uma abordagem comum. O acompanhamento regular com um médico é crucial para monitorar a progressão da doença e ajustar o tratamento conforme necessário.`}
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Metástases hepáticas"
                  description={`As metástases hepáticas são tumores secundários no fígado, originados de cânceres em outras partes do corpo, como cólon, reto, pulmão, mama e pâncreas. As metástases colorretais, que se originam de cânceres no cólon ou no reto, são as mais comuns. O tratamento depende do tamanho, número e localização dos tumores, bem como do estado geral de saúde do paciente.

                  A hepatectomia, cirurgia para remover parte do fígado, pode ser curativa em alguns casos de metástases hepáticas, especialmente as colorretais. Quando há muitos tumores ou estão em locais complicados, a cirurgia pode ser realizada em dois tempos cirúrgicos diferentes, permitindo que o fígado se regenere entre as cirurgias.

                  Além da cirurgia, outras opções de tratamento incluem quimioterapia, radioterapia e ablação, um procedimento que usa calor ou frio para destruir as células cancerosas. Novas terapias, como o transplante de fígado, estão sendoexploradas, especialmente em casos onde outras opções de tratamento não são viáveis.

                  O plano de tratamento é individualizado, baseado nas características específicas das metástases e na condição clínica do paciente. O acompanhamento médico regular é essencial para avaliar a resposta ao tratamento e fazer ajustes conforme necessário.
                  `}
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Cirrose Hepática"
                  description={`A cirrose é uma condição crônica onde o tecido normal do fígado é substituído por tecido cicatricial, afetando a função hepática. É comumente causada pelo consumo excessivo de álcool, hepatite crônica e doenças hepáticas gordurosas. Os sintomas incluem fadiga, perda de apetite, icterícia (amarelamento da pele e olhos) e acúmulo de líquido no abdômen.

                  O diagnóstico é feito através de exames de sangue, que avaliam a função hepática, e exames de imagem, como ultrassonografia, tomografia ou ressonância magnética. Uma biópsia hepática também pode ser realizada para confirmar a cirrose.

                  Não há cura para a cirrose, mas o tratamento visa controlar os sintomas e prevenir complicações. Isso inclui evitar álcool, manter uma dieta saudável, e usar medicamentos para gerenciar sintomas específicos, como diuréticos para reduzir o acúmulo de líquido. Em casos avançados, pode ser necessário um transplante de fígado. É importante o acompanhamento regular com um médico para monitorar a progressão da doença e adaptar o tratamento conforme necessário.
`}
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Esteatose"
                  description={`A esteatose hepática, conhecida também como fígado gorduroso, ocorre quando há acúmulo excessivo de gordura nas células do fígado. É frequentemente associada a obesidade, diabetes, consumo excessivo de álcool e altos níveis de colesterol e triglicerídeos. A esteatose pode ser assintomática, mas alguns podem sentir fadiga ou desconforto abdominal.

                  O diagnóstico é feito através de exames de sangue, que avaliam a função hepática, e exames de imagem, como ultrassonografia, para visualizar a gordura no fígado. Em alguns casos, uma biópsia hepática pode ser necessária. E a elastografia hepática auxilia no seguimento.

                  O tratamento foca na gestão das causas subjacentes: reduzir o consumo de álcool, controlar o peso através de dieta saudável e exercícios físicos, e gerenciar diabetes ou níveis elevados de colesterol e triglicerídeos com a ajuda de medicamentos, se necessário. Não há medicamentos específicos para tratar a Esteatose, mas mudanças no estilo de vida podem melhorar significativamente a condição. O tratamento da esteatohepatite, que é uma condição inflamatória associada a Esteatose, pode exigir tratamento medicamentoso que difere conforme as comorbidades do paciente. É importante o acompanhamento médico regular para monitorar a saúde do fígado e evitar a progressão para condições mais graves, como a cirrose.
                  `}
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Hepatites"
                  description={`As hepatites virais são inflamações do fígado causadas por diferentes vírus, identificados como hepatites A, B, C, D e E. Os sintomas comuns incluem fadiga, dor abdominal, icterícia e alterações nas fezes e urina. Algumas hepatites podem ser assintomáticas, principalmente nas fases iniciais.

                  O diagnóstico é feito através de exames de sangue específicos que detectam os vírus e avaliam a função hepática. Para a hepatite A, a prevenção é feita com vacinação e práticas de higiene. As hepatites B e C podem necessitar de tratamento com antivirais para controlar a replicação do vírus e prevenir danos ao fígado. A hepatite D ocorre apenas em pessoas com hepatite B e pode exigir tratamento similar ao da hepatite B. A hepatite E geralmente é autolimitada, tratada com suporte clínico.

                  É crucial evitar a propagação desses vírus, praticando sexo seguro, evitando compartilhar agulhas e, no caso das hepatites A e B, garantindo a vacinação. O acompanhamento médico regular é importante para monitorar a saúde do fígado e adaptar o tratamento conforme necessário.`}
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Alimentação e doenças hepáticas"
                  description={`A alimentação desempenha um papel fundamental na saúde do fígado. Uma dieta rica em gorduras saturadas, açúcar e calorias pode levar ao acúmulo de gordura no fígado, resultando em esteatose hepática (fígado gorduroso). Além disso, o consumo excessivo de álcool pode causar hepatite alcoólica e eventualmente cirrose, uma cicatrização progressiva do fígado. Por outro lado, uma dieta balanceada, rica em fibras, vegetais, grãos integrais e proteínas magras, pode ajudar a manter a função hepática saudável. O consumo de alimentos ricos em carboidratos principalmente a frutose propiciam o acúmulo de gordura no fígado.

                  Alimentos com propriedades anti-inflamatórias e antioxidantes, como verduras, chás verdes e peixes ricos em ômega-3, também são benéficos. O café assume um papel de destaque na proteção do fígado.

                   Manter um peso saudável, evitar o consumo excessivo de álcool e controlar doenças crônicas como diabetes e colesterol alto são essenciais para prevenir doenças do fígado. Uma boa nutrição é chave para a saúde hepática e geral.
                  `}
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Álcool e o Fígado"
                  description={`O consumo excessivo e prolongado de álcool está diretamente relacionado a várias doenças do fígado. O álcool pode causar danos às células hepáticas, levando a inflamações como a hepatite alcoólica. Com o tempo, isso pode evoluir para cirrose, uma condição séria onde o tecido saudável do fígado é substituído por tecido cicatricial, prejudicando a função hepática. Além disso, o abuso de álcool aumenta o risco de desenvolver carcinoma hepatocelular, um tipo de câncer de fígado.

                  A redução ou eliminação do consumo de álcool é fundamental para prevenir doenças hepáticas. Adotar um estilo de vida saudável, com alimentação balanceada e atividades físicas, também ajuda a proteger o fígado. Em casos de doença hepática alcoólica, o tratamento inclui abstinência de álcool, mudanças na dieta e, em alguns casos, medicações para gerenciar os danos ao fígado..
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
                Quais são os tumores hepáticos mais frequentes?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                Os tumores hepáticos podem ser benignos ou malignos. Os tipos
                mais comuns de tumores benignos incluem hemangiomas e adenomas
                hepáticos. Quanto aos tumores malignos, o carcinoma
                hepatocelular é o mais comum, seguido pelo colangiocarcinoma.
                Metástases de outros cânceres para o fígado também são
                frequentes.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                Quais as opções de tratamento para tumores do fígado?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                O tratamento para tumores do fígado varia dependendo do tipo e
                estágio do tumor. Para tumores pequenos e localizados, a
                cirurgia pode ser uma opção. Outros tratamentos incluem ablação
                (destruição do tumor), embolização (bloqueio do suprimento de
                sangue para o tumor), radioterapia e quimioterapia. Em alguns
                casos, pode ser considerado um transplante de fígado. As opções
                são inúmeras e a correta utilização de cada passo terapêutico
                exige um especialista com experiência.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                Como o álcool afeta o fígado?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                O consumo excessivo e prolongado de álcool pode causar danos
                significativos ao fígado, levando a condições como esteatose
                hepática (acúmulo de gordura no fígado), hepatite alcoólica
                (inflamação do fígado) e cirrose (cicatrização e perda de função
                do fígado). A redução do consumo de álcool é crucial para
                prevenir danos adicionais.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                Quais são as principais medicações que podem causar hepatite?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                Alguns medicamentos podem causar hepatite medicamentosa, uma
                inflamação do fígado induzida por remédios. Exemplos incluem
                certos antibióticos, anti-inflamatórios não esteroides,
                medicamentos para epilepsia e alguns suplementos e ervas. É
                importante seguir as orientações médicas e relatar quaisquer
                efeitos colaterais ao seu médico.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                Quais são as causas mais comuns de hepatite?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                Hepatite é a inflamação do fígado e pode ser causada por
                diversos fatores. As causas mais comuns incluem infecções virais
                (hepatites A, B, C, D e E), abuso de álcool, certos medicamentos
                e toxinas, doenças autoimunes e doenças metabólicas. A prevenção
                inclui vacinação (para hepatites A e B), cuidados com higiene e
                alimentação, e uso cuidadoso de medicamentos e álcool.
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
      <SectionEspecialidades defaultOption="doecas-do-pancreas" />
    </main>
  )
}
