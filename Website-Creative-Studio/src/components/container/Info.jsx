import React, {useState} from 'react'

const Info = () => {
    
  return (
    <div>
        <div className=' mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100 py-8 px-4 sm:p-16  mx-auto my-16 rounded-2xl'>
                <div className='sm:grid grid-cols-2 gap-4'>
                    <div className='col-span-1'>
                        <div className='w-[90%]'>
                            <h1 className='font-bold text-3xl py-4'>Your customers prefer a business with a website for information they can trust.</h1>
                            <p className='text-lg text-black/80'>Businesses of all sizes can leverage the internet for growth through well planned and executed design solutions.</p>
                            <p className='my-4 underline'>Forbes</p>
                        </div>
                    </div>
                    <div className='col-span-1 flex-row'>
                        <div className=''>
                        <p className='text-3xl sm:text-[4rem] font-bold'>100X</p>
                        <p className='text-xl sm:text-[2rem] font-medium'>ROI of spending $1 in UX</p>
                        <p className='sm:w-2/3'>Every $1 invested in UX brings $100 in return. That’s an ROI of a whopping 9,900%.</p>
                        </div>
                        <div className='pt-8'>
                            <div className='flex items-end'>
                        <p className='text-3xl sm:text-[4rem] font-bold'>84%</p>
                        {/* <p className='pb-6 pl-2'>of consumers</p> */}
                        </div>
                        <p className='text-xl sm:text-[2rem] font-medium'>prefers a business with a website</p>
                        <p  className='sm:w-2/3'>People believes a business with a website is more credible than one that only has a social media page.</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Info