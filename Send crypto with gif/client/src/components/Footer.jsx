import React from 'react'
import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <div className='w-full flex md:justify-center items-center justify-between flex-col p-4 gradient-bg-footer'>
      <div className='w-full flex sm:flex-row flox-col justify-between items-center'>
        <div className='flex flex-[0.5] justify-center'>
          <img src={logo} alt="logo" className='w-32'/>
        </div>
        <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
          <p className='text-white text-base text-center mx-2 cursor-pointer'>Market</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer'>Exchange</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer'>Tutorials</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer'>Wallets</p>
        </div>
      </div>
      <div className='flex items-center flex-col mt-5 justify-center'>
        <p className='text-white text-sm text-center'>Come join us</p>
        <a className='text-white text-sm text-center' href="mailto:markdiper22@gmail.com">markdiper22@gmail.com</a>
      </div>
      <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5' />
      <div className='sm:w-[90%] w-full flex justify-between items-center mt-3 '>
        <p className='text-white text-sm text-center'>@kryptomastery 2022</p>
        <p className='text-white text-sm text-center'>All rights reserved</p>
      </div>

    </div>
  )
}

export default Footer