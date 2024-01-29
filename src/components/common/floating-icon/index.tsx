'use client'
import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { RoundIcon } from '../round-icon'

export function FloatingIcon() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100

      const scrolled = window.scrollY > scrollThreshold

      setIsVisible(scrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div
      className={`fixed right-5 bottom-5 lg:right-10 lg:bottom-24 z-20 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-500 ease-in-out`}
    >
      <RoundIcon
        variant="green"
        icon={FaWhatsapp}
        size={35}
        href="https://linktr.ee/drfabiocrescentini"
      />
    </div>
  )
}
