'use client';
import React from 'react'
import Image from "next/image";
import "./style.css";

const JoinVibrant = () => {
    return (
        <div className="relative w-full min-h-[600px] overflow-hidden wraplegacySection pt-20 pb-20">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/images/bg-legacy4.png')" }}
            ></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center max-w-[80%] mx-auto p-5 min-h-[600px]">
                <div className="w-full md:w-[60%] mb-8 md:mb-0 md:pr-5">
                    <h1 className="text-[125px] mb-4 font-NeueHaasDisplayLight text-[#fff]">Join a vibrant<br />
                        <span className='tl1'>Kommuniti</span> of <br />riders and <br />enthusiasts.</h1>

                </div>
                <div className="w-full md:w-1/2 max-w-[350px]">
                    <Image
                        src="/images/allStories4.png"
                        alt="Jawa Image"
                        width={350}
                        height={444}
                        layout="responsive"
                        className="rounded-lg"
                    />
                    <p className='font-NeueHaasDisplayLight text-[22px] text-[#fff]'>Connect, share stories, and celebrate the spirit of adventure as we journey together on the open road and explore new horizons.</p>
                    <button className='border border-white rounded-[50px] text-[20px] px-[20px] py-[10px] text-[#fff] mt-4'>Explore Kommuniti</button>
                </div>
            </div>
        </div>
    )
}

export default JoinVibrant