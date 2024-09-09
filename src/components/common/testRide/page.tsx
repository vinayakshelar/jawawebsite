'use client';
import React from 'react'
import Image from "next/image";
import "./style.css";

const TestRide = () => {
    return (
        <div className='p-8 bg-[#000]'>
            <div className="relative w-full min-h-[600px] overflow-hidden wraplegacySection">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('/images/bg-legacy3.png')" }}
                ></div>
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center max-w-[80%] mx-auto md:p-5 min-h-[600px]">
                    <div className="w-full md:w-[60%] mb-8 md:mb-0 md:pr-5">
                        <h4 className='font-SourceSerifProRegular text-[24px] text-[#fff]'>Experience the heritage of Jawa & Yezdi.</h4>
                        <h1 className="text-[125px] mb-4 font-NeueHaasDisplayLight text-[#fff]">Ride the Legacy,<br />Live the <span className='tl1'>Dream.</span></h1>
                        <div className='flex gap-3'>
                            <button className='border border-white rounded-[50px] text-[20px] px-[20px] py-[10px] text-[#fff] mt-4'>Read our history</button>
                            <button className='border border-white bg-[#fff] rounded-[50px] text-[20px] px-[20px] py-[10px] text-[#000] mt-4'>Find a Dealer</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TestRide