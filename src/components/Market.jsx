import React from 'react';
import { marketData } from '../marketData';

const MarketItem = ({name, ticker, iconUrl, price,volume, chart}) =>{
    return (
        <>
         <div className='flex items-center justify-evenly w-full p-3'>
             <div className='flex items-center justify-between w-[50px] md:w-[100px]'>
                <img className='h-10 w-10 object-contain' src={iconUrl} alt="" />
                <p className='text-white hidden md:inline-flex ml-2'>{name}</p>
             </div>

             <div className='w-[50px]'>
                <p className='text-white'>{ticker}</p>

            </div>

            
            <div className='flex justify-start text-left w-[80px]'>
                <p className='text-white text-left'>${price}</p>
            </div>
           
            <div className='hidden md:inline-flex w-[50px]'>
            <p className={`${volume < 0 ? 'text-red-500' : 'text-green-500'}`}>{volume}%</p>

            </div>

            <div>
            {chart}

            </div>
        </div>
        </>
    );
};

const Market = () => {
  return (
    <div className=' flex flex-col md:flex-row md:w-full justify-center items-center gradient-bg-services px-10 py-20'>
            <div className='flex mf:flex-row flex-col items-center justify-center md:p-20 py-12 px-4'>
                 <div className='flex-1 flex flex-col items-center justify-center'>
                    <h1 className='text-white text-center font-["Rajdhani"] text-5xl sm:text-5xl py-2 mb-4 opacity-80'>Live market data <br/>24/7, anytime</h1>
                    <p className='text-gray-400'>Download our apps for mobile experience!</p>
                    <div className='flex items-center space-x-5'>
                        <img alt="android" className='w-[200px] h-[100px] cursor-pointer hover:opacity-80 object-contain' src="http://www.onlinehottech.com/wp-content/uploads/2018/03/use-google-play-badges.png" />
                    
                        <img alt="iOS" className='w-[200px] h-[100px] cursor-pointer hover:opacity-80 object-contain' src="https://images.squarespace-cdn.com/content/v1/5cb86c018dfc8ca29e4e4b2b/1585767173618-DQWYTZI9LXP26S4FDUWO/app-store-badge.png" />

                    </div>
                 </div>
            </div>

            <div className='w-[95%] md:flex-1 flex flex-col justify-center border-2 border-gray-600 rounded-lg items-center'>
               {
                   marketData.map((item,idx) =>(
                      <>                      
                        <MarketItem key={item.ticker} {...item}/>
                        {idx < marketData.length - 1 ? <hr className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mb-2' /> : ''}
                      </> 
                   ))
               }
            </div>            
        </div>
  )
}

export default Market;