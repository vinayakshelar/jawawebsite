'use client';
import React from 'react'
import Image from "next/image";
import Slider from "react-slick";
import "./style.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AccessoriesSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
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
        <div className='bg-[#000] wrapAccessories'>
            <div className='p-8'>
                <div className='w-[100%] flex justify-end text-right pt-6 pb-6 '>
                    <div className="slider-container w-[100%]">
                        <Slider {...settings}>
                            <div className='text-center pb-4'>
                                <Image
                                    src="/images/accessories1.png"
                                    alt=""
                                    width={700}
                                    height={577}
                                />
                                <h3 className='font-NeueHaasDisplayLight text-[20px] text-[#fff] text-center mt-2 mb-2'>Accessories</h3>
                                <h2 className='font-NeueHaasDisplayLight text-[#fff] text-center'>For The <span className='tl1'>Machine</span></h2>
                                <a href='#' className='font-NeueHaasDisplayLight text-[20px] text-[#fff] text-center items-center border border-white rounded-[50px] px-[20px] py-[10px]'>Explore</a>
                            </div>
                            <div className='text-center pb-4'>
                                <Image
                                    src="/images/accessories2.png"
                                    alt=""
                                    width={700}
                                    height={577}
                                />
                                <h3 className='font-NeueHaasDisplayLight text-[20px] text-[#fff] text-center mt-2 mb-2'>Gears</h3>
                                <h2 className='font-NeueHaasDisplayLight text-[#fff] text-center'>For The <span className='tl1'>Rider</span></h2>
                                <a href='#' className='font-NeueHaasDisplayLight text-[20px] text-[#fff] text-center items-center border border-white rounded-[50px] px-[20px] py-[10px]'>Explore</a>
                            </div>
                            <div className='text-center pb-4'>
                                <Image
                                    src="/images/accessories1.png"
                                    alt=""
                                    width={700}
                                    height={577}
                                />
                                <h3 className='font-NeueHaasDisplayLight text-[20px] text-[#fff] text-center mt-2 mb-2'>Accessories</h3>
                                <h2 className='font-NeueHaasDisplayLight text-[#fff] text-center'>For The <span className='tl1'>Machine</span></h2>
                                <a href='#' className='font-NeueHaasDisplayLight text-[20px] text-[#fff] text-center items-center border border-white rounded-[50px] px-[20px] py-[10px]'>Explore</a>
                            </div>
                            <div className='text-center pb-4'>
                                <Image
                                    src="/images/accessories2.png"
                                    alt=""
                                    width={700}
                                    height={577}
                                />
                                <h3 className='font-NeueHaasDisplayLight text-[20px] text-[#fff] text-center mt-2 mb-2'>Accessories</h3>
                                <h2 className='font-NeueHaasDisplayLight text-[#fff] text-center'>For The <span className='tl1'>Machine</span></h2>
                                <a href='#' className='font-NeueHaasDisplayLight text-[20px] text-[#fff] text-center items-center border border-white rounded-[50px] px-[20px] py-[10px]'>Explore</a>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccessoriesSection