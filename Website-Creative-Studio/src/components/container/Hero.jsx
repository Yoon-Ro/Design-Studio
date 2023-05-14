import React from "react";
import Test from "../../assets/Image.png";
import bg from "../../assets/location.jpeg";

const Hero = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 py-8" id="Header">



    <div className="mx-automax-w-7xl  ">
      <div className="grid grid-cols-6 mt-[4rem] items-center sm:py-16">
        {/* LEFT */}
        <div className="col-span-6 lg:col-span-3 h-fit  sm:w-2/3 mx-auto w-full">

            {/* CATCHPHRASE */}
          <h1 className="text-[3.5rem] leading-[3.5rem] lg:text-[3rem] lg:leading-[3.2rem] xl:text-[4rem] xl:leading-[4.2rem] font-bold  px-4 tracking-tighter mt-8 text-center sm:text-left">
            Design empowers <br/>business growth{" "}
          </h1>
          {/* DESCRIPTION */}
          <p className="my-8 text-md sm:text-lg px-4 text-black/80 sm:text-left text-center w-2/3 sm:w-full mx-auto">
            Millions of businesses in Canada — from small businesses to
            corporations — Our result-driven design can confidently increase 
            your revenue, sales, calls and customers.
          </p>
          {/* CTA */}
          <div className="flex px-4 gap-4">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-xl font-medium mx-auto sm:mx-0">Book a Call</button>

          </div>
          <p className="px-4 py-4 text-black/80 text-xs text-center sm:text-left">Result-Driven Design, guaranteed.</p>
        </div>
        {/* RIGHT */}
        <div className="invisible lg:visible lg:col-span-3">
          <img src={Test} alt="/" className="shad"/>

        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Hero;
