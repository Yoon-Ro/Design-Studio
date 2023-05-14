import React from 'react'
import image from "../../assets/web1.jpeg";
import image2 from "../../assets/web2.jpeg";
import image3 from "../../assets/web3.jpeg";
import image4 from "../../assets/web4.jpeg";
import image5 from "../../assets/web5.jpeg";
import {MdWebAsset, MdSync} from "react-icons/md";
import {FaReact} from "react-icons/fa";
import {AiOutlineSmile} from "react-icons/ai";

const Service = () => {
  return (
    <div>
        <div className=' mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
{/* 
            <h1 className='text-center text-[5rem] font-medium  '>Our Service</h1>
            <h1 className='text-center w-1/3  mx-auto'>We replace unreliable freelancers and uncaring website tools for simple and fixed rate, with user centric design process, business growth and high conversion rate</h1> */}

            <div>
                <div className='sm:grid grid-cols-2 sm:p-16 mx-auto gap-4 '>
                <div className='col-span-1 '>
                    <div className='sticky sm:top-[30%]'>
                        <p className='pb-4 text-md font-bold text-blue-500'>Designed for you</p>
                    <h1 className='text-[2rem] font-bold leading-[2.2rem] '>Experiences that are built on Trust and feel Magical.

</h1>
                    <h1 className='leading-7 w-[90%] my-6 sm:text-lg text-black/80'>We are dedicated to creating meaningful experiences that engage, inspire, and delight your customers, using the result-drivendesign that enables your business to meet your needs and goals.</h1>
                    {/* <h1 className='text-sm w-[90%]'>As an award-winning Toronto Web Design Agency, every web design project at Brand Vision is unique and treated with the utmost care. Our team of web designers and web developers have a knack for creating visually stunning websites that are also functional and effective at achieving their goals. We have the expertise to bring your brand's online presence to life. Let us help you create the perfect online presentation for your business.</h1> */}
                    <button className="bg-blue-500 text-white px-8 py-4 rounded-xl font-medium mx-auto sm:mx-0">Book a Call</button>
                    </div>
                    </div>
                <div className='col-span-1'>
                    <img src={image} alt="/" className='py-4'/>
                    <img src={image2} alt="/" className='py-4'/>
                    <img src={image3} alt="/" className='py-4'/>
                    <img src={image4} alt="/" className='py-4'/>
                    <img src={image5} alt="/" className='py-4'/>
                </div>


                </div>
            </div>

<div className=''>
            <div className='sm:grid grid-cols-4 gap-16 sm:w-[90%] mx-auto py-20'>
                <div className='col-span-1 py-8 sm:py-0'>
                    <MdWebAsset size={56} className='text-blue-500 bg-slate-100 p-2 rounded-xl'/>
                    <p className=' font-bold text-md sm:text-xl py-4'>One-page Website</p>
                    <p className=' text-md font-medium text-black/60'>We offer client and server libraries in everything from React and PHP to .NET and iOS</p>
                </div>
                <div className='col-span-1 py-8 sm:py-0'>
                <MdSync size={56} className='text-blue-500 bg-slate-100 p-2 rounded-xl'/>

                    <p className='py-4 font-bold text-md sm:text-xl'>Totally Async</p>
                    <p className='text-md font-medium text-black/60'>We offer client and server libraries in everything from React and PHP to .NET and iOS</p>
                </div>
                <div className='col-span-1 py-8 sm:py-0'>
                    <FaReact size={56} className='text-blue-500 bg-slate-100 p-2 rounded-xl'/>
                    <p className='py-4 font-bold text-md sm:text-xl'>Built with React.JS</p>
                    <p className=' text-md font-medium text-black/60'>We offer client and server libraries in everything from React and PHP to .NET and iOS</p>
                </div>
                <div className='col-span-1 py-8 sm:py-0'>
                <AiOutlineSmile size={56} className='text-blue-500 bg-slate-100 p-2 rounded-xl'/>

                    <p className='py-4 font-bold text-md sm:text-xl'>Consumer Experience</p>
                    <p className='text-md font-medium text-black/60'>We offer client and server libraries in everything from React and PHP to .NET and iOS</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Service