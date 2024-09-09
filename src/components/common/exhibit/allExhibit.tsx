import React from 'react';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const AllExhibit = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "50px",
        slidesToShow: 3,
        speed: 500,
        gap: 50,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    gap: 100,
                    centerPadding: "10px",

                }
            },
        ]
    };
    return (
        <>
            <div className="slider-container pt-6 pb-4">
                <Slider {...settings}>
                    <div>
                        <div className='text-center'>
                            <Image
                                src="/images/exhibit-slider/img1a.png"
                                alt=""
                                width={306}
                                height={69}
                                className=""
                            />
                        </div>
                        <Image
                            src="/images/exhibit-slider/img1.png"
                            alt=""
                            width={368}
                            height={250}
                            className=""
                        />

                    </div>
                    <div>
                        <Image
                            src="/images/exhibit-slider/img2.png"
                            alt=""
                            width={368}
                            height={250}
                            className=""
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/exhibit-slider/img3.png"
                            alt=""
                            width={368}
                            height={250}
                            className=""
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/exhibit-slider/img1.png"
                            alt=""
                            width={368}
                            height={250}
                            className=""
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/exhibit-slider/img2.png"
                            alt=""
                            width={368}
                            height={250}
                            className=""
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/exhibit-slider/img3.png"
                            alt=""
                            width={368}
                            height={250}
                            className=""
                        />
                    </div>
                </Slider>
            </div>
            <div className='pt-2 justify-center items-center text-center'>
                <p className='text-[20px] text-[#fff]'>Classic bobber style meets<br />
                    modern 334cc power<br />
                    for a unique riding experience.</p>
                <div className='flex gap-[30px] mt-[25px] justify-center'>
                    <button className='font-NeueHaasDisplayLight bg-[#ffff] border border-white rounded-[50px] px-[10px] py-[10px] text-[20px] text-[#000] w-[165px] h-[54px]'>Know More</button>
                    <button className='font-NeueHaasDisplayLight bg-transparent border border-white rounded-[50px] px-[10px] py-[10px] text-[20px] text-[#fff]  w-[165px] h-[54px]'>Test Ride</button>
                </div>
                <div className='bdrWrap mt-5'></div>
            </div>
        </>
    )
}

export default AllExhibit