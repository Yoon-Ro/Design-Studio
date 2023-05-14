import React from 'react'
import img from "../../assets/computer.png";

const Cta = () => {
  return (
<section class="py-10 sm:py-16 lg:py-24 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500">
    <div class="max-w-7xl px-4 mx-auto sm:px-8 md:px-6 lg:px-4">
<div className='sm:grid grid-cols-3 '>
    <div className='bg-white col-span-2  sm:rounded-l-2xl flex items-center'>
        <div className='px-8 py-16'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>This isn't just a design agency</h1>
        <p className='w-3/4 mb-8 mt-4 sm:mt-8'>Superboost your business with the most modern design trends, with meaningful experiences that engage, inspire, and delight your customers.</p>
        <div className="flex gap-4 justify-normal">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-xl font-medium">Book a Call</button>
            <button className="text-black/80 bg-black/20 px-8 py-4 rounded-xl font-medium ">About me</button>
          </div>

    
        </div>
    </div>
    <div className='bg-white/60 col-span-1 sm:rounded-r-2xl flex items-center'>
        <div className='mx-auto'>
            <img src={img} alt="/" className=' object-fill h-fill'/>
        </div>
    </div>

</div>
        </div>

{/* 
// 
// 
 */}
 {/*  */}
 {/* Footer */}
        <div class="pt-8 max-w-7xl px-4 mx-auto sm:px-8 md:px-6 lg:px-4">
            <div className='text-white'>
                <ul className='flex justify-between'>
                    <li>All copyrights @ Yoon Ro</li>
                    <ul className='flex justify-evenly gap-8'>
                        <li>Portfolio</li>
                        <li>Contact</li>
                        <li>LinkedIn</li>
                    </ul>
                </ul>

            </div>
</div>
        </section>
  )
}

export default Cta