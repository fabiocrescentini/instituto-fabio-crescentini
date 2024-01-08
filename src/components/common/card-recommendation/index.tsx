import Image from 'next/image'
import { Box } from '../box'

export function CardRecommendation() {
  return (
    <Box>
      <div className="flex flex-col space-y-3 max-w-[21.875rem]">
        <div className="flex flex-row justify-between items-start">
          <div className="flex gap-5 w-full items-start">
            <Image
              src="/home/user-example.png"
              width={50}
              height={50}
              quality={100}
              alt="image user"
              className=" rounded-full"
            />
            <div>
              <p className="font-inter font-medium text-gray-700 text-lg">
                Manuela Franco
              </p>
              <p className="text-gray-400 text-xxs">13/11/2023</p>
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
        <p>
          Excelente profissional! O Dr. Fábio é muito atensioso e pontual,
          explica muito bem sobre o diagnóstico e o tratamento.
        </p>
      </div>
    </Box>
  )
}
