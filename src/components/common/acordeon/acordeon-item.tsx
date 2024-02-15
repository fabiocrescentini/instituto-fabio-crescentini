'use client'
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'
import { RiAddFill } from 'react-icons/ri'
import { HiOutlineMinusSm } from 'react-icons/hi'

export function AcordeonItem({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <AccordionItem
      borderBottom="1px"
      borderBottomColor="#D9D9D9"
      className="w-full py-2 lg:px-5 border-b-[1px] border-gray-200"
    >
      {({ isExpanded }) => (
        <>
          <h2 className="text-black-400 hover:text-green-500 ">
            <AccordionButton
              _hover={{ bg: 'transparent' }}
              m={0}
              p={0}
              py={4}
              gap={1}
              alignItems="flex-start"
              className=" w-full "
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-lg font-merriweather text-red-200 font-bold    flex justify-between"
              >
                {title}
              </Box>
              {isExpanded ? (
                <HiOutlineMinusSm
                  fontSize="20px"
                  className="rounded-full bg-red-700 text-white"
                />
              ) : (
                <RiAddFill
                  fontSize="20px"
                  className="rounded-full bg-red-700 text-white"
                />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} m={0} p={0}>
            <p className="text-xs font-source font-light text-blue mb-3">
              {description.split('\n').map((paragraph, index) => (
                <span key={index}>
                  {paragraph}
                  <br />
                </span>
              ))}
            </p>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  )
}
