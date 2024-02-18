'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Twirl as Hamburger } from 'hamburger-react'
import { FaInstagram, FaYoutube, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

import { useState } from 'react'
import { LinkMenuMob } from './link-menu-mob'
import { RoundIcon } from '../common/round-icon'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'

export function MenuMob() {
  const [isOpen, setIsOpen] = useState(false)

  function handleClose() {
    setIsOpen(false)
  }
  return (
    <>
      <div className="lg:hidden ">
        <div className="text-yellow-100">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={30} />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed top-0 left-0 w-full h-full bg-gray-700/20 flex justify-end items-start z-50"
            >
              {' '}
              <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                exit={{ x: '100vw' }}
                transition={{ duration: 0.5 }}
                className="bg-yellow-100 rounded-l-lg px-6 py-9 w-[87%] h-[93%]  flex flex-col justify-between items-end"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <div className="flex justify-end text-red-700 font-bold">
                    <Hamburger toggled={isOpen} toggle={setIsOpen} size={25} />
                  </div>
                  <ul className="flex flex-col mt-6 justify-start ">
                    <li onClick={handleClose}>
                      <LinkMenuMob text="Início" href="/" />
                    </li>
                    <li onClick={handleClose}>
                      {' '}
                      <LinkMenuMob text="Sobre" href="/sobre" />
                    </li>
                    <li>
                      <Accordion
                        allowToggle
                        className="py-3 border-t-[1px] border-gray-200 text-red-700 text-md font-lato font-bold flex justify-end items-center"
                      >
                        <AccordionItem>
                          <h2>
                            <AccordionButton className="flex justify-end">
                              <Box
                                as="span"
                                className="text-red-700 flex justify-end"
                              >
                                Especialidades
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel>
                            <ul className="space-y-4 py-4">
                              <li
                                className="flex justify-end items-center"
                                onClick={handleClose}
                              >
                                <Link href="/especialidades/hepatologia">
                                  Hepatologia
                                </Link>
                              </li>
                              <li
                                className="flex justify-end items-center"
                                onClick={handleClose}
                              >
                                <Link
                                  href={'/especialidades/doencas-do-pancreas'}
                                >
                                  Doenças do Pâncreas e via biliar
                                </Link>
                              </li>
                              <li
                                className="flex justify-end items-center"
                                onClick={handleClose}
                              >
                                <Link
                                  href={
                                    '/especialidades/cirurgia-aparelho-digestivo'
                                  }
                                >
                                  Cirurgia do Aparelho Digestivo
                                </Link>
                              </li>
                              <li
                                className="flex justify-end items-center"
                                onClick={handleClose}
                              >
                                <Link
                                  href={'/especialidades/gastroenterologia'}
                                >
                                  Gastroenterologia
                                </Link>
                              </li>
                            </ul>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </li>
                    <li onClick={handleClose}>
                      <LinkMenuMob text="Contato" href="/#contato" />
                    </li>
                  </ul>
                </div>

                <div className="flex bottom-0 w-full justify-center space-x-4">
                  <RoundIcon
                    variant="red"
                    icon={FaInstagram}
                    href="https://www.instagram.com/InstitutoFabioCrescentini/"
                  />
                  <RoundIcon
                    variant="red"
                    icon={FaYoutube}
                    href="https://www.youtube.com/@fabiocrescentini1686"
                  />
                  <RoundIcon
                    variant="red"
                    icon={FaFacebookF}
                    href="https://www.facebook.com/InstitutoFabioCrescentini/"
                  />
                  <RoundIcon
                    variant="red"
                    icon={FaWhatsapp}
                    href="https://linktr.ee/drfabiocrescentini"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
