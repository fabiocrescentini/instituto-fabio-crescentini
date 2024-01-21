import Image from 'next/image'
import { Button } from '../common/button'
import { CardAwards } from '../common/card-awards'
import { DivSections } from '../common/div-sections'
import { ArrowRight } from '@/components/common/icons/arrow-right'

export function SectionInfo() {
  return (
    <section className="h-auto bg-gradient bg-cover bg-no-repeat flex flex-col space-y-10">
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
              Paulo (2000), pós-graduação em Cirurgia Geral pela FMUSP (2003) e
              pós-graduação em Cirurgia do Aparelho Digestivo pela FMUSP (2005).
              Como extensão profissional, realizou estágios de transplante de
              fígado intervivos e cirurgia hepática em Taiwan e Coréia do Sul,
              além de estágios de transplante de pâncreas nos Estados Unidos.
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
              fígado, pâncreas e ruim; cirurgia de doadores vivos e falecidos de
              fígados, pâncreas e ruim; assistência a pacientes transplantados.
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
  )
}
