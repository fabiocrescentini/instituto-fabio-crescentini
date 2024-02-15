'use client'
import { usePathname, useRouter } from 'next/navigation'

interface LinkFooterProps {
  text: string
  href: string
}

export function LinkFooter({ text, href }: LinkFooterProps) {
  const pathname = usePathname()
  const route = useRouter()
  return (
    <div
      onClick={() => route.replace(href)}
      className={`${
        pathname === href ? 'text-yellow-400' : 'text-yellow-100'
      } font-lato font-bold text-sm text-right hover:text-yellow-400 transition duration-300 ease-in-out cursor-pointer`}
    >
      {text}
    </div>
  )
}
