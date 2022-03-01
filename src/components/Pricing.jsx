import React from 'react';
import {FaCheckCircle} from 'react-icons/fa';

const Pricing = () => {
  return (
    <div className='gradient-bg-pricing py-12 text-white px-3'>
        <h1 className='text-5xl text-white text-center font-["Rajdhani"] py-6 opacity-80'>Choose the plan that fits your needs for trading</h1>
        <div className='flex flex-col md:flex-row items-center md:justify-center md:space-x-20 pt-6 mt-6'>
            <div className='h-[450px] flex flex-col justify-between w-[300px] mb-5 md:mb-0 border-2 border-white rounded-md p-3'>
                <h1 className='text-4xl font-["Rajdhani"] p-6 font-bold text-gray-300 text-center'>Basic</h1>
                <p className='text-gray-300 text-sm text-center'>This plan is recommended for new traders with limited experience.</p>
                <div className='flex items-center justify-center'>
                    <FaCheckCircle className='text-green-400 mr-2'/>
                    <p className='text-gray-300 text-sm'>No fees</p>
                </div>
                <div className='flex items-center justify-center'>
                    <FaCheckCircle className='text-green-400 mr-2'/>
                    <p className='text-gray-300 text-sm'>Basic features</p>
                </div>
                <h1 className='text-5xl text-center mt-3'>$0<span className='text-sm'> / free forever</span></h1>
                <button className='border-2 w-[90%] mx-auto border-red-400 hover:bg-red-300 rounded-lg p-2'>Get started</button>
            </div>
            <div className='h-[450px] flex flex-col justify-between p-3 w-[300px] border-2 border-white rounded-md'>
                <h1 className='text-4xl font-["Rajdhani"] p-6 font-bold text-gray-300 text-center'>Pro</h1>
                <p className='text-gray-300 text-sm text-center mb-2'>Includes the most up-to-date, cutting edge features for professional traders.</p>
                <div className='flex items-center justify-center'>
                    <FaCheckCircle className='text-green-400 mr-2'/>
                    <p className='text-gray-300 text-sm'>Unlimited trading</p>
                </div>
                <div className='flex items-center justify-center'>
                    <FaCheckCircle className='text-green-400 mr-2'/>
                    <p className='text-gray-300 text-sm'>Advanced analysis tools</p>
                </div>
                <div className='flex items-center justify-center'>
                    <FaCheckCircle className='text-green-400 mr-2'/>
                    <p className='text-gray-300 text-sm'>0-24 support</p>
                </div>
                <h1 className='text-5xl text-center my-3'>$230<span className='text-sm'> / annually</span></h1>
                <button className=' w-[90%] mx-auto  bg-red-400 hover:bg-red-800 rounded-lg p-2'>Buy now</button>
            </div>
        </div>
    </div>
  )
}

export default Pricing