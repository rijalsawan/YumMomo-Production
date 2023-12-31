import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <>
    <section class="text-gray-600 body-font min-h-screen">
          <h1 className='text-center font-semibold text-3xl my-10'>About Us</h1>
  <div class="container px-5 py-10 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/buddha.jpeg"/>
          <p class="leading-relaxed">Buddha Gurung is an ambitious student currently pursuing a bachelor&apos;s degree at the University of Winnipeg. Alongside his friend Sagar Kafle, he co-founded a successful online momo business here in Winnipeg, bringing the authentic taste of nepal to consumers. With a passion for entrepreneurship and a dedication to academic excellence, Buddha is making a mark in both the culinary and educational worlds.</p>
          <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Buddha Gurung</h2>
          <p class="text-gray-500">CEO</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-40 h-40 mb-8 rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/sagar.jpeg"/>
          <p class="leading-relaxed">Sagar Kafle is a driven entrepreneur and co-founder of the online momo business, in collaboration with his friend Buddha Gurung. Their venture has gained popularity for delivering delectable momos to satisfied customers. Sagar&apos;s strong business acumen, combined with his creativity, has played a crucial role in the success of their venture.</p>
          <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Sagar Kafle</h2>
          <p class="text-gray-500">Vice President</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/sawan.jpeg"/>
          <p class="leading-relaxed">Sawan Rijal is a talented web developer and a close friend of Buddha Gurung and Sagar Kafle. He played a crucial role in their momo business by creating a user-friendly web app, enabling seamless order placements for customers. With his technical expertise and dedication to supporting his friend&apos;s business endeavors, Sawan has become an essential part of the team&apos;s success.</p>
          <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Sawan Rijal</h2>
          <p class="text-gray-500">CTO</p>
        </div>
      </div>
      {/* <div class="lg:w-1/3 mx-auto lg:mb-0 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/cmomo.jpg"/>
          <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">John Doe</h2>
          <p class="text-gray-500">CTO</p>
        </div>
      </div> */}
    </div>
  </div>
</section>
    </>
  )
}

export default about