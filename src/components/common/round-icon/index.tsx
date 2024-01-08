import Link from 'next/link'
import { ButtonHTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [`h-8 w-8 flex justify-center items-center rounded-full`],
  variants: {
    variant: {
      white: [
        'bg-yellow-50 text-red-700',
        'group-hover:text-red-300',
        'transition-all duration-300 ease-in-out',
      ],
      red: [
        'bg-red-700 text-yellow-50',
        'group-hover:bg-red-300',
        'transition-all duration-300 ease-in-out',
      ],
    },
  },
  defaultVariants: {
    variant: 'white',
  },
})

interface RoundIconProps
  extends ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof button> {
  icon: React.ElementType
  href: string
  size?: number
}
export function RoundIcon({
  href,
  variant,
  className,
  icon: Icon,
  size = 20,
  ...props
}: RoundIconProps) {
  return (
    <div className="group" {...props}>
      <Link
        href={href}
        className={button({ variant, className })}
        target="_blank"
      >
        <Icon size={size} />
      </Link>
    </div>
  )
}
