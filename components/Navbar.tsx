'use client'

import Link from 'next/link'
import React, { useEffect,  useState } from 'react'
import Exbutton from './Exbutton'

const Navbar = () => {


 const [scrolled , setScrolled] =useState(false);
 
 useEffect(() => {
    const onScroll = () =>{
        setScrolled( window.scrollY >20);
    }
        window.addEventListener("scroll", onScroll);
        return () =>
            window.removeEventListener( "scroll",onScroll);
    },[]);

  return (
    <nav className={` sticky z-50 top-0 ${ scrolled? "bg-white shadow-md text-black":" bg-transparent text-black"}`} >

        <div className=' flex h-16 max container  m-5 mx-auto '>
            <div className='text-xl font-bold flex items-center gap-4 mx-auto'>
                navbar
            </div>

            <div className=' flex items-center justify-center mx-auto gap-4 font-semibold'>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
            </div>


             <div className='gap-4  flex items-center mx-auto'>
                <Exbutton />
             </div>

        </div>
    </nav>
  )
}

export default Navbar