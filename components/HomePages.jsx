import React from 'react'
import Image from 'next/image'
import Kirito from '../public/img/Kirito.jpg'

const HomePages = () => {
  return (
    <div className='w-full h-screen bg-white'>
      <div className='max-w-[1240px] w-full h-screen justify-center items-center flex text-center mx-auto p-2'>
        <div className='pb-12'>
            <div className='p-16 '>
                <Image className='items-center border-8 border-black justify-center rounded-full' src={Kirito} width={350} height={300}/>
            </div>
            <h1 className='text-black font-bold text-4xl uppercase'>Ahmad Yusuf Taruna</h1>
            <h1 className='text-black font-bold text-4xl uppercase'>(FUTAROO)</h1>
        </div>
      </div>
    </div>
  )
}

export default HomePages
