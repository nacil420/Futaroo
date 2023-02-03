import React from 'react'
import Image from 'next/image'
import htmlImg from '../public/img/html.png'
import cssImg from '../public/img/css.png'
import jsImg from '../public/img/javascript.png'
import reactImg from '../public/img/react.png'
import nextjsImg from '../public/img/nextjs.png'
import nodeImg from '../public/img/node.png'
import mongoImg from '../public/img/mongo.png'
import github1Img from '../public/img/github1.png'

const Skill = () => {
  return (
    <div id='Skills' className='w-full lg:h-screen p-2 bg-black'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full items-center py-16 '>
        <p className='text-4xl text-white'>Skills</p>
        <p className='text-4xl pb-16 font-bold pt-4 uppercase text-gray-500'>What can I Do ?</p>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='bg-white p-6 shadow-lg shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid px-12 grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={htmlImg} width='64' height='64' alt='/'/>
              </div>
              <div className='flex text-black uppercase font-bold flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 shadow-lg shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid px-12 grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={cssImg} width='64' height='64' alt='/'/>
              </div>
              <div className='flex text-black uppercase font-bold flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 shadow-lg shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid px-12 grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={jsImg} width='64' height='64' alt='/'/>
              </div>
              <div className='flex text-black uppercase font-bold flex-col items-center justify-center'>
                <h3>Java Script</h3>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 shadow-lg shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid px-12 grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={reactImg} width='64' height='64' alt='/'/>
              </div>
              <div className='flex text-black uppercase font-bold flex-col items-center justify-center'>
                <h3>REACT</h3>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 shadow-lg shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid px-12 grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={nextjsImg} width='64' height='64' alt='/'/>
              </div>
              <div className='flex text-black uppercase font-bold flex-col items-center justify-center'>
                <h3>NEXT JS</h3>
              </div>
            </div>
          </div>
        
          <div className='bg-white p-6 shadow-lg shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid px-12 grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={nodeImg} width='64' height='64' alt='/'/>
              </div>
              <div className='flex text-black uppercase font-bold flex-col items-center justify-center'>
                <h3>NODE</h3>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 shadow-lg shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid px-12 grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={mongoImg} width='64' height='64' alt='/'/>
              </div>
              <div className='flex text-black uppercase font-bold flex-col items-center justify-center'>
                <h3>MONGO</h3>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 shadow-lg shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid px-12 grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={github1Img} width='64' height='64' alt='/'/>
              </div>
              <div className='flex text-black uppercase font-bold flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>

          



        </div>
      </div>
    </div>
  )
}

export default Skill
