import Link from 'next/link'
import { Logo } from './logo'
import { LinkHeader } from './link-header'
import { RoundIcon } from '../common/round-icon'
import { FaInstagram, FaYoutube, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { SubMenu } from './sub-menu'
import { MenuMob } from './menu-mob'

export function Header() {
  return (
    <header className="fixed top-0 w-full h-24 lg:h-32 flex items-center bg-red-700 shadow-md z-30">
      <div className="container px-5 flex items-center justify-between gap-5">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden lg:flex lg:justify-around lg:gap-[3.75rem] lg:items-center  ">
          <LinkHeader text="Início" href="/" />
          {/* <LinkHeader text="Especialidades" href="/especialidades" /> */}
          <SubMenu />
          <LinkHeader text="Sobre" href="/sobre" />
          <LinkHeader text="Contato" href="/contato" />
        </nav>
        <div className="hidden lg:flex lg:space-x-3">
          <RoundIcon icon={FaInstagram} href="https://g1.globo.com/" />
          <RoundIcon icon={FaYoutube} href="https://g1.globo.com/" />
          <RoundIcon icon={FaFacebookF} href="https://g1.globo.com/" />
          <RoundIcon icon={FaWhatsapp} href="https://g1.globo.com/" />
        </div>
        <MenuMob />
      </div>
    </header>
  )
}
