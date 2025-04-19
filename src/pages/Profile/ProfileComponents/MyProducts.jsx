import { Link } from 'lucide-react'
import React from 'react'

function MyProducts() {
  return (
    <div>
      <button className='bg-[#46A358] text-white py-2 px-3 cursor-pointer rounded font-semibold text-base'>Add new</button>
      <div className="flex justify-between items-center max-w-[1240px] mx-auto py-5">
        <ul className="flex gap-[100px] items-center font-size-[24px] text-lg text-gray-700">
          <li>Product</li>
          <li>Price</li>
          <li>Total</li>
        </ul>
        <div className="flex items-center gap-4">
          
          
        </div>
      </div>
      <hr className="max-w-[1280px] mx-auto bg-[#46A35880] border-none h-[1px]" />
    </div>
  )
}

export default MyProducts