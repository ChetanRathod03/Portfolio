
import React from 'react';

import pic from '../../public/H4.jpg'


import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { FaPython } from "react-icons/fa6";

import { ReactTyped } from "react-typed";






function Home() {
    const logoItems = [
        {
            id: 1,
            logo: <FaInstagramSquare/>
        },
        {
            id: 2,
            logo: <FaLinkedin/>
        },
        {
            id: 3,
            logo: <FaFacebookSquare/>
        },
        {
            id: 4,
            logo: <FaSquareWhatsapp/>
        },
    ]

    const logoItems2 = [
        {
            id: 1,
            logo: <SiMongodb/>
        },
        {
            id: 2,
            logo: <FaReact/>
        },
        {
            id: 3,
            logo: <IoLogoNodejs/>
        },
        {
            id: 4,
            logo: <FaPython/>
        },
    ]
  return (
    <>
    <div  name = "Home"
    className='max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20'>
        
        <div className='flex flex-col md:flex-row'>
           <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
           <span className='text-xl'>Welcome to my Portfolio</span>
          <div className='flex space-x-1  text-2xl md:text-4xl'>
          <h1>Hello! I'M a</h1>
          {/* <span className='text-red-700 font-bold'>Developer</span> */}
          <ReactTyped
          className='text-red-700 font-bold'
          strings={["Developer", "Programmer", "Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
          </div>
          <br />
           <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusamus ratione earum natus non consequatur inventore laboriosam? Ad quis amet voluptas numquam? Aliquid facere ducimus quaerat est aut quas sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dignissimos!</p>
           <br />
           {/* Social media icons */}
           <div className='flex flex-col md:flex-row justify-between items-center text-center space-y-6 md:space-y-0'>
           <div className='space-y-2'>
            <h1 className='font-bold'>Available On</h1>
            <ul className='flex space-x-5 '>
                {
                    logoItems.map(({id,logo}) => (
                        <li key={id} className='cursor-pointer text-xl  md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'>{logo}</li> 
                    )) 
                 } 
            </ul>
           </div>
           <div className='space-y-2 '>
           <h1 className='font-bold'>Currently Working On</h1>
           <ul className='flex space-x-5 '>
                {
                    logoItems2.map(({id,logo}) => (
                        <li key={id} className='cursor-pointer text-xl  md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'>{logo}</li>
                    )) 
                 } 
            </ul>
           </div>
           </div>
           </div>
           <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
           <img src={pic} className='rounded-full md:w-[450px] md:h-[450px] w-[400px] h-[400px] '
            alt="" />
           </div>
        </div>
        
    </div>
    <hr />
    </>
  )
}

export default Home