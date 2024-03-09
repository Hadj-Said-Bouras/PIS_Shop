"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { HiOutlineArrowSmallRight, HiOutlineArrowSmallLeft  } from "react-icons/hi2";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'





function Categories() {
  return (
    <div className='w-full h-2/6'>
       <div className='flex flex-row items-center ml-2 sm:ml-10 mt-20 gap-2'>
            <div className='w-[20px] h-[60px] bg-red-500  rounded'></div>
            <p className='text-red-400 font-bold'>Categories:</p>
        </div> 

        <div className='flex flex-row justify-between items-center mt-10 ml-10 mr-10 mb-10'>
          <h2 className='font-bold sm:text-2xl hidden sm:flex'>Browse By Categorie</h2>
            <div className='text-black hidden sm:flex text-4xl flex gap-5 justify-center'>
                      <HiOutlineArrowSmallLeft  className='bg-gray-200 rounded-full'  />
                      <HiOutlineArrowSmallRight  className='bg-gray-200 rounded-full'/>
            </div>
          </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          breakpoints={{
            768: { // Adjust this breakpoint as needed for your mobile design
            slidesPerView: 2,
        },

        480: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 6,
        }, 
        1200:{
            slidesPerView: 6,
        },
        }}
        className='flex justify-center'
        >
        
          <SwiperSlide>
           
            

            <div className='flex flex-col items-center w-[170px] h-[145px] border-2 border-gray-300 ml-2'>

              <Image src={'/phone.png'} width={100} height={90} alt='phones' className='mx-auto'/>
              <p>Iphones</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center w-[170px] h-[145px] border-2 border-gray-300'>

              <Image src={'/phone.png'} width={100} height={90} alt='phones' className='mx-auto'/>
              <p>Iphones</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center w-[170px] h-[145px] border-2 border-gray-300'>

              <Image src={'/phone.png'} width={100} height={90} alt='phones' className='mx-auto'/>
              <p>Iphones</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center w-[170px] h-[145px] border-2 border-gray-300'>

              <Image src={'/phone.png'} width={100} height={90} alt='phones' className='mx-auto'/>
              <p>Iphones</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center w-[170px] h-[145px] border-2 border-gray-300'>

              <Image src={'/phone.png'} width={100} height={90} alt='phones' className='mx-auto'/>
              <p>Iphones</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center w-[170px] h-[145px] border-2 border-gray-300'>

              <Image src={'/phone.png'} width={100} height={90} alt='phones' className='mx-auto'/>
              <p>Iphones</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center w-[170px] h-[145px] border-2 border-gray-300'>

              <Image src={'/phone.png'} width={100} height={90} alt='phones' className='mx-auto'/>
              <p>Iphones</p>
            </div>
          </SwiperSlide>
        </Swiper>
        
         <div className="h-[1px] w-[1300px] mx-auto bg-gray-400 mt-20"></div>
    </div>
  )
}

export default Categories;