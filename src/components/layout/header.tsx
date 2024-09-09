'use client';
import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import Image from "next/image";
import "./style.css";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleMoreMenu = () => {
        setIsMoreMenuOpen(!isMoreMenuOpen);
    };

    const menuItems = [
        { label: 'Legacy', href: '#' },
        { label: 'Dealers', href: '#' },
        { label: 'Accessories', href: '#' },
        { label: 'Offers', href: '#' },
        { label: 'Brands', href: '#' },
    ];

    const moreMenuItems = [
        { label: 'Motorcycles 2', href: '#' },
        { label: 'Motorcycles 3', href: '#' },
    ];

    return (
        <header className="flex items-center justify-between p-[30px] absolute top-0 left-0 right-0 z-10">
            <div className="pl-[15]">
                <Image
                    src="/images/logo.svg"
                    width={174}
                    height={45}
                    alt=""
                />
            </div>
            <div className="">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <nav className={`md:flex space-x-12 mobileMenu ${isMobileMenuOpen ? 'block' : 'hidden'} 
                            md:relative absolute md:top-auto top-0 md:left-auto left-0 md:right-auto right-0 
                            md:h-auto h-screen md:bg-transparent bg-white md:z-auto z-50`}>
                            <button
                                onClick={toggleMobileMenu}
                                className="md:hidden absolute right-5 top-5 text-gray-600 hover:text-gray-900 z-[999]"
                            >
                                <X size={24} />
                            </button>
                            <div className="relative pt-8 md:pt-0">
                                <button
                                    onClick={toggleMoreMenu}
                                    className="text-[20px] md:text-[#fff] text-gray-800 hover:text-[#ccc] font-NeueHaasDisplayMediu tracking-wider flex items-center"
                                >
                                    Motorcycles <ChevronDown className="ml-1" size={20} />
                                </button>
                                {isMoreMenuOpen && (
                                    <div className="absolute top-full left-0 bg-white shadow-md rounded-md py-2">
                                        {moreMenuItems.map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {menuItems.map((item) => (
                                <a key={item.label} href={item.href} className="block md:inline text-[20px] md:text-[#fff] text-gray-800 hover:text-[#ccc] font-NeueHaasDisplayMediu tracking-wider">
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            <div className='flex gap-[20px]'>
                <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-900 md:z-auto md:relative absolute md:right-auto right-5 md:top-auto top-5">
                    <Image
                        src="/images/frame.svg"
                        width={64}
                        height={64}
                        alt=""
                    />
                </button>
                <div><button className='hidden md:flex border border-white rounded-[50px] px-[20px] py-[15px] text-[20px] text-[#fff] tracking-wider'>Book Online</button></div>
            </div>
        </header>
    );
}