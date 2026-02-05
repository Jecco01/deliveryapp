import Hero from '@/components/Hero'
import React from 'react'
import Onde from '@/components/Onde'
import Brief from '@/components/Brief'
const page = () => {
  return (
    < section className='bg-white'>
    <div>
      <Hero/>
      <Onde/>
      <Brief/>
    </div>
    </ section>
  )
}

export default page