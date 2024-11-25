import React from 'react';
import { IoIosNotifications } from 'react-icons/io';

const ABS = () => {
  return (
    <div className="hero_abs1 bg-red-400 overflow-hidden">
          <div className='flex justify-end items-end w-full px-10 pt-10'>
        <button className="
      w-[165px] h-[56px] bg-[#FFFFFF] text-[#2D2D2D] font-[400]  font-[TT   Hoves] text-[20px] leading-[23.56px] rounded-[40px]
      flex justify-center items-center 
      ">Notify me
          <span className='ml-2'>
            <IoIosNotifications size={20} />
            {/* <img src="./assets/icons/notify.png" alt="#" /> */}
          </span>

        </button>
      </div>
      <div className="hero-content">
      
        {/* <img
          src="#"
          alt="Astronaut"
          className="astronaut"
        /> */}
        <div className=' mt-[110px] flex flex-col gap-4 '>
          <h2 className='font-extrabold text-[96px] bg_texxt1 ' >ABS LEGAL SERVICES</h2>
          <h3 className='mt-10  text-[72px] font-[800] bg_texxt1 '>Coming Soon</h3>
          <p className='font-[Montserrat] text-[28px] '>Will come with performance in design</p>
        </div>

      </div>
      <footer className='flex justify-end px-10'>
        <p className='footer flex justify-start font-[Montserrat] font-[500] text-[28px] items-start'> info@abslegalservices.com        </p>
      </footer>
    </div>
  );
};

export default ABS;
