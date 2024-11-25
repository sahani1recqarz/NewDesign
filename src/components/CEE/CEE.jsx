import React from 'react';
import { IoIosNotifications } from 'react-icons/io';
import { Link } from 'react-router-dom';

const CEE = () => {
  return (
    <div className="hero bg-red-400 overflow-hidden">
      <div className="hero-content">
        <button className="absolute right-[2rem] top-[2rem]
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
        <div className=' mt-[200px] flex flex-col gap-4 '>
          <h2 >CEE CORPORATE SERVICES</h2>
          <p>We are creating something amazing</p>
          <a href="mailto:info@ceecs.in" className="contact-link">info@ceecs.in</a>
        </div>
      </div>
      <footer className='flex justify-start items-start relative left-0'>
        <Link>
          <p className=' flex justify-start items-start gap-[10px] text-[16px] '> <span>©</span> 2024</p>
        </Link>
      </footer>
    </div>
  );
};

export default CEE;
