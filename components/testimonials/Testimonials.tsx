"use client"
import React from 'react'
import Image from 'next/image'
import "./Testimonials.css"
import { Data } from "./Data"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonials">
        <h2 className="section__title">My client says</h2>
        <span className="section__subtitle">Mtestimonials</span>
        
        <Swiper className="testimonials__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        >
            {Data.map(({id, image, title, description}) => {
                return (
                    <SwiperSlide className="testimonials__card" key={id}>
                        <Image src={image} alt="" className='testimonials__img'></Image>
                        <h3 className="testimonials__name">{title}</h3>
                        <p className="testimonials__description">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Testimonials