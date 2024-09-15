import React from 'react'

function About() {
  return (
    <div name="About" className='max-w-screen-2x1 container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-5'>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis minus harum suscipit nisi quis exercitationem eveniet expedita atque, voluptatibus nam corporis accusantium veniam ratione magnam dicta magni. Nobis voluptas repudiandae saepe libero nulla ea.</p>
        <br /><br />
       <div>
       <h1 className='text-green-600 font-semibold text-xl'>Education & Training</h1>
        <span>
            [Degree,Certification],[Institution],[year] [Degree,Certification],[Institution],[year] [Relevant Course],[Platform/Institution][year]
        </span>
        <br /><br />

        <h1 className='text-green-600 font-semibold text-xl'>Skill & Expertise</h1>
        <span>
            [Skill],[Proficiency Level],[Relevant Project/Experience],[Year],[Programming  Language],[Proficiency Level],[Relevant Project/Experience],[Year]

        </span>
        <br /><br />

        <h1 className='text-green-600 font-semibold text-xl'>Personal Experiance</h1>
        <span>
            [Relevant Project/Experience],[Year],[Relevant Project/Experience],[Year],[Relevant]
        </span>
        <br /><br />

        <h1 className='text-green-600 font-semibold text-xl'>Achievment & Awards</h1>
        <span>
            [Achievement],[Year],[Award],[Year],[Achievement],[Year],[Award],[Year]
        </span>
        <br /><br />

        <h1 className='text-green-600 font-semibold text-xl'>Mission Statement</h1>
        <p>
            [Mission Statement]
        </p>
        
       </div>
        </div>
  )
}

export default About