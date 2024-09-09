'use client';
import React, { useState } from 'react';
import Image from "next/image";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import "./style.css";

const Footer = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitted:', inputValue);
        setInputValue('');
    };
    return (
        <footer className='bg-[#000] p-4 md:p-10'>
            <div className='hidden md:flex justify-between items-center'>
                <div className="pl-[15]">
                    <Image
                        src="/images/logo.svg"
                        width={174}
                        height={45}
                        alt=""
                    />
                </div>
                <div>
                    <span className='flex font-NeueHaasDisplayLight text-[45px] text-[#fff] tracking-wider mr-[50px]'>Get Updates on <button className='text-[#21b71e] ml-4'><WhatsAppIcon className='text-[36px]' /></button></span>
                    <form onSubmit={handleSubmit} className="flex items-center relative">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Enter Mobile Number"
                            className="pr-[50px] bg-transparent text-[#fff] text-[20px] flex-grow p-2 border-b-2 border-gray-300 outline-none transition-colors tracking-wider"
                        />
                        <button
                            type="submit"
                            className="ml-2 text-white absolute right-[10px] top-[6px] transition-colors"
                        >
                            <ArrowForwardIcon />
                        </button>
                    </form>
                </div>
            </div>
            <div className='w-[100%] h-[2px] bg-[#fff] opacity-[0.3] mt-3 hidden md:flex'></div>
            <div className="mx-auto text-[#fff] pt-[0] md:pt-10">
                <div className="block md:flex w-[100%] justify-between">
                    <div className='block md:hidden justify-between items-center'>
                        <div className="pl-[15]">
                            <Image
                                src="/images/logo.svg"
                                width={174}
                                height={45}
                                alt=""
                            />
                        </div>

                    </div>

                    <div className="w-[100%] pt-[25px] md:pt-[0px] md:w-[35%] md:pr-[50px]">
                        <h3 className="text-[22px] font-NeueHaasDisplayLight  mb-8 tracking-wider">Become part of a vibrant community of passionate riders and enthusiasts
                            Connect, share stories, and celebrate the spirit of adventure as we journey together on the open road and explore new horizons.</h3>
                        <button className="bg-transparent text-[20px] px-4 py-2 border border-white rounded-[50px] mb-8 tracking-wider">Explore Community</button>
                        <div className="flex mt-4 space-x-4 items-center">
                            <span className='text-[22px] tracking-wider'>Follow us on</span>
                            <InstagramIcon />
                            <YouTubeIcon />
                            <FacebookRoundedIcon />
                            <XIcon />
                        </div>
                    </div>

                    <div className='block md:hidden justify-between items-center mt-[25px] pb-[50px] md:pb-[0]'>
                        <div>
                            <span className='flex font-NeueHaasDisplayLight text-[24px] md:text-[45px] text-[#fff] tracking-wider mr-[50px]'>Get Updates on <button className='text-[#21b71e] ml-4'><WhatsAppIcon className='text-[36px]' /></button></span>
                            <form onSubmit={handleSubmit} className="flex items-center relative">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Enter Mobile Number"
                                    className="pr-[50px] bg-transparent text-[#fff] text-[20px] flex-grow p-2 border-b-2 border-gray-300 outline-none transition-colors tracking-wider"
                                />
                                <button
                                    type="submit"
                                    className="ml-2 text-white absolute right-[10px] top-[6px] transition-colors"
                                >
                                    <ArrowForwardIcon />
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="w-[15%] footerMobMenu">
                        <h4 className="mb-2 tracking-[1px]">Models</h4>
                        <ul className="space-y-2 mb-2 min-h-[120px] tracking-[1px] opacity-[0.7]">
                            <li>Jawa 42</li>
                            <li>Jawa 42bobber</li>
                            <li>Jawa 350</li>
                        </ul>
                        <ul className="space-y-2 tracking-[1px] opacity-[0.7]">
                            <li>Yezdi Adventure</li>
                            <li>Scrambler</li>
                        </ul>
                    </div>

                    <div className="w-[15%] tracking-[1px] footerMobMenu">
                        <h4 className="mb-2">Gear</h4>
                        <ul className="space-y-2 min-h-[120px] opacity-[0.7]">
                            <li>For The Machine</li>
                            <li>For The Rider</li>
                        </ul>

                        <h4 className="mb-2">Community</h4>
                        <ul className="space-y-2 opacity-[0.7]">
                            <li>Jawa Yezdi Nomads</li>

                        </ul>
                    </div>

                    <div className="w-[15%] tracking-[1px] footerMobMenu">
                        <h4 className="mb-2">Buy</h4>
                        <ul className="space-y-2 min-h-[120px] opacity-[0.7]">
                            <li>Spares</li>
                            <li>Dealerships</li>
                            <li>Exchange Your Bike</li>
                        </ul>

                        <h4 className="mb-2">Legacy</h4>
                        <ul className="space-y-2 opacity-[0.7]">
                            <li>History</li>
                            <li>Steeds of Steal</li>
                            <li>Legends</li>
                        </ul>
                    </div>

                    <div className="w-[15%] tracking-[1px] footerMobMenu">
                        <h4 className="mb-2">More Details</h4>
                        <ul className="space-y-2 opacity-[0.7]">
                            <li>Book a Test Ride</li>
                            <li>Finance Offers</li>
                            <li>Investor Relation</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-[100%] h-[2px] bg-[#fff] opacity-[0.3] mt-10'></div>
            <div className="container mx-auto text-[#fff] pt-4 justify-between block md:flex tracking-[1px] text-center">
                <div>Copyright @Copyright Jawa Yezdi 2024 </div>
                <div className='block md:hidden pt-[15px] pb-[15px] md:pb-[0px] md:pt-[0px]'> <span className='opacity-100'>Back to Top</span></div>
                <div className='block md:flex items-center'><span className='opacity-[0.5] pr-[25px]'>Site Designed by Ronin Labs</span> <span className='opacity-100 hidden md:flex'>Back to Top</span></div>
            </div>
        </footer>
    )
}

export default Footer