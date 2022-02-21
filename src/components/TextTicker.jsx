import React from 'react';
import Ticker from 'react-ticker'


const TextTicker = () => {
  return (
    <div className='bg-red-400 text-center p-2'>
      <Ticker height={50} mode="smooth" speed={10}>
        {({ index }) => (
                <h1 className='bg-red-400 text-center text-3xl font-["Rajdhani"] text-white'>Invite a friend using your referral code and get $15 free in Bitcoin!</h1>
        )}
      </Ticker>
    </div>
  )
}

export default TextTicker