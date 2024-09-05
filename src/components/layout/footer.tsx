import React from 'react';
import Image from "next/image";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./style.css";

const Footer = () => {
    return (
        <footer className='bg-[#000] p-20'>
            <div className='flex justify-between items-center'>
                <div className="pl-[15]">
                    <Image
                        src="/images/logo.svg"
                        width={174}
                        height={45}
                        alt=""
                    />
                </div>
                <div>
                    <span className='flex font-NeueHaasDisplayLight text-[45px] text-[#fff]'>Get Updates on <button className='text-[#21b71e] ml-4'><WhatsAppIcon className='text-[45px]' /></button></span>
                </div>
            </div>
            <div className='w-[100%] h-[2px] bg-[#fff] opacity-[0.3]'></div>
        </footer>
    )
}

export default Footer