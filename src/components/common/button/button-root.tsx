import { ButtonHTMLAttributes, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import Link from 'next/link'

const button = tv({
  base: [''],
  variants: {
    variant: {
      default: [
        'bg-red-700 flex items-center justify-center max-h-12 rounded-full px-[1.875rem] py-[0.75rem] gap-2',
        'font-merriweather font-bold text-yellow-100 text-md',
        'group-hover:bg-red-300',
        'transition-all duration-300 ease-in-out',
      ],
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface ButtonRootProps
  extends ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof button> {
  children: ReactNode
  href: string
}

export function ButtonRoot({
  children,
  variant,
  className,
  href,
  ...props
}: ButtonRootProps) {
  return (
    <div {...props} className="group">
      <Link href={href} className={button({ variant, className })}>
        {children}
      </Link>
    </div>
  )
}
