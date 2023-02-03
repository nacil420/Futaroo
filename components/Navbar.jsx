import React from 'react'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {

    const [color, setColor] = useState(false)
    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav)
  }

    useEffect (() => {
        const changeColor = () => {
            if(window.scrollY >=90) {
                setColor(true);
            } else {
                setColor(false);
            }
        }
        
        window.addEventListener('scroll', changeColor);
        return() => {
            window.removeEventListener('scroll', changeColor);
        }
        },[])

  return (
    <div className={color ? 'fixed w-full h-20 z-[100] bg-black shadow-md shadow-gray-300' : 'fixed w-full h-20 z-[100]'}>
            <div className={color ?'flex text-white justify-between font-bold items-center w-full h-full px-8 2xl:px-16' : 'flex font-bold text-black justify-between items-center w-full h-full px-8 2xl:px-16 '}>
               <h1>FUTAROO</h1>
            <div>
                <ul className='hidden md:flex uppercase'>
                    <Link className='ml-10 text-sm uppercase hover:border-b ' href='/'>
                        Home
                    </Link>
                    <Link className='ml-10 text-sm uppercase hover:border-b ' href='/#Profile'>
                        Profile
                    </Link>
                    <Link className='ml-10 text-sm uppercase hover:border-b ' href='/#About'>
                        About
                    </Link>
                    <Link className='ml-10 text-sm uppercase hover:border-b ' href='/#Skills'>
                        Skills
                    </Link>
                    <Link className='ml-10 text-sm uppercase hover:border-b ' href='/#Projects'>
                        Projects
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : "" }>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black p-10 ease-in duration-500' : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500"}>
            <div>
                <div className='flex w-full items-center justify-between'>
                    
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 bg-white cursor-pointer'>
                    <AiOutlineClose className='text-black font-bold' />
                </div>
                </div>
                <div className='border-b border-gray-300 uppercase my-4'>
                    <p className='w-[85%] md:w[90%] py-4 font-bold'>Welcome To My Portfolio</p>
                </div>
            </div>
            <div className='py-4 flex flex-col'>
                <ul className='uppercase font-bold'>
                    <Link className='py-4 text-sm' href='/'>
                        <li className='py-4 text-sm'>Home</li>
                    </Link>
                    <Link href='/#Profile'>
                        <li className='py-4 text-sm'>Profile</li>
                    </Link>
                    <Link href='/#About'>
                        <li className='py-4 text-sm'>About</li>
                    </Link>
                    <Link href='/#Skills'>
                        <li className='py-4 text-sm'>Skills</li>
                    </Link>
                    <Link href='/#Projects'>
                        <li className='py-4 text-sm'>Projects</li>
                    </Link>
                </ul>
                
            </div>
            </div>
        </div>
        
        </div>
  )
}

export default Navbar
