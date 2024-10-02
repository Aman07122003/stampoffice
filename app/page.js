import React from 'react';
import Hero from './images/Hero.png';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='h-[90vh] w-full flex md:flex-row flex-col justify-center items-center bg-gradient-to-b from-[#edac66] via-[#ff9900] to-[#6b3503]'>
      <div className='h-1/3 md:w-1/2 order-2 mt-16 flex flex-col justify-center items-end md:items-start text-5xl font-bold text-start text-[#6b3503]'>
        <div className='md:text-start text-center w-full'>
           Unite with Stamp <br /> Enthusiasts Across India! <br /> Discover, Collect, and Share <br /> Philatelic Treasures.
        </div>
        <div className='mt-6 w-full md:w-1/2 flex justify-center items-center'>
           <button className='shadow-xl h-12 text-xl w-60  rounded-xl bg-red-700 text-yellow-300 flex items-center justify-center '>Join the Community</button>
        </div>
      </div>
      <div className='h-1/3 w-96 md:w-1/2 order-1 flex justify-center items-center'>
        <Image src={Hero} alt="Hero Image" className='object-contain' />
      </div>
    </div>
  );
};

export default Page;
