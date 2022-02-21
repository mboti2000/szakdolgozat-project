import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import {MdSecurity} from 'react-icons/md';
import {FiUsers} from 'react-icons/fi';
import {GrMoney} from 'react-icons/gr';


const NumberCard = ({title, number, suffix, prefix, Icon}) =>{
  return(
    <div className='flex flex-col border-2 opacity-70 items-center justify-center h-[200px] w-[250px] bg-white text-black rounded-lg hover:opacity-90 hover:scale-105  duration-150 ease-out cursor-pointer'>
          <div className='font-bold text-red-400 text-4xl mb-3'>
          <CountUp end={number} duration={2} prefix={prefix || ''} suffix={suffix || ''}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
          )}
          </CountUp>
          </div>
          
          <h2 className='font-semibold text-xl'>{title}</h2> 
          <Icon className='text-2xl mt-2'/>
    
    </div>
  );
};


const Numbers = () => {
  return (
    <div className="h-[1000px] md:h-[600px] p-6 shadow-inner shadow-black bg-[url('/src/images/background.jpg')] object-contain">
      <h1 className='text-white text-6xl opacity-80 text-center font-["Rajdhani"] py-10'>Trusted by the largest community worldwide</h1>
      <div className='h-[700px] md:h-[500px] max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between'>
      <NumberCard title='Security' number={100} suffix="%" Icon={MdSecurity}/>
      <NumberCard title='Users' number={120000} suffix="+" Icon={FiUsers}/>
      <NumberCard title='Traded daily' number={2500000} suffix="+" prefix="$" Icon={GrMoney}/>

      </div>
    </div>
  )
}

export default Numbers;