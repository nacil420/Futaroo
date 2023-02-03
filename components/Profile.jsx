import React from 'react'

const Profile = () => {
  return (
    <div id='Profile' className='w-full h-screen bg-black'>
      <div className='max-w-[1240px] h-screen justify-center text-center items-center flex mx-auto p-8'>
        <div>
          <p className='text-4xl font-bold'>HI, I'm <span className='text-4xl font-bold text-gray-500'>FUTAROO</span></p>
          <p className='text-4xl font-bold pt-4'>A Front End Developer</p>
          <p className='text-xl pt-4 '>I'm a front-end developer specializing in building (and occasionally designing) exeptional digital experiences. Currently I'm focused on building responsive front-end web applications while learning back-end technologie.</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
