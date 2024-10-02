import React from 'react';
import Hero from './images/Hero.png';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='h-[91vh] w-full flex md:flex-row flex-col justify-around items-center bg-gradient-to-b from-[#edac66] via-[#ff9900] to-[#6b3503]'>
      <div className='h-1/2 md:w-2/3 md:order-1 order-2  md:ml-10 mt-7 md:mt-24 flex flex-col items-end md:items-start text-xl md:text-5xl text-start text-[#6b3503]'>
        <div className='md:text-start text-center font-extrabold'>
           Unite with Stamp <br /> Enthusiasts Across India! <br /> Discover, Collect, and Share <br /> Philatelic Treasures.
        </div>
        <div className='mt-6 w-full md:w-1/2 flex justify-center items-center'>
           <button className='shadow-xl h-10 text-lg w-56  rounded-xl bg-red-700 text-yellow-300 flex items-center justify-center font-bold '>Join the Community</button>
        </div>
      </div>
      <div className='h-1/2 md:w-96 w-60 md:order-2 order-1 md:mr-10 mt-10 md:mt-2 flex justify-satar items-center'>
        <Image src={Hero} alt="Hero Image" className='object-contain' />
      </div>
    </div>
  );
};

export default Page;
