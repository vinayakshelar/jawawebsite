'use client';
import React from 'react'
import Image from "next/image";
import Slider from "react-slick";
import "./style.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AllStories = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]

    };
    return (
        <div className='bg-[#000] allStories'>
            <div className='p-8'>
                <div className='block md:flex justify-between items-center'>
                    <h1 className='font-SourceSerifProRegular text-[24px] md:text-[45px] text-[#fff] leading-[28px] md:leading-[58px]'>Catch the latest Jawa Yezdi news on<br /> new models, reviews, and events.</h1>
                    <button className='text-[#fff] md:mt-[0] mt-[20px]'>View All Stories <ArrowDownwardIcon /></button>
                </div>
                <div className='bdrWrap mt-5'></div>
                <div className='w-[100%] flex md:justify-end md:text-right justify-start text-left pt-6 '>
                    <div className="slider-container w-[100%] md:w-[80%]">
                        <Slider {...settings}>
                            <div>
                                <Image
                                    src="/images/allStories1.png"
                                    alt=""
                                    width={436}
                                    height={459}
                                />
                                <h3 className='font-NeueHaasDisplayLight text-[20px] text-[#fff] text-left mt-2 mb-2'>Conquer the Leh-Ladakh Challenge: Can the Jawa 42 Motorcycle Deliver?</h3>
                                <a href='#' className='font-NeueHaasDisplayLight text-[20px] text-[#fff] text-left flex items-center'>Read More <ArrowForwardIcon /></a>
                            </div>
                            <div>
                                <Image
                                    src="/images/allStories2.png"
                                    alt=""
                                    width={436}
                                    height={459}
                                />
                                <h3 className='font-NeueHaasDisplayLight text-[20px] text-[#fff] text-left mt-2 mb-2'>Conquer the Leh-Ladakh Challenge: Can the Jawa 42 Motorcycle Deliver?</h3>
                                <a href='#' className='font-NeueHaasDisplayLight text-[20px] text-[#fff] text-left flex items-center'>Read More <ArrowForwardIcon /></a>
                            </div>
                            <div>
                                <Image
                                    src="/images/allStories3.png"
                                    alt=""
                                    width={436}
                                    height={459}
                                />
                                <h3 className='font-NeueHaasDisplayLight text-[20px] text-[#fff] text-left mt-2 mb-2'>Conquer the Leh-Ladakh Challenge: Can the Jawa 42 Motorcycle Deliver?</h3>
                                <a href='#' className='font-NeueHaasDisplayLight text-[20px] text-[#fff] text-left flex items-center'>Read More <ArrowForwardIcon /></a>
                            </div>
                            <div>
                                <Image
                                    src="/images/allStories1.png"
                                    alt=""
                                    width={436}
                                    height={459}
                                />
                                <h3 className='font-NeueHaasDisplayLight text-[20px] text-[#fff] text-left mt-2 mb-2'>Conquer the Leh-Ladakh Challenge: Can the Jawa 42 Motorcycle Deliver?</h3>
                                <a href='#' className='font-NeueHaasDisplayLight text-[20px] text-[#fff] text-left flex items-center'>Read More <ArrowForwardIcon /></a>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllStories