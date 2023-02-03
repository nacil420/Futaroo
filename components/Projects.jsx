import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Bg1 from '../public/img/html.png'

const Projects = () => {
  return (
    <div id='Projects' className='w-full h-auto bg-white  '>
        <div className='max-w-[1240px] mx-auto px-2 py-20'>
            <p className='text-4xl font-bold text-center items-center tracking-widest uppercase pb-8 text-gray-500'>My Projects</p>
            <div className='grid md:grid-cols-2 gap-8'>

            <div className='realtive bg-white flex items-center justify-center h-auto w-full shadow-2xl shadow-black-800 rounded-xl p-4 group hover:bg-gradient-to-r from-black to-[#cecece]'>
    <Image className='rounded-xl group-hover:opacity-10' src={Bg1} alt='/'/>
<div className='hidden group-hover:block absolute top-[50] left-[50] translate-x-[-50] translate-y-[-50]'>
    <h3 className='text-2xl text-white font-bold tracking-wider text-center'>NONE</h3>
    <p className='pb-4 pt-2 text-white text-center'></p>
    <Link href='/Materi'>
        <p className='text-center py-3 rounded-lg bg-black text-white font-bold text-lg cursor-pointer '>Start</p>
    </Link>
</div>
</div>
<div className='realtive bg-white flex items-center justify-center h-auto w-full shadow-2xl shadow-black-800 rounded-xl p-4 group hover:bg-gradient-to-r from-black to-[#cecece]'>
    <Image className='rounded-xl group-hover:opacity-10' src={Bg1} alt='/'/>
<div className='hidden group-hover:block absolute top-[50] left-[50] translate-x-[-50] translate-y-[-50]'>
    <h3 className='text-2xl text-white font-bold tracking-wider text-center'>NONE</h3>
    <p className='pb-4 pt-2 text-white text-center'></p>
    <Link href='/Course'>
        <p className='text-center py-3 rounded-lg bg-black text-white font-bold text-lg cursor-pointer '>Start</p>
    </Link>
</div>
</div>
<div className='realtive bg-white flex items-center justify-center h-auto w-full shadow-2xl shadow-black-800 rounded-xl p-4 group hover:bg-gradient-to-r from-black to-[#cecece]'>
    <Image className='rounded-xl group-hover:opacity-10' src={Bg1} alt='/'/>
<div className='hidden group-hover:block absolute top-[50] left-[50] translate-x-[-50] translate-y-[-50]'>
    <h3 className='text-2xl text-white font-bold tracking-wider text-center'>NONE</h3>
    <p className='pb-4 pt-2 text-white text-center'></p>
    <Link href='/Course'>
        <p className='text-center py-3 rounded-lg bg-black text-white font-bold text-lg cursor-pointer '>Start</p>
    </Link>
</div>
</div>

<div className='realtive bg-white flex items-center justify-center h-auto w-full shadow-2xl shadow-black-800 rounded-xl p-4 group hover:bg-gradient-to-r from-black to-[#cecece]'>
    <Image className='rounded-xl group-hover:opacity-10' src={Bg1} alt='/'/>
<div className='hidden group-hover:block absolute top-[50] left-[50] translate-x-[-50] translate-y-[-50]'>
    <h3 className='text-2xl text-white font-bold tracking-wider text-center'>NONE</h3>
    <p className='pb-4 pt-2 text-white text-center'></p>
    <Link href='/Course'>
        <p className='text-center py-3 rounded-lg bg-black text-white font-bold text-lg cursor-pointer '>Start</p>
    </Link>
</div>
</div>
            </div>
        </div>
    </div>
  )
}

export default Projects
