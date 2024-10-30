import { RoundIcon } from '../common/round-icon'
import { FaInstagram, FaYoutube, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlinePhoneIphone } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import { Logo } from './logo'
import { LinkFooter } from './link-footer'

export function Footer() {
  return (
    <footer className="w-full h-auto bg-red-700 py-10 lg:py-14 z-40">
      <div className=" lg:container px-5 h-full flex flex-col items-center lg:items-stretch  lg:flex-row justify-between">
        <div className="flex  justify-center items-center pt-6 lg:pt-0 ml-0 lg:after:ml-10 lg:after:content-[''] lg:after:w-[1px] lg:after:h-full lg:after:bg-red-200 order-2 lg:order-1">
          <div className="flex flex-col space-y-6 items-center justify-center ">
            <div className=" order-2 lg:order-1 pt-3">
              <Logo />
            </div>
            <div className="flex gap-3 lg:gap-0 space-x-1.5 order-1 lg:order-2">
              <RoundIcon
                icon={FaInstagram}
                href="https://www.instagram.com/InstitutoFabioCrescentini/"
              />
              <RoundIcon
                icon={FaYoutube}
                href="https://www.youtube.com/@fabiocrescentini1686"
              />
              <RoundIcon
                icon={FaFacebookF}
                href="https://www.facebook.com/InstitutoFabioCrescentini/"
              />
              <RoundIcon
                icon={FaWhatsapp}
                href="https://linktr.ee/drfabiocrescentini"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row text-center lg:text-left justify-evenly items-center lg:items-baseline lg:flex-wrap w-full space-y-6 order-1 lg:order-2 ">
          {/* <div className="lg:ml-10 space-y-4 ">
            <div className="flex gap-2 items-center text-yellow-400 font-merriweather text-md font-bold">
              <FaLocationDot size={20} />
              <h3>Unidade - São Paulo</h3>
            </div>
            <ul className="text-yellow-100 text-xxs font-medium">
              <li>Av. Brig. Faria Lima, 3900</li>
              <li>7 º andar, Itaim Bibi - São Paulo/SP</li>
              <li>Cep 04538-132</li>
            </ul>

            <div className="flex gap-2 items-center">
              <MdOutlinePhoneIphone size={20} className="text-yellow-400" />
              <div className="flex gap-1 ">
                <h4 className="font-lato text-xxs font-medium text-yellow-400">
                  Telefone:
                </h4>
                <span className="font-lato text-xxs font-medium text-yellow-100">
                  (11) 91959-8000
                </span>
              </div>
            </div>
            <div className="hidden lg:flex gap-2 items-center">
              <AiOutlineMail size={20} className="text-yellow-400" />

              <span className="font-lato text-xxs font-medium text-yellow-100">
                contato@institutofabiocrescentini.com.br
              </span>
            </div>
          </div> */}
          <div className="space-y-4 ">
            <div className="flex gap-2 justify-center lg:justify-stretch items-center text-yellow-400 font-merriweather text-md font-bold">
              <FaLocationDot size={20} />
              <h3>Unidade - Santos</h3>
            </div>
            <ul className="text-yellow-100 text-xxs font-medium">
              <li>Av. Conselheiro Nébias, 754</li>
              <li>Conj. 2401, Boqueirão - Santos/SP</li>
              <li>Cep 11045-002</li>
            </ul>

            <div className="flex gap-2 items-center">
              <MdOutlinePhoneIphone size={20} className="text-yellow-400" />
              <div className="flex gap-2 items-center">
                <h4 className="font-lato text-xxs font-medium text-yellow-400">
                  Telefone:
                </h4>
                <span className="font-lato text-xxs font-medium text-yellow-100 ">
                  (13) 3041-5988
                </span>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 bg-yellow-400 rounded-full" />
                  <span className="font-lato text-xxs font-medium text-yellow-100">
                    (13) 3041-5987
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden gap-2 items-center">
            <AiOutlineMail size={20} className="text-yellow-400" />

            <span className="font-lato text-xxs font-medium text-yellow-100">
              contato@institutofabiocrescentini.com.br
            </span>
          </div>
          <div className="flex flex-col space-y-4 lg:space-y-1.5 items-center lg:items-end border-y-[1px] border-red-200 py-6 lg:border-none ">
            <LinkFooter href="/" text="Início" />
            <LinkFooter href="/sobre" text="Sobre" />
            <LinkFooter href="/especialidades/hepatologia" text="Hepatologia" />
            <LinkFooter
              href="/especialidades/doencas-do-pancreas"
              text="Doenças do Pâncreas e Via Biliar"
            />
            <LinkFooter
              href="/especialidades/cirurgia-aparelho-digestivo"
              text="Cirurgia do Aparelho Digestivo"
            />
            <LinkFooter
              href="/especialidades/gastroenterologia"
              text="Gastroenterologia"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
