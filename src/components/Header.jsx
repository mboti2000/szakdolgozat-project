import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu'
import logo from '../images/logo.png'
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
            <div className='flex md:flex-[0.6] flex-initial justify-center'>
                <img alt="logo" className="h-10 w-10 object-contain mr-2" src={logo}/>
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
                    !toggleMenu && 
                     <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} />
                }

                {
                    toggleMenu && (
                            <Menu className='z-10 bg-red-400 backdrop-blur-sm backdrop-opacity-10 fixed top-0 right-0 p-3 h-screen shadow-2xl md:hidden flex flex-col justify-start items-start rounded-md text-white'>
                            <AiOutlineClose fontSize={28} className='text-white md:hidden mb-5 cursor-pointer z-50' onClick={() => setToggleMenu(false)} />

                              {headerTitles.map(title => (
                                  <h2 className='cursor-pointer text-lg py-2'>{title}</h2>
                              ))}
                            </Menu>
                    
                    )
                }
            </div>
        </nav>
    )
}

export default Header;
