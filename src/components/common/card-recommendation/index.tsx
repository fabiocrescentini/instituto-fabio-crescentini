import Image from 'next/image'
import { Box } from '../box'

interface CardRecommendationProps {
  name: string
  date: string
  text: string
  urlImg: string
}

export function CardRecommendation({
  date,
  name,
  text,
  urlImg,
}: CardRecommendationProps) {
  return (
    <Box>
      <div className="flex flex-col space-y-3 max-w-[21.875rem]">
        <div className="flex flex-row justify-between items-start">
          <div className="flex gap-5 w-full items-start">
            <Image
              src={urlImg}
              width={50}
              height={50}
              quality={100}
              alt="image user"
              className=" rounded-full"
            />
            <div>
              <p className="font-inter font-medium text-gray-700 text-sm lg:text-lg">
                {name}
              </p>
              <p className="text-gray-400 text-xxs">{date}</p>
            </div>
          </div>
          <Image
            src="/home/Google.png"
            width={20}
            height={20}
            alt="logo google"
          />
        </div>
        <div className="flex">
          <Image
            src="/home/start.png"
            width={20}
            height={20}
            quality={100}
            alt="image start"
          />
          <Image
            src="/home/start.png"
            width={20}
            height={20}
            quality={100}
            alt="image start"
          />
          <Image
            src="/home/start.png"
            width={20}
            height={20}
            quality={100}
            alt="image start"
          />
          <Image
            src="/home/start.png"
            width={20}
            height={20}
            quality={100}
            alt="image start"
          />
          <Image
            src="/home/start.png"
            width={20}
            height={20}
            quality={100}
            alt="image start"
          />
        </div>
        <p className="text-xxs leading-heading">{text}</p>
      </div>
    </Box>
  )
}
