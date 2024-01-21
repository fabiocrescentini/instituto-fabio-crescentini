import Link from 'next/link'
interface LinkMenuMobProps {
  text: string
  href: string
}

export function LinkMenuMob({ text, href }: LinkMenuMobProps) {
  return (
    <Link href={href}>
      <span className="py-3 border-t-[1px] border-gray-200 text-red-700 text-md font-lato font-bold flex justify-end items-center ">
        {text}
      </span>
    </Link>
  )
}
