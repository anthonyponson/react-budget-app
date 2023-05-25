import React from 'react'
import { Form } from 'react-router-dom'
import illustration from '../assets/illustration.png'

const Intro = () => {
  return (
    <>
      <div className='flex flex-col px-10 items-center xmd:flex-row xmd:justify-between '>
        {/* container 1 */}
        <div className='md:mt-12'>
          <h1 className='text-3xl font-bold max-w-[350px]'>
            Take your Money That
            <span className='text-teal-400'>You Earned</span>
          </h1>
          <p className='max-w-[400px] text-sm font-medium my-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            expedita harum commodi corrupti optio? Dolores et laudantium laborum
            saepe consequuntur
          </p>
          <Form method='post' className='flex flex-col'>
            <input
              className='border-2 border-teal-400 px-2 py-2 rounded-md focus:outline-none'
              type='text'
              name='userName'
              placeholder='Whats your name'
              required
            />
            <input type="hidden" name="_action" value="newUser" />

            <button
              type='submit'
              className='bg-teal-400 text-white text-base px-3 py-2 mt-3 rounded-md max-w-[40%]'
            >
              Create Account
            </button>
          </Form>
        </div>
        {/* container 2 */}
        <div className=''>
          <img
            className='w-auto max-h-80 max-w-full'
            src={illustration}
            alt='illustration'
          />
        </div>
      </div>
    </>
  )
}

export default Intro
