import React from 'react'

function Review() {
  return (
    <div mt-10>
         {/* Review Section */}
         <div className=' w-screen flex  items-center justify-center px-4 py-2 mt-10 h-[30vh ] gap-4 flex-col   border-t '>
        <textarea
          className='w-[50vw] h-1/4 border border-gray-300 p-2'
          placeholder='Write your reviews here'
        />
        <button
          className='mt-2 bg-blue-500 text-white px-4 py-1 rounded'
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Review
