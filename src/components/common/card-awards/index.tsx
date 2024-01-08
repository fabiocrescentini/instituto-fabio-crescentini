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
      <div className="flex flex-col space-y-2">
        <h4 className="font-merriweather font-bold text-md text-red-200">
          {title}
        </h4>
        <div className="h-[0.0625rem] w-5/12 bg-gray-200" />
        <div>
          <p className="text-red-200 font-medium font-source leading-heading text-sm">
            {subTitle}
          </p>
          <p className="text-blue font-light font-source leading-heading text-sm">
            {description}
          </p>
        </div>
        <span className="text-blue font-light font-source leading-heading text-sm">
          {date}
        </span>
      </div>
    </Box>
  )
}
