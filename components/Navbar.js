"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../app/images/Logo.png';
import { GiHamburgerMenu } from 'react-icons/gi'; // Import hamburger icon from react-icons
import Link from 'next/link';

const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='h-16 w-full flex justify-between items-center font-bold bg-[#edac66] text-lg p-2'>
      <div className='flex gap-2 ml-3 w-1/5'>
        <Image src={Logo} alt="StampNation Logo" className='h-16 w-20' />
        <h1 className='items-center flex text-lg text-amber-950 font-extrabold font-mono'>StampNation</h1>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className='md:hidden flex items-center mr-5' onClick={toggleMenu}>
        <GiHamburgerMenu className='text-xl cursor-pointer' />
      </div>

      {/* Menu Items */}
      <div className={`flex justify-between items-center w-3/6 mr-5 font-bold hidden md:block ${isOpen ? 'hidden' : 'flex-col'} md:flex md:flex-row`}>
        <ul className='cursor-pointer'>Home</ul>
        <ul className='cursor-pointer'>Product</ul>
        <ul className='cursor-pointer'>News</ul>
        <ul className='cursor-pointer'><Link href="/account">Account</Link>
        </ul>
        <button className='h-10 w-28 rounded-xl bg-red-600 text-yellow-200 flex items-center justify-center shadow-xl'>
          Premium
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      {isOpen && (
        <div className='absolute top-24 left-0 font-normal text-sm w-11/12 justify-center shadow-lg ml-3 rounded-lg bg-[#f4cb9f] flex flex-col items-center md:hidden'>
          <ul>
              <li className='p-4 cursor-pointer w-full text-center border-b border-black'>Home</li>
              <li className='p-4 cursor-pointer w-full text-center border-b border-black'>Product</li>
              <li className='p-4 cursor-pointer w-full text-center border-b border-black'>News</li>
              <li className='p-4 cursor-pointer w-full text-center border-b border-black'><Link href="/account">Account</Link>
              </li>
              <div className='p-4 cursor-pointer w-full text-center justify-center items-center'><button className='h-8 text- w-24 rounded-xl bg-red-700 text-yellow-300'>
                Premium
              </button></div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
