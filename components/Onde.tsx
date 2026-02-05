import React from 'react'

const Onde = () => {
  return (
    <section className='mt-10 items-center justify-center mx-60'>

        <div  className=' text-center'>
            <h1 className=' text-2xl font-bold '>
                Explore The Best Resturants Near You
            </h1>
            <p className='text-sm'> craving somrthing tasty ? discover  Resturants nearby you and order online</p>
        </div>

        <div className='flex items-center justify-center gap-10 mt-5 mb-10  '>

                <div className='  w-50 h-50 rounded-lg'>
                    <img src="/restaurant.jfif" alt="onde1"  className='hover:scale-105 transition-transform duration-300  w-full h-full object-cover rounded-xl' />
                    <div className=' flex gap-2 '>
                        <button className=' px-2  mt-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-grey-800 font-medium
                        shadow-md'> italian</button>

                        <button className='px-2 mt-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-grey-800 font-medium
                        shadow-md'> spicy</button>

                    <button className='px-2 mt-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-grey-800 font-medium
                        shadow-md'> italian</button>
                    </div>
                    <p className='text-center mt-2 text-lg font-bold'> 
                        De Manor Resturant
                    </p>

                </div>

                <div className=' w-50 h-50 rounded-lg'>
                    <img src="/restaurant2.jfif" alt="onde2"  className='hover:scale-105 transition-transform duration-300 w-full h-full object-cover rounded-xl'/>

                    <div className=' flex gap-2 '>
                        <button className=' px-2  mt-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-grey-800 font-medium
                        shadow-md'> italian</button>

                        <button className='px-2 mt-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-grey-800 font-medium
                        shadow-md'> spicy</button>

                    <button className='px-2 mt-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-grey-800 font-medium
                        shadow-md'> italian</button>
                    </div>
                    <p className='text-center mt-2 text-lg font-bold'> 
                        De Manor Resturant
                    </p>

                </div>
                <div className=' w-50 h-50 rounded-lg'>


                <img src="/restaurant3.jfif" alt="onde3"   className='hover:scale-105 transition-transform duration-300 w-full h-full object-cover rounded-xl' />
                <div className=' flex gap-2 '>
                    <button className=' px-2  mt-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-grey-800 font-medium
                    shadow-md'> italian</button>

                    <button className='px-2 mt-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-grey-800 font-medium
                    shadow-md'> spicy</button>

                <button className='px-2 mt-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-grey-800 font-medium
                    shadow-md'> italian</button>
                </div>
                <div>
                <p className='text-center mt-2 text-lg font-bold'> 
                    De Manor Resturant
                </p>
                </div>
                </div>
    
        
        </div>
    
    </section>
  )
}

export default Onde