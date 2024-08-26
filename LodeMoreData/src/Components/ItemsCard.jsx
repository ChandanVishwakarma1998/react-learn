import React from 'react'

function ItemCard({thumbnail,category ,title , price , availabilityStatus ,brand}) {
  return (
    <div class="flex-col md:flex-col justify-evenly flex gap-4 items-start mx-4 py-9">
    <div class="flex bg-white rounded-lg shadow dark:bg-blue-950 flex-col md:flex-row">
       <div class="relative w-full md:w-48 flex justify-center items-center">
        <img src={thumbnail} alt={category}
          class="object-scale-down w-full h-60 md:h-full rounded-t-lg  md:rounded-l-lg md:rounded-t-none"/>
       </div>
       <form class="flex-auto p-6">
         <div class="flex flex-wrap">
         <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">{title}</h1>
        <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">{price} ₹. </div>
        <div class="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">{availabilityStatus}</div>
        </div>
        <div class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
        {/* <div class="flex space-x-2">
<h3 className='text-center font-thin text-black '>{product.description}</h3>
        
      </div> */}
      <a href="#"
          class="hidden ml-auto text-sm text-gray-500 underline md:block dark:text-gray-300">{brand}
      </a>
  </div>
  <div class="flex mb-4 text-sm font-medium">
      <button type="button"
          class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">Buy
          now</button>
  </div>
  <p class="text-sm text-gray-500 dark:text-gray-300">Free shipping on all states in INDIA . order fast.</p>
 </form>
</div>
</div>
  )
}

export default ItemCard 