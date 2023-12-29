import Link from 'next/link'

interface RoundIconProps {
  icon: React.ElementType
  href: string
}
export function RoundIcon({ href, icon: Icon }: RoundIconProps) {
  return (
    <div className="group transition-all duration-300 ease-in-out">
      <Link
        href={href}
        className="h-8 w-8 flex justify-center items-center rounded-full bg-yellow-50 group-hover:bg-red-300 transition-all duration-300 ease-in-out"
        target="_blank"
      >
        <Icon
          size={20}
          className="text-red-700 group-hover:text-yellow-50 transition-all duration-300 ease-in-out"
        />
      </Link>
    </div>
  )
}
