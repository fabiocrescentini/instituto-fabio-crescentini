// RoundIconLink.tsx
'use client'

import Link from 'next/link'

interface RoundIconLinkProps {
  href: string
  className: string
  iconElement: React.ReactNode
}

export function RoundIconLink({
  href,
  className,
  iconElement,
}: RoundIconLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      target="_blank"
      onClick={() => gtag_report_conversion_geral()}
    >
      {iconElement}
    </Link>
  )
}
