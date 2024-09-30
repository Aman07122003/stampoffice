import React from 'react';
import Hero from './images/Hero.png';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='h-[90vh] w-full flex justify-center items-center bg-gradient-to-b from-[#edac66] via-[#ff9900] to-[#6b3503]'>
      <div className='h-2/3 w-1/2 flex flex-col justify-center items-center text-5xl font-bold text-start text-[#6b3503]'>
        <p className='text-center'>
           Unite with Stamp <br /> Enthusiasts Across India! <br /> Discover, Collect, and Share <br /> Philatelic Treasures.
        </p>
        <div className='mt-6'>
           <button className='shadow-xl h-12 text-xl w-60  rounded-xl bg-red-600 text-yellow-200 flex items-center justify-center '>Join the Community</button>
        </div>
      </div>
      <div className='h-2/3 w-1/2 flex justify-center items-center'>
        <Image src={Hero} alt="Hero Image" className='object-contain' />
      </div>
    </div>
  );
};

export default Page;
