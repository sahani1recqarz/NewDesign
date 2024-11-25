import React from 'react';
import { IoIosNotifications } from 'react-icons/io';

const Abs1 = () => {
  return (
    <div className="hero_abs2 bg-red-400 overflow-hidden">
      <div className="hero-content">
        <button className="relative left-[52rem] bottom-[18rem]
      w-[165px] h-[56px] bg-[#FFFFFF] text-[#2D2D2D] font-[400]  font-[TT   Hoves] text-[20px] leading-[23.56px] rounded-[40px]
      flex justify-center items-center 
      ">Notify me
          <span className='ml-2'>
            <IoIosNotifications size={20} />
            {/* <img src="./assets/icons/notify.png" alt="#" /> */}
          </span>

        </button>
        {/* <img
          src="#"
          alt="Astronaut"
          className="astronaut"
        /> */}
        <div className=' flex flex-col gap-4 '>
          <h2 className='mt-[-229px]  font-extrabold text-[96px]  bg_textt ' >SANDHEE ADR </h2>
          <h3 className=' text-[72px] font-[800] bg_textt '>Coming Soon</h3>
          
        </div>

      </div>
      <footer className='flex justify-center px-10'>
        <p className='footer flex justify-start font-[Montserrat] font-medium text-[28px] items-start'> info@sandhee.com        </p>
      </footer>
    </div>
  );
};

export default Abs1;
