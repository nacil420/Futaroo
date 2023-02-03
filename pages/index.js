import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import HomePages from '@/components/HomePages'
import Profile from '@/components/Profile'
import About from '@/components/About'
import Skill from '@/components/Skill'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomePages/>
      <Profile/>
      <About/>
      <Skill/>
      <Projects/>
      <Footer/>
    </div>
  )
}
