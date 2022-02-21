import Cube from './Cube/Cube';

const Welcome = () => {
    return (
        <div className='flex max-w-[1400px] h-screen mx-auto justify-center items-center'>
            <div className='flex flex-col mf:flex-row justify-center items-center  py-12 px-4'>
                <div className='flex flex-1 justify-center items-center md:items-start flex-col md:mr-5'>
                    <h1 className='text-center font-["Rajdhani"] md:text-left text-9xl text-white py-1'>The biggest crypto exchange.</h1>
                    <button className='mt-6 md:animate-bounce rounded-full p-3 w-full md:w-[300px] bg-red-400 text-white'>Connect Your Wallet</button>
                </div>
            </div>
            <div className=' hidden md:flex justify-center items-center w-full mf:mt-0'>
                    <Cube />
            </div>
        </div>
    )
}

export default Welcome;
