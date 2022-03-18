import React from 'react';
import {BsFacebook, BsInstagram, BsTwitter, BsPinterest} from 'react-icons/bs';
import {AiFillPhone, AiOutlineMail} from 'react-icons/ai';
import {MdLocationOn} from 'react-icons/md';
import logo from '../images/logo.png'


const Footer = () => {
    return (
        <div className='p-8 gradient-bg-footer w-full flex flex-col'>
            <div className='sm:w-[90%] mx-auto w-full h-[0.25px] bg-gray-400 mb-5' />
            <h1 className='text-white text-3xl md:text-6xl mb-3 opacity-80 text-center font-["Rajdhani"] py-10'>Subscribe to our newsletter</h1>
            <div className='flex items-center justify-between bg-white w-full md:w-[500px] mx-auto mb-12 rounded-full h-45 py-1 pl-4 pr-1'>
                <input className='flex-1 outline-none' type='email' placeholder='Enter your email address...'/>
                <button className='w-[100px] h-[40px] ml-5 px-1 rounded-full bg-red-400 text-white hover:opacity-80'>Subscribe</button>
            </div>



        <div className='w-[80%] mx-auto flex justify-between items-center flex-col md:flex-row mt-6'>
            <div className='flex flex-col items-center md:items-start'>
                <h1 className='text-white text-xl my-3 items-center md:items-start'>Services</h1>
                <p className='text-gray-500 text-base hover:opacity-80 cursor-pointer my-1'>Trading</p>
                <p className='text-gray-500 text-base hover:opacity-80 cursor-pointer my-1'>Investing</p>
                <p className='text-gray-500 text-base hover:opacity-80 cursor-pointer my-1'>Futures</p>
                <p className='text-gray-500 text-base hover:opacity-80 cursor-pointer my-1'>Saving</p>
                <p className='text-gray-500 text-base hover:opacity-80 cursor-pointer my-1'>Transacting</p>
            </div>

            <div className='flex flex-col items-center'>
                <h1 className='text-white text-xl my-3'>About Us</h1>
                <p className='text-gray-500 text-base hover:opacity-80 cursor-pointer my-1'>Our company</p>
                <p className='text-gray-500 text-base hover:opacity-80 cursor-pointer my-1'>Team</p>
                <p className='text-gray-500 text-base hover:opacity-80 cursor-pointer my-1'>Careers</p>
                <p className='text-gray-500 text-base hover:opacity-80 cursor-pointer my-1'>Roadmap</p>
                <p className='text-gray-500 text-base hover:opacity-80 cursor-pointer my-1'>Partners</p>
            </div>

            <div className='flex flex-col items-center md:items-end'>
                <h1 className='text-white text-xl my-3'>Contacts</h1>
                <div className='flex items-center'>
                    <p className='text-gray-500 text-base hover:opacity-80 cursor-pointer my-1'>06/20-484-9789</p>
                    <AiFillPhone className='text-gray-500 pl-2 text-2xl'/>
                </div>
                <div className='flex items-center'>
                    <p className='text-gray-500 text-base hover:opacity-80 cursor-pointer my-1'>2200 Los Angeles, Main St. 128</p>
                    <MdLocationOn className='text-gray-500 pl-2 text-2xl'/>
                </div>
                <div className='flex items-center'>
                    <p className='text-gray-500 text-base hover:opacity-80 cursor-pointer my-1'>cryptoland@support.com</p>
                    <AiOutlineMail className='text-gray-500 pl-2 text-2xl'/>
                </div>
                <div className='flex items-center'>
                    <p className='text-gray-500 text-base hover:opacity-80 cursor-pointer my-1'>06/20-484-9789</p>
                    <AiFillPhone className='text-gray-500 pl-2 text-2xl'/>
                </div>
                <div className='flex items-center'>
                    <p className='text-gray-500 text-base hover:opacity-80 cursor-pointer my-1'>06/20-484-9789</p>
                    <AiFillPhone className='text-gray-500 pl-2 text-2xl'/>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <div className='flex justify-center mb-2'>
                    <img alt="logo" className="h-10 w-10 object-contain mr-2" src={logo}/>
                    <h1 className='text-white text-2xl font-mono'>CryptoLand</h1>
                </div>
                <h1 className='text-white font-light text-xl my-3 pb-6'>Follow us on social media</h1>
                <div className='flex space-x-5'>
                    <BsFacebook className='text-gray-500 text-3xl hover:opacity-80 cursor-pointer' />
                    <BsInstagram className='text-gray-500 text-3xl hover:opacity-80 cursor-pointer'/>
                    <BsTwitter className='text-gray-500 text-3xl  hover:opacity-80 cursor-pointer '/>
                    <BsPinterest className='text-gray-500 text-3xl  hover:opacity-80 cursor-pointer '/>
                </div>
            </div>

           
        </div>
            <div className='sm:w-[90%] mx-auto w-full h-[0.25px] bg-gray-400 mt-5' />

            <div className='sm:w-[90%] mx-auto w-full flex justify-between items-center mt-3'>
                <p className='text-white text-sm text-center'>@Maczkó Botond, 2022 </p>
                <p className='text-white text-sm text-center'>Study project, fictional company</p>
            </div>
        </div>
        
    )
};

export default Footer;
