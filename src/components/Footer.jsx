import React from 'react';

const Footer = () => {
    return (
        <div className='w-full flex md:justify-center justify-between items-center flex-col p-8 gradient-bg-footer'>

     

            <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5' />

            <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
                <p className='text-white text-sm text-center'>@CryptoLand 2022 </p>
                <p className='text-white text-sm text-center'>Fictional project, not a real company</p>
            </div>
        </div>
    )
};

export default Footer;
