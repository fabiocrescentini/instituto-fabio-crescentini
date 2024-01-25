'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import '@/styles/carousel.css'

import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Skeleton, useMediaQuery } from '@chakra-ui/react'

interface ICarouselProps<T> {
  renderItem: (item: T) => React.ReactNode
  items: T[]
  nextButtonRef: React.RefObject<HTMLButtonElement>
  prevButtonRef: React.RefObject<HTMLButtonElement>
}

export function Carousel<T>({
  renderItem,
  items,
  nextButtonRef,
  prevButtonRef,
}: ICarouselProps<T>) {
  const [isClient, setIsClient] = useState(false)
  const swiperRef: any = useRef(null)
  const [lg] = useMediaQuery('(max-width: 1024px)')
  const [sm] = useMediaQuery('(max-width: 425px)')

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.pause()
    }
  }

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start()
    }
  }
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <div
      className="flex justify-center w-dvw  container px-5 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Suspense fallback={<Skeleton height="300px" width="100%" />}>
        {isClient && (
          <Swiper
            autoplay={{
              delay: lg ? 3500 : 3000,
            }}
            pagination={{
              clickable: true,
            }}
            effect={'fade'}
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={lg ? (sm ? 1 : 2) : 3}
            slidesPerGroup={1}
            loop={true}
            ref={swiperRef}
            navigation={{
              nextEl: nextButtonRef.current,
              prevEl: prevButtonRef.current,
            }}
            className="flex lg:gap-2 mySwiper"
          >
            {items.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center px-10 lg:px-5 pb-16 w-full lg:w-auto"
              >
                <div className="">{renderItem(item)}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Suspense>
    </div>
  )
}
