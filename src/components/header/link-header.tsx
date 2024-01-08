'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface LinkHeaderProps {
  text: string
  href: string
  handleClick?: () => void
}
export function LinkHeader({ text, href, handleClick }: LinkHeaderProps) {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className="relative group font-bold text-lg"
      onClick={() => handleClick}
    >
      <span
        className={`${
          pathname === href ? 'text-yellow-400' : 'text-yellow-100'
        } leading-6 group-hover:text-yellow-400`}
      >
        {text}
      </span>
      <div
        className={`${
          pathname === href
            ? "content-[''] bg-yellow-400 h-[2px] absolute w-[100%] left-0 -bottom-[5px] "
            : "after:content-[''] after:bg-yellow-400 after:h-[2px] after:absolute after:w-[0%] after:left-0 after:-bottom-[5px] after:duration-300 group-hover:after:w-[100%]"
        }`}
      />
    </Link>
  )
}
