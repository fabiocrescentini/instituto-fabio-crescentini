'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface LinkFooterProps {
  text: string
  href: string
}

export function LinkFooter({ text, href }: LinkFooterProps) {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className={`${
        pathname === href ? 'text-yellow-400' : 'text-yellow-100'
      } font-lato font-bold text-sm text-right hover:text-yellow-400 transition duration-300 ease-in-out`}
    >
      {text}
    </Link>
  )
}
