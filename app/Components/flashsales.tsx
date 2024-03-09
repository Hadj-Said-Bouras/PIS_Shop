    "use client"
    import Image from 'next/image'
    import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
    import { HiOutlineArrowSmallRight, HiOutlineArrowSmallLeft  } from "react-icons/hi2";
import { IoEyeOutline } from 'react-icons/io5';
    import { MdOutlineStarPurple500 } from "react-icons/md";

    import { Swiper, SwiperSlide, useSwiper,  } from 'swiper/react';
    
    import 'swiper/swiper-bundle.css'


    function FlashSales() {
        const [count, setCount] = useState(1)
        const swiper = useSwiper()


    return (
        <div>
            <div className='w-full h-full'>

                <div className='flex flex-row items-center bottom-[450px] sm:bottom-60 relative ml-1 sm:ml-10'>
                    <div className='w-[20px] h-[60px] bg-red-500 rounded'></div>
                    <div className='ml-2'>Today's</div>
                    <h3 className='text-2xl font-bold relative ml-10 sm:ml-[100px]  md:mr-0 md:ml-[-90px] top-0 md:top-[130px]'>Flash Sales</h3>
                </div>
                <div className='flex flex-row bottom-[400px] sm:bottom-[200px]  relative '>
                    <div className='flex flex-row gap-4 sm:gap-9 mx-auto ml-[50px] sm:ml-[150px] md:ml-[300px] lg:ml-[400px] xl:ml-[470px]'>
                        <h5>Days:</h5>
                        <h5>Hours:</h5>
                        <h5>Minutes:    </h5>
                        <h5>Seconds:</h5>
                    </div>
                    <div className='flex flex-row absolute ml-[60px] md:ml-80 sm:ml-[170px] xl:ml-[500px] mx-auto lg:ml-[410px] mt-10 md:mt-10 xl:mt-10 text-3xl sm:text-4xl font-bold tracking-widest  '>
                        24 : 23 : 43 : 23
                    </div>
                    <div className='text-black  text-4xl flex relative hidden lg:flex right-20 gap-5 top-20 xl:top-10  '>
                    <HiOutlineArrowSmallLeft  className='bg-gray-200 rounded-full'/>
                        
                    <HiOutlineArrowSmallRight  className='bg-gray-200 rounded-full'/>
                    </div>
                </div>
                    
                    <Swiper 
                        
                        spaceBetween={50}
                        slidesPerView={1}
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
                            slidesPerView: 4,
                        }, 
                        1200:{
                            slidesPerView: 4,
                        },
                        }}
                        className='bottom-[300px] sm:bottom-0 left-auto'
                        >

                        <SwiperSlide className=' flex flex-row  ml-2 mr-2'>
                            <div className='h-80 w-80 flex  flex-col gap-2'>
                            <div className='absolute ml-[280px] p-1 mt-5 bg-white z-20  rounded-full  '>
        
                            <IoEyeOutline className=' text-2xl'/>
                            </div>
                            <div className='absolute ml-[280px] p-1 mt-[60px] bg-white z-20  rounded-full '>
        
                            <AiOutlineHeart className='text-2xl bg-white rounded-full'/>
                            </div>
                                    <div className='w-80 h-[215px]  overflow-hidden top-0 rounded z-0' >
                                      <Image src={'/p1.jpg'}  alt='dsfa' width={800} height={300} className='top-[-150px] relative z-10' />                                
                                        </div>
                                        <h1 className='font-bold tracking-wider'>Gamming Mouse</h1>
                                        <p className='text-red-600'>12$ <span className='line-through text-gray-500'>$35</span></p>
                                        <div className='flex flex-row text-yellow-400 items-center'>
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <p className='text-gray-500 ml-2'>(88)</p>
                                        </div>
                                  
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=' flex flex-row ml-[100px] sm:ml-0'>
                            <div className='h-80 w-80 flex  flex-col gap-2  ml-2 mr-2'>
                            <div className='absolute ml-[280px] p-1 mt-5 bg-white z-20  rounded-full  '>
        
        <IoEyeOutline className=' text-2xl'/>
        </div>
        <div className='absolute ml-[280px] p-1 mt-[60px] bg-white z-20  rounded-full '>

        <AiOutlineHeart className='text-2xl bg-white rounded-full'/>
        </div>
                                    <div className='w-80 h-[220px]  overflow-hidden top-0 rounded' >
                                      <Image src={'/p2.jpg'}  alt='dsfa' width={800} height={300} />
                                    </div>
                                        <h1 className='font-bold tracking-wider'>Gamming Mouse</h1>
                                        <p className='text-red-600'>12$ <span className='line-through text-gray-500'>$35</span></p>
                                        <div className='flex flex-row text-yellow-400 items-center'>
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <p className='text-gray-500 ml-2'>(88)</p>
                                        </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=' flex flex-row flex flex-row ml-[100px] sm:ml-0'>
                                        <div className='h-80 w-80 flex  flex-col gap-2  ml-2 mr-2'>
                                        <div className='absolute ml-[280px] p-1 mt-5 bg-white z-20  rounded-full  '>
        
        <IoEyeOutline className=' text-2xl'/>
        </div>
        <div className='absolute ml-[280px] p-1 mt-[60px] bg-white z-20  rounded-full '>

        <AiOutlineHeart className='text-2xl bg-white rounded-full'/>
        </div>
                                    <div className='w-80 h-[220px]  overflow-hidden top-0 rounded' >
                                      <Image src={'/p3.jpg'}  alt='dsfa' width={800} height={300} />
                                    </div>
                                        <h1 className='font-bold tracking-wider'>Gamming Mouse</h1>
                                        <p className='text-red-600'>12$ <span className='line-through text-gray-500'>$35</span></p>
                                        <div className='flex flex-row text-yellow-400 items-center'>
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <p className='text-gray-500 ml-2'>(88)</p>
                                        </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=' flex flex-row flex flex-row ml-[100px] sm:ml-0'>
                            <div className='h-80 w-80 flex  flex-col gap-2  ml-2 mr-2'>
                            <div className='absolute ml-[280px] p-1 mt-5 bg-white z-20  rounded-full  '>
        
        <IoEyeOutline className=' text-2xl'/>
        </div>
        <div className='absolute ml-[280px] p-1 mt-[60px] bg-white z-20  rounded-full '>

        <AiOutlineHeart className='text-2xl bg-white rounded-full'/>
        </div>
                                    <div className='w-80 h-[220px]  overflow-hidden top-0 rounded' >
                                      <Image src={'/p4.jpg'}  alt='dsfa' width={800} height={300} />
                                    </div>
                                        <h1 className='font-bold tracking-wider'>Gamming Mouse</h1>
                                        <p className='text-red-600'>12$ <span className='line-through text-gray-500'>$35</span></p>
                                        <div className='flex flex-row text-yellow-400 items-center'>
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <p className='text-gray-500 ml-2'>(88)</p>
                                        </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=' flex flex-row flex flex-row ml-[100px] sm:ml-0'>
                            <div className='h-80 w-80 flex  flex-col gap-2 ml-2 mr-2 '>
                            <div className='absolute ml-[280px] p-1 mt-5 bg-white z-20  rounded-full  '>
        
        <IoEyeOutline className=' text-2xl'/>
        </div>
        <div className='absolute ml-[280px] p-1 mt-[60px] bg-white z-20  rounded-full '>

        <AiOutlineHeart className='text-2xl bg-white rounded-full'/>
        </div>
                                    <div className='w-80 h-[220px]  overflow-hidden top-0 rounded' >
                                      <Image src={'/p1.jpg'}  alt='dsfa' width={800} height={300} className='top-[-150px] relative' />
                                    </div>
                                        <h1 className='font-bold tracking-wider'>Gamming Mouse</h1>
                                        <p className='text-red-600'>12$ <span className='line-through text-gray-500'>$35</span></p>
                                        <div className='flex flex-row text-yellow-400 items-center'>
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <p className='text-gray-500 ml-2'>(88)</p>
                                        </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=' flex flex-row flex flex-row ml-[100px] sm:ml-0'>
                            <div className='h-80 w-80 flex  flex-col gap-2  ml-2 mr-2'>
                            <div className='absolute ml-[280px] p-1 mt-5 bg-white z-20  rounded-full  '>
        
        <IoEyeOutline className=' text-2xl'/>
        </div>
        <div className='absolute ml-[280px] p-1 mt-[60px] bg-white z-20  rounded-full '>

        <AiOutlineHeart className='text-2xl bg-white rounded-full'/>
        </div>
                                    <div className='w-80 h-[220px]  overflow-hidden top-0 rounded' >
                                      <Image src={'/p2.jpg'}  alt='dsfa' width={800} height={300} />
                                    </div>
                                        <h1 className='font-bold tracking-wider'>Gamming Mouse</h1>
                                        <p className='text-red-600'>12$ <span className='line-through text-gray-500'>$35</span></p>
                                        <div className='flex flex-row text-yellow-400 items-center'>
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <p className='text-gray-500 ml-2'>(88)</p>
                                        </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=' flex flex-row flex flex-row ml-[100px] sm:ml-0'>
                            <div className='h-80 w-80 flex  flex-col gap-2  ml-2 mr-2'>
                            <div className='absolute ml-[280px] p-1 mt-5 bg-white z-20  rounded-full  '>
        
        <IoEyeOutline className=' text-2xl'/>
        </div>
        <div className='absolute ml-[280px] p-1 mt-[60px] bg-white z-20  rounded-full '>

        <AiOutlineHeart className='text-2xl bg-white rounded-full'/>
        </div>
                                    <div className='w-80 h-[220px]  overflow-hidden top-0 rounded' >
                                      <Image src={'/p3.jpg'}  alt='dsfa' width={800} height={300} />
                                    </div>
                                        <h1 className='font-bold tracking-wider'>Gamming Mouse</h1>
                                        <p className='text-red-600'>12$ <span className='line-through text-gray-500'>$35</span></p>
                                        <div className='flex flex-row text-yellow-400 items-center'>
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <p className='text-gray-500 ml-2'>(88)</p>
                                        </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=' flex flex-row flex flex-row ml-[100px] sm:ml-0'>
                            <div className='h-80 w-80 flex  flex-col gap-2  ml-2 mr-2'>
                            <div className='absolute ml-[280px] p-1 mt-5 bg-white z-20  rounded-full  '>
        
        <IoEyeOutline className=' text-2xl'/>
        </div>
        <div className='absolute ml-[280px] p-1 mt-[60px] bg-white z-20  rounded-full '>

        <AiOutlineHeart className='text-2xl bg-white rounded-full'/>
        </div>
                                    <div className='w-80 h-[220px]  overflow-hidden top-0 rounded' >
                                      <Image src={'/p4.jpg'}  alt='dsfa' width={800} height={300} />
                                    </div>
                                        <h1 className='font-bold tracking-wider'>Gamming Mouse</h1>
                                        <p className='text-red-600'>12$ <span className='line-through text-gray-500'>$35</span></p>
                                        <div className='flex flex-row text-yellow-400 items-center'>
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <MdOutlineStarPurple500 />
                                            <p className='text-gray-500 ml-2'>(88)</p>
                                        </div>
                            </div>
                        </SwiperSlide>
                </Swiper>
                        
            

                <div className='flex justify-center  top-[1050px] absolute sm:static mb-10 mt-20 w-full'>
                    <button className=' p-3 bg-red-400 text-white hover:bg-red-500'>View All Products</button>
                </div>
            
            </div>
        </div>
    )
    }

    export default FlashSales