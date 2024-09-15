import React from 'react'
import Html from '../../public/html.png'
import Css from '../../public/css.svg'
import Javascript from '../../public/javascript.webp'
import Tailwind from '../../public/tailwind.jpg'
import Bootstrap from '../../public/bootstrap.png'
import react from '../../public/react.webp'
import Mongo from '../../public/mongo.png'
import MySql from '../../public/mysql.webp'
import Java from '../../public/java.webp'
import Python from '../../public/python1.png'
import psolving from '../../public/psolving.jpeg'
import dsa from '../../public/dsa.png'







function Experiance() {
    const cardItems =[
        {
            id:1,
            title:Html,
            name:"HTML"
        },
        {
            id:2,
            title:Css,
            name:"CSS"
        },
        {
            id:3,
            title:Javascript,
            name:"Javascript"
        },
        {
            id:4,
            title:Tailwind,
            name:"Tailwind"
        },
        {
            id:5,
            title:Bootstrap,
            name:"Bootstrap"
        },
        {
            id:6,
            title:react,
            name:"React"
        },
        {
            id:7,
            title:Mongo,
            name:"MongoDB"
        },
       
        {
            id:8,
            title:MySql,
            name:"MySQL"
        },
        {
            id:9,
            title:Java,
            name:"Java"
        },
       
        {
            id:10,
            title:Python,
            name:"Python"
        },
        {
            id:11,
            title:psolving,
            name:"Problem Solving"

        },
       
        {
            id:12,
            title:dsa,
            name:"Data Structures and Algorithms"

        },
        
    ]
  return (
    <div name="Experiances" className='max-w-screen-2x1 container mx-auto px-4 md:px-20 my-16'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Experiance</h1>
            <span className=' font-semibold '>I'm a WebDeveloper with 6+ months of experience in building scalable and efficient web applications.</span>

        </div>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3 space-y-10'>
            {
                cardItems.map(({id,title,name}) => (
                  <div key={id} className=' flex flex-col items-center justify-center md:w-[200px] md:h-[200px] border-2 rounded-full p-1  hover:scale-110 duration-300 '>
                    <img src={title} className='w-[150px]   rounded-full border-[2px] ' alt="" />
                    <div>
                        <h2 className=''>{name}</h2>
                        
                     </div>
                   
                  </div>
                ))
            }
            
        </div>

    </div>
  )
}

export default Experiance