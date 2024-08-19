import React from 'react'
import { Button } from './Button'
import { Mail } from 'lucide-react'

const Form = () => {
  return (
    <form className='flex sm:flex-col sm:gap-4 py-10 px-24 card-gradient rounded-[18px] border border-purple mt-10 lg:px-8 dark:bg-none dark:bg-black'>
        <div className='relative flex-1 border-b border-gray-400 self-end mr-12 sm:w-full sm:mr-0'>
            <Mail size={18} className='absolute top-1/2 -translate-y-[75%]'/>
            <input className='bg-transparent pl-7 py-2 pb-4 w-full outline-none focus:outline-none' placeholder='Email' type="text" />
        </div>
        <Button className='mr-[30px] dark:bg-white dark:text-black'>Registration</Button>
        <Button className='bg-transparent border border-accent text-white dark:border-white'>Leave contact</Button>
    </form>
  )
}

export default Form