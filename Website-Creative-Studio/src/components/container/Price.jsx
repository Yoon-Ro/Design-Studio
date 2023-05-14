import React from 'react'

const Price = () => {
  return (
    <div className='py-10 bg-white sm:py-16 lg:py-24'>
        <div className='max-w-6xl px-4 mx-auto sm:px-6 lg:px-8'>
          
                
            <h1 className='text-[3rem] leading-[3.2rem] w-2/3 font-bold text-center mx-auto py-8'>Convert visitors into buyers</h1>
          
            <div className='grid md:grid-cols-3 gap-4'>
                <div className='col-span-1 md:col-span-2 p-8 border-2 rounded-xl hover:bg-slate-100/50'>
                   <p className='font-bold'>Your First Website</p>
                   <div className='flex items-baseline gap-4 py-4'> 
                   <p className='text-[4rem] leading-[3rem] font-bold py-2'>$299.99</p>
    
                    {/* <p className='line-through text-black/40 text-2xl invisible sm:visible'>$420</p> */}
           
                   </div>
                   <p className='text-sm inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-500'>only for first 10 customers</p>
                   <div className='sm:grid grid-cols-2 gap-4 py-2'>
                   <div className='col-span-1'>
                    <li className='py-2'>Single page website (6 sections)</li>
                    <li className='py-2'>One week delivery after design</li>
                    <li className='py-2'>User friendly and modern design</li>
                    <li className='py-2'>Mobile responsive</li>
                   </div>
                   <div className='col-span-1'>
                   <li className='py-2'>Conversion leading contents</li>
                    <li className='py-2'>Connects to social media accounts</li>
                    <li className='py-2'>Search Engine Optimization</li>
                    <li className='py-2'>domain & hosting fees are excluded</li>
                   </div>

                   </div>
                   <button className="bg-blue-500 text-white px-8 py-4 rounded-xl font-medium mt-4">Get Started</button>

                </div>
                <div className='col-span-1 p-8 border-2 rounded-xl hover:bg-slate-100/50'>
                <p className='font-bold'>Plus Membership</p>
                   <div className='flex items-baseline gap-2 py-4'> 
                   <p className='text-[2rem] leading-[3rem] font-bold py-2'>$59.99</p>
                   <p className='text-xs'>per month</p>
           
                   </div>
                   <p className='text-sm inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-500'>Your remote designer</p>
                   <div className='grid grid-cols-1 gap-4 py-2'>
                   <div className='col-span-1'>
                    <li className='py-2'>Unlimited requests</li>
                    <li className='py-2'>Unlimited brands</li>
                    <li className='py-2'>Unlimited designs</li>
                    <li className='py-2'>Pause or cancel anytime</li>
                   </div>
                   </div>
                   <button className="bg-blue-500 text-white px-8 py-4 rounded-xl font-medium mt-4">Get Started</button>

                </div>
            </div>



            {/*  */}
            {/*  */}
            {/*  */}
            <h1 className='text-[2rem] leading-[2.2rem] w-2/3 font-bold text-center mx-auto pt-16 pb-8'>Plus Memebership also includes</h1>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
                <div className='col-span-1 bg-black/90 rounded-xl px-8 py-4 text-white'>Digital ads</div>
                <div className='col-span-1 bg-black/90 rounded-xl px-8 py-4 text-white'>Social media graphics</div>
                <div className='col-span-1 bg-black/90 rounded-xl px-8 py-4 text-white'>Business card</div>
                <div className='col-span-1 bg-black/90 rounded-xl px-8 py-4 text-white'>Email graphics</div>
                <div className='col-span-1 bg-black/90 rounded-xl px-8 py-4 text-white'>Newsletter design</div>
                <div className='col-span-1 bg-black/90 rounded-xl px-8 py-4 text-white'>Brochure</div>
                <div className='col-span-1 bg-black/90 rounded-xl px-8 py-4 text-white'>Logo + branding</div>
                <div className='col-span-1 bg-black/90 rounded-xl px-8 py-4 text-white'>Blog graphics</div>
            </div>

     
        </div>
    </div>
  )
}

export default Price