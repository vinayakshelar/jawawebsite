'use client';
import React from 'react'
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "./style.css";

function Banner() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='h-[100vh] w-[100%] homeBanner'>
            <Slider {...settings}>
                <div>
                    <Image
                        src="/images/banner/slider1.gif"
                        alt=""
                        width={100}
                        height={100}
                        className="full-screen-image"
                    />
                    <div className='bannerInfo'>
                        <span className='text-[28px] tl1'>JAWA 350</span>
                        <h1 className=''>Legendary<br />Masterpiece </h1>
                        <button className='border border-white rounded-[50px] text-[20px] px-[20px] py-[10px]'>Book a Test Ride</button>
                        <div className='absolute bottom-0 w-[100%]'>
                            <div className='bdrWrap mt-5'></div>
                            <div className='ftBanner flex mt-5 justify-between'>
                                <h4 className='font-SourceSerifProRegular text-[24px] md:text-[45px]'>Timeless and Iconic, Crafted With Finesse.</h4>
                                <button className='flex gap-2 items-center justify-center pr-2'>Explore <Image
                                    src="/images/banner/exploreArrow.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className=""
                                /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src="/images/banner/slider1.svg"
                        alt=""
                        width={100}
                        height={100}
                        className="full-screen-image"
                    />
                </div>
                <div>
                    <Image
                        src="/images/banner/slider1.svg"
                        alt=""
                        width={100}
                        height={100}
                        className="full-screen-image"
                    />
                </div>

            </Slider></div>
    )
}

export default Banner
