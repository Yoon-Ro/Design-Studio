import React from 'react'

const Faq = () => {
  return (
<section class="py-10 bg-slate-50 sm:py-16 lg:py-24">
    <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold">Questions & Answers</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">Explore the common questions and answers about Celebration</p>
        </div>

        <div class="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-black">How to create an account?</p>
                    <p class="mt-4 text-base text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>

            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-black">How can I make payment?</p>
                    <p class="mt-4 text-base text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>

            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-black">Do you provide discounts?</p>
                    <p class="mt-4 text-base text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>

            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-black">How do you provide support?</p>
                    <p class="mt-4 text-base text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center mt-12 md:mt-20">
            <div class="px-8 py-4 text-center bg-blue-500 rounded-full">
                <p class="text-gray-50">Didn’t find the answer you are looking for? <a href="#" title="" class="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline">Contact us</a></p>
            </div>
        </div>
    </div>
</section>


  )
}

export default Faq