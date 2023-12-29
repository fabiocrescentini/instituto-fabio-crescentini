'use client'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Button,
} from '@chakra-ui/react'

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function SubMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const pathname = usePathname()
  const pageActive = pathname.includes('/especialidades/')
  return (
    <>
      <Menu
        isOpen={isOpen}
        onClose={onClose}
        offset={[0, 0]}
        closeOnBlur={false}
      >
        <MenuButton
          _active={{ backgroundColor: 'transparent' }}
          backgroundColor="transparent"
          _hover={{
            backgroundColor: 'transparent',
            textColor: '#EBD966',
          }}
          isActive={isOpen}
          as={Button}
          px={0}
          py={0}
          rounded="none"
          _focus={{ boxShadow: 'none' }}
          border="none"
          boxShadow="none"
          right="none"
          outline="none"
          className={`${
            pageActive || isOpen ? 'text-yellow-400' : 'text-yellow-100'
          } flex justify-center outline-none group-hover:text-yellow-400 leading-6 group font-bold text-lg`}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          rightIcon={
            isOpen ? (
              <IoIosArrowUp className="" size={20} />
            ) : (
              <IoIosArrowDown size={20} />
            )
          }
        >
          <span>Especialidades</span>
          <div
            className={`${
              pageActive
                ? "content-[''] bg-yellow-400 h-[2px] absolute w-10 lg:w-[100%] left-0 -bottom-[5px] "
                : "after:content-[''] after:bg-yellow-400 after:h-[2px] after:absolute after:w-[0%] after:left-0 after:-bottom-[5px] after:duration-300 group-hover:after:w-10 lg:w-[100%]"
            }`}
          />
        </MenuButton>

        <MenuList
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          py={0}
          rounded="md"
          width="330px"
          className="bg-gray-100  h-[170px] flex flex-col justify-center font-lato text-lg text-red-700 font-bold p-4  rounded-md space-y-1 items-center "
        >
          <MenuItem className="group">
            <Link
              href="/especialidades/hepatologia"
              className="group-hover:text-red-300"
            >
              Hepatologia
            </Link>
          </MenuItem>
          <div className="w-full h-[1px] bg-gray-200" />
          <MenuItem className="group">
            <Link href="#" className="group-hover:text-red-300">
              Doenças do Pâncreas e via biliar
            </Link>
          </MenuItem>
          <div className="w-full h-[1px] bg-gray-200" />
          <MenuItem className="group">
            <Link href="#" className="group-hover:text-red-300">
              Cirurgia do Aparelho Digestivo
            </Link>
          </MenuItem>
          <div className="w-full h-[1px] bg-gray-200" />
          <MenuItem className="group">
            <Link href="#" className="group-hover:text-red-300">
              Gastroenterologia
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}
