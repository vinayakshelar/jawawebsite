'use client';
import React from 'react'
import Image from "next/image";
import "./style.css";

const LegacyJawa = () => {
    return (
        <div className="relative w-full min-h-[600px] overflow-hidden wraplegacySection">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/images/bg-legacy.png')" }}
            ></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center max-w-[80%] mx-auto p-5 min-h-[600px]">
                <div className="w-full md:w-[60%] mb-8 md:mb-0 md:pr-5">
                    <h1 className="text-[125px] mb-4 font-NeueHaasDisplayLight text-[#fff]">Timeless <br /><span className='tl1'>Legacy</span> of Jawa</h1>

                    <button className='border border-white rounded-[50px] text-[20px] px-[20px] py-[10px] text-[#fff] mt-4'>Read our history</button>
                </div>
                <div className="w-full md:w-1/2 max-w-[500px]">
                    <Image
                        src="/images/legacy1.png"
                        alt="Jawa Image"
                        width={500}
                        height={500}
                        layout="responsive"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}

export default LegacyJawa