import Image from 'next/image'

interface CardUnitProps {
  url: string
  title: string
}

export function CardUnit({ url, title }: CardUnitProps) {
  return (
    <div className="flex h-auto w-auto flex-col justify-center items-center space-y-5">
      <Image
        src={url}
        alt={title}
        width={500}
        height={330}
        className="rounded-md shadow-md w-full h-auto lg:w-[31.25rem] lg:h-[20.625rem]"
      />
      <span className="text-blue text-sm font-source font-light">{title}</span>
    </div>
  )
}
