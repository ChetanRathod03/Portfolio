import React from 'react'
import Java from '../../public/java.webp'
import Javascript from '../../public/javascript.webp'
import Mongo from '../../public/mongo.png'
import MySql from '../../public/mysql.webp'
import react from '../../public/react.webp'
import Python from '../../public/python1.png'
import Tailwind from '../../public/tailwind.jpg'
import Bootstrap from '../../public/bootstrap.png'





function Portfolio() {
    const cardItems =[
        
        {
            id:1,
            title:Javascript,
            name:"Javascript"
        },
        {
            id:2,
            title:Java,
            name:"Java"
        },
        {
            id:3,
            title:Mongo,
            name:"MongoDB"
        },
        {
            id:4,
            title:react,
            name:"React"
        },
        {
            id:5,
            title:MySql,
            name:"MySQL"
        },
        {
            id:6,
            title:Python,
            name:"Python"
        },
        {
            id:7,
            title:Tailwind,
            name:"Tailwind"
        },
        {
            id:8,
            title:Bootstrap,
            name:"Bootstrap"
        },
    ]
  return (
    <div name="Portfolio" className='max-w-screen-2x1 container mx-auto px-4 md:px-20 mt-10'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
            <span className='underline font-semibold'>Featured Projects</span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-2 space-y-4'>
            {
                cardItems.map(({id,title,name}) => (
                  <div key={id} className='md:w-[300px] md:h-[300px] border-2 rounded-lg p-1 shadow-lg hover:scale-110 duration-300 '>
                    <img src={title} className='w-[120px] h-[120px] rounded-full border-2 p-1' alt="" />
                    <div>
                        <h2 className='font-bold text-xl mb-2 px-7'>{name}</h2>
                        <p className='px-2 text-gray-700 mb-3 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, nostrum repudiandae eius quibusdam ab?</p>
                    </div>
                    <div >
                        <button className='bg-green-500 hover:bg-green-700 px-4 py-2 rounded '>Source Code</button>
                    </div>
                  </div>
                ))
            }
            
        </div>

    </div>
  )
}

export default Portfolio