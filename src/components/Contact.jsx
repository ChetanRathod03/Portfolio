import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';

function Contact() {
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try {
          await  axios.post("https://getform.io/f/brolmpea", userInfo);
          toast.success("Your message has been  sent successfully");

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
      };
  return (
   <>
   <div name="Contact" className=' max-w-screen-2x1 container mx-auto px-4 md:px-20 my-16'>
    <h1 className='font-bold text-3xl mb-2'>Contact ME</h1>
    <span>Please fill out the form below to contact me</span>
    <div className='flex flex-col items-center justify-center  mt-5'>
        <form onSubmit={handleSubmit(onSubmit)}
        // action="https://getform.io/f/brolmpea " method='post' 
        className='bg-slate-300 w-96 px-5 py-8 rounded-xl'>
            <h1 className='font-semibold text-2xl mb-4'>Send Your Message</h1>
            <div className=' flex flex-col mb-4'>
                <label className='block text-gray-700'>FullName</label>
                <input  input {...register("name", { required: true })} 
                className='shadow rounded-lg apperance-none border py-2 px-3 leading-tight text-gray-700 focus:out' type="text" 
                name='Name' placeholder="Enter your name"/>
                      {errors.name && <span>This field is required</span>}

            </div> 
            <div className=' flex flex-col mb-4'>
                <label className='block text-gray-700'>Email Address</label>
                <input input {...register("Email", { required: true })} 
                className='shadow rounded-lg apperance-none border py-2 px-3 leading-tight text-gray-700 focus:out' type="text"  
                name='Email' placeholder="Enter your Email"/>
                      {errors.Email && <span>This field is required</span>}

            </div>
            <div className=' flex flex-col mb-4'>
                <label className='block text-gray-700'>Message</label>
                <textarea input {...Message("name", { required: true })} 
                className='shadow rounded-lg apperance-none border py-2 px-3 leading-tight text-gray-700 focus:out' type="text"   
                name='Message' 
                placeholder="Enter your Query"/>
                      {errors.Message && <span>This field is required</span>}

            </div>
            <button type='submit' className='bg-black text-white px-3 py-2 rounded-xl border-none  hover:scale-110 duration-200'>Send</button>
        </form>
    </div>
   </div>
   </>
  )
}

export default Contact