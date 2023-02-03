import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div id='About' className='w-full h-screen bg-white'>
      <div className='max-w-[1240px] w-full h-screen justify-center items-center p-4 pt-16 flex text-center mx-auto'>
        <div>
            <p className='text-4xl text-black'>About</p>
            <p className='text-4xl font-bold text-gray-500 pt-4'>WHO AM I ?</p>
            <p className='text-2xl text-black pt-4'>// I am not your normal developer \\</p>
            <p className='text-2xl text-black pt-4'>I have spent the last 3 Month working as a professional design graphic freelance. I started working with HTML & CSS to make some edits on a small business website that I was operating. What I thought was just a few small edits turned into a love for programming.</p>
            <p className='text-2xl text-black pt-4'>Fascinated with how intricate programming can be I was quickly drawn to learn more. I started learning javascript and was oven more ethused with making websites interactive. I then started freelancing for TopUP companies on the multiple platforms. I am now spending my time building projects with React JS,Next JS, and learning new technologies</p>
            <Link  href='/'> 
            <p className='underline  text-2xl text-gray-500 pb-20 pt-8'>Check out some of my latest projects</p>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default About
