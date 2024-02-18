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
              As doenças do pâncreas e da via biliar exigem uma larga
              experiência para que o sucesso do tratamento seja alcançado. Com
              uma formação toda voltada para a essas áreas, o instituto Fábio
              Crescentini conta com todos os recursos para te auxiliar no
              diagnóstico e tratamento destas lesões. Destaque para o tratamento
              cirúrgico das doenças do pâncreas com mais de 500 procedimentos
              realizados apenas nesta área de atuação.
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
                  title="Refluxo Gastroesofágico – Tratamento Clínico"
                  description={`
                    O refluxo gastroesofágico é uma condição onde o ácido do estômago retorna ao esôfago, causando sintomas como azia e desconforto. O diagnóstico é baseado nos sintomas e pode ser confirmado com exames como endoscopia, que visualiza o esôfago, e pHmetria esofágica, que mede a acidez no esôfago.

                    O tratamento clínico envolve mudanças no estilo de vida, como evitar alimentos que pioram os sintomas (como comidas gordurosas, cafeína e álcool), não comer antes de deitar e elevar a cabeça da cama. Medicamentos como antiácidos, bloqueadores H2 e inibidores da bomba de prótons são usados para reduzir a acidez do estômago e aliviar os sintomas. Em alguns casos, medicamentos pró-cinéticos, que ajudam a esvaziar o estômago mais rapidamente, também podem ser prescritos.

                    Essas medidas, juntamente com um acompanhamento médico, ajudam a controlar os sintomas e a prevenir complicações do refluxo, como inflamação do esôfago.
                    `}
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Úlceras pépticas"
                  description={`As úlceras pépticas são feridas que se desenvolvem no revestimento do estômago ou do intestino delgado. Os sintomas comuns incluem dor abdominal, especialmente quando o estômago está vazio, e indigestão. O diagnóstico é feito através de endoscopia, um exame que visualiza o trato digestivo superior, e testes para a bactéria Helicobacter pylori, uma causa comum de úlceras.

                  O tratamento depende da causa da úlcera. Se a úlcera for causada pela Helicobacter pylori, uma combinação de antibióticos e medicamentos que reduzem a acidez do estômago, como inibidores da bomba de prótons ou bloqueadores H2, é usada para erradicar a bactéria e permitir que a úlcera cicatrize. Em úlceras não relacionadas a essa bactéria, os medicamentos para reduzir a acidez do estômago são a principal forma de tratamento.

                  Além dos medicamentos, mudanças no estilo de vida, como evitar o uso de anti-inflamatórios não esteroides (se estes foram a causa) e reduzir ou eliminar o consumo de álcool e tabaco, também são recomendadas para ajudar na cicatrização da úlcera e prevenir recorrências.
                  `}
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Intolerância Lactose"
                  description={`A intolerância à lactose é a incapacidade de digerir lactose, o açúcar presente no leite e em produtos lácteos. Os sintomas incluem inchaço, gases, diarréia e cólicas após consumir alimentos que contêm lactose. O diagnóstico é geralmente feito com base nos sintomas e pode ser confirmado por testes, como o teste de hidrogênio expirado ou o teste de tolerância à lactose sanguíneo.

                  O tratamento envolve a modificação da dieta para limitar ou evitar produtos lácteos. Alternativas sem lactose e produtos lácteos com baixo teor de lactose estão disponíveis. Suplementos de lactase, a enzima que falta em indivíduos com intolerância à lactose, podem ser tomados antes de consumir alimentos lácteos para ajudar na digestão da lactose.

                  É importante garantir uma ingestão adequada de cálcio e vitamina D, que são abundantes no leite, através de outras fontes ou suplementos. O manejo da intolerância à lactose é focado em reduzir os sintomas, mantendo uma dieta equilibrada e saudável.
                  `}
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Doença Celíaca"
                  description={`A doença celíaca é uma condição autoimune desencadeada pela ingestão de glúten, uma proteína encontrada no trigo, cevada e centeio. Os sintomas variam e podem incluir diarreia, inchaço, dor abdominal, fadiga e perda de peso e manifestações extra intestinais. O diagnóstico é feito inicialmente através de exames de sangue que detectam anticorpos específicos. Uma biópsia do intestino delgado, realizada durante uma endoscopia, é frequentemente necessária para confirmar o diagnóstico.

                  O único tratamento efetivo para a doença celíaca é uma dieta estritamente sem glúten por toda a vida. Isso envolve evitar todos os alimentos que contêm trigo, cevada e centeio. Muitos alimentos processados podem conter glúten oculto, então é importante ler os rótulos cuidadosamente. Alimentos naturalmente sem glúten incluem frutas, legumes, carne, peixe, arroz e milho.

                  Adotar uma dieta sem glúten geralmente leva à melhora dos sintomas e à recuperação do intestino. Pode ser recomendável consultar um nutricionista para garantir que a dieta seja nutricionalmente equilibrada e para obter orientações sobre como evitar o glúten.
                  `}
                />
                <div className="h-[1px] w-full bg-pink-100" />
                <Acordeon.Item
                  title="Síndrome do supercrescimento bacteriano"
                  description={`A síndrome de supercrescimento bacteriano é uma condição onde bactérias em excesso se acumulam no intestino delgado, causando sintomas como inchaço, gases, diarréia e perda de peso. O diagnóstico muitas vezes é feito com base nos sintomas e pode ser confirmado por um teste de hidrogênio expirado, que detecta gases produzidos pelas bactérias.

                  O tratamento geralmente envolve antibióticos para reduzir o número de bactérias no intestino delgado. Mudanças na dieta, como a redução de alimentos ricos em fibras e açúcares que alimentam as bactérias, também podem ser recomendadas. Em alguns casos, pode ser necessário tratar condições subjacentes, como a doença do refluxo gastroesofágico ou a doença celíaca, que podem contribuir para o supercrescimento bacteriano.

                  A gestão dessa condição pode exigir ajustes de longo prazo na dieta e, às vezes, tratamentos repetidos com antibióticos. Acompanhamento médico é importante para monitorar a resposta ao tratamento e ajustar conforme necessário.
                  `}
                />
                <div className="h-[1px] w-full bg-pink-100" />
              </Acordeon.Root>
            </div>
          </div>
        </div>
        <div>
          <DivSections />
          <div className="lg:hidden  bg-line bg-center bg-no-repeat w-full h-1" />
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
                Qual é o tratamento clínico para o refluxo gastroesofágico?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                O tratamento clínico do refluxo gastroesofágico inclui mudanças
                no estilo de vida, como evitar alimentos que desencadeiam os
                sintomas, não comer antes de deitar e elevar a cabeceira da
                cama. Medicamentos como antiácidos, bloqueadores H2 e inibidores
                da bomba de prótons (IBP) são frequentemente usados para reduzir
                a acidez estomacal e aliviar os sintomas.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                O que é disbiose intestinal e como é tratada?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                Disbiose intestinal é um desequilíbrio das bactérias do
                intestino. O tratamento inclui a adoção de uma dieta
                equilibrada, rica em fibras e probióticos, que ajudam a
                restaurar a flora intestinal saudável. Em alguns casos, pode ser
                necessário o uso de antibióticos ou suplementos probióticos.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                Quais são os efeitos do uso crônico de inibidores da bomba de
                prótons?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                O uso prolongado de inibidores da bomba de prótons pode estar
                associado a efeitos colaterais como aumento do risco de
                infecções intestinais, deficiência de vitaminas (como B12 e
                magnésio) e, em casos raros, problemas renais. É importante que
                o uso desses medicamentos seja monitorado por um médico e
                limitado ao necessário.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                O que é a síndrome do intestino irritável (SII) e como é
                tratada?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                A síndrome do intestino irritável é um distúrbio
                gastrointestinal crônico caracterizado por sintomas como dor
                abdominal, inchaço, constipação e/ou diarreia. O tratamento
                envolve mudanças na dieta, como aumentar a ingestão de fibras e
                evitar alimentos desencadeadores, além de medicamentos para
                aliviar a dor, a constipação ou a diarreia. O manejo do estresse
                também é importante.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                O que é a síndrome do intestino irritável (SII) e como é
                tratada?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                A doença celíaca é uma reação autoimune ao glúten. O diagnóstico
                é feito através de exames de sangue e confirmado por biópsia
                intestinal. O tratamento principal é uma dieta estritamente sem
                glúten, o que ajuda a aliviar os sintomas e prevenir
                complicações a longo prazo.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                O que é a gastrite e como ela é tratada?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                Gastrite é a inflamação do revestimento do estômago. Pode ser
                causada por infecções, como a bactéria Helicobacter pylori, uso
                prolongado de anti-inflamatórios não esteroides, ou pelo consumo
                excessivo de álcool. O tratamento depende da causa, mas pode
                incluir antibióticos, medicamentos para reduzir a acidez
                estomacal e mudanças na dieta.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-red-200 text-lg font-merriweather font-bold">
                Como é tratada a constipação crônica?
              </h4>
              <p className="text-blue text-sm font-source leading-heading font-light">
                A constipação crônica é tratada com mudanças na dieta, incluindo
                aumento da ingestão de fibras e líquidos. Exercícios físicos
                regulares também ajudam. Em alguns casos, podem ser prescritos
                laxantes ou outros medicamentos para estimular o movimento
                intestinal
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
      <SectionEspecialidades defaultOption="hepatologia" />
    </main>
  )
}
