import { Box } from '../box'

interface CardAwardsProps {
  title: string
  subTitle: string
  description: string
  date: string
}

export function CardAwards({
  title,
  subTitle,
  description,
  date,
}: CardAwardsProps) {
  return (
    <Box>
      <div className="flex md:min-h-40 h-auto flex-col space-y-2 lg:min-h-32 ">
        <h4 className="font-merriweather font-bold text-sm lg:text-md text-red-200">
          {title}
        </h4>
        <div className="h-[0.0625rem] w-6/12 bg-gray-200" />
        <div>
          <p className="text-red-200 font-medium font-source leading-heading text-xxs lg:text-sm">
            {subTitle}
          </p>
          <p className="text-blue font-light font-source leading-heading text-xxs lg:text-sm">
            {description}
          </p>
        </div>
        <span className="text-blue font-light font-source leading-heading text-xxs lg:text-sm ">
          {date}
        </span>
      </div>
    </Box>
  )
}
