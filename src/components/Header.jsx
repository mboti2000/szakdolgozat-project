import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import { useState } from 'react';

const NavbarItem = ({ title, classProps }) =>{
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
};

const headerTitles = ['Trade', 'Market', 'About Us', 'Community'];

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='opacity-90 z-50 top-0 sticky bg-black w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center'>
                <h1 className='text-white text-3xl font-mono'>CryptoLand</h1>
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {headerTitles.map((item, idx) => (
                    <NavbarItem key={idx} title={item}/>
                ))}
                <li className='rounded-full flex items-center justify-around bg-red-400 p-2 w-24 text-center cursor-pointer mx-2 hover:opacity-80'>
                   <AiOutlineUser/>
                    Login
                </li>
                <li className='rounded-full border border-red-400 p-2 w-24 text-center cursor-pointer mx-2 hover:bg-red-400 transition transform ease-out'>
                    Register
                </li>
            </ul>

            <div className='flex relative'>
                {
                    toggleMenu ? 
                    <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
                     : 
                     <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} />
                }

                {
                    toggleMenu && (
                        <ul className='z-10 fixed top-0 -right-2 p-3 w-[40vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
                            <li className='text-xl w-full my-2 cursor-pointer'>
                                <AiOutlineClose onClick={() => setToggleMenu(false)} />

                            </li>
                            {headerTitles.map((item, idx) => (
                                <NavbarItem key={item + idx} title={item} classProps='my-2 text-lg'/>
                            ))}
                        </ul>
                    )
                }
            </div>
        </nav>
    )
}

export default Header;
