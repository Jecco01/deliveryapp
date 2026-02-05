import React from 'react'

const Hero = () => {
  return (
    <div className=' mx-60'>

        <div className=' flex  bg-green-400  max-container  rounded-lg   mt-5 h-80'>


            <div className=' flex  w-1/2 h-full '>
               <img src='/delivery.png' alt='delivery' width= '300px' height='200px'     className='  object-cover ' />
            </div>



            <div className='    w-1/3 h-full p-5'>
                <h1 className='  font-bold text-white text-2xl'>Get your Delicious food,at your doorstep</h1>
                <p className='text-white mt-5'>
                    Our delivery service ensures your food arrives quickly and fresh, straight to your doorstep.
                </p>
            </div>
            

       
         </div>

        <div className=' flex   max-container  rounded-lg   gap-5 mt-5 h-30 '>

            <div className=' flex  rounded-lg bg-yellow-400 w-1/3 h-full hover:scale-105  transition-transform ease-in-out duration-300 '>
                    <div className='  w-2/3 max-container  p-2 '>
                        <h2 className=' font-bold '> 
                            find your 
                            resturant
                        </h2>
                             <p  className='text-sm '> 
                                 choose your favorite restaurant

                             </p>
                    </div>
             </div>

            <div className=' flex rounded-lg bg-red-500 w-1/3 h-full  hover:scale-105  transition-transform ease-in-out duration-300'>

             <div className='  w-2/3 max-container  p-2 '>
                        <h2 className=' font-bold '> 
                            find tasty choices 
                            
                            
                        </h2>
                             <p  className='  text-sm'> 
                                 experince the full menu- add ons and extras

                             </p>
                    </div>
             </div>

            <div className=' flex rounded-lg bg-amber-500 w-1/3 h-full hover:scale-105  transition-transform ease-in-out duration-300'>
             <div className='  w-2/3 max-container p-2 '>
                        <h2 className=' font-bold '> 
                            wait for delivery 
                            
                        </h2>
                             <p  className='  text-sm'> 
                                 choose your favorite restaurant

                             </p>
                    </div>

            </div>
        </div>

    </div>
)
}
export default Hero;