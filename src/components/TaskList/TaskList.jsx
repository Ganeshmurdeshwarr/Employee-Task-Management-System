import React from 'react'

const TaskList = () => {
  return (
    <div id="tasklist" className='flex justify-start overflow-x-auto px-2 items-center
    flex-nowrap gap-5 h-[55%] w-full mt-10 py-5 '>
        <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl px-2 py-5 '>
           <div className='flex justify-between  items-center '>
            <h3 className='bg-red-600 px-3 py-1 text-sm rounded '>High</h3>
            <h3 className='text-sm'>20 feb 2025</h3>
           </div>
           <div>
            <h2 className='mt-5 text-2xl font-semibold '>Make a youtube video</h2>
            <p className='text-sm  mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, itaque.</p>
           </div>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl px-2 py-5 '>
           <div className='flex justify-between  items-center '>
            <h3 className='bg-red-600 px-3 py-1 text-sm rounded '>High</h3>
            <h3 className='text-sm'>20 feb 2025</h3>
           </div>
           <div>
            <h2 className='mt-5 text-2xl font-semibold '>Make a youtube video</h2>
            <p className='text-sm  mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, itaque.</p>
           </div>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl px-2 py-5 '>
           <div className='flex justify-between  items-center '>
            <h3 className='bg-red-600 px-3 py-1 text-sm rounded '>High</h3>
            <h3 className='text-sm'>20 feb 2025</h3>
           </div>
           <div>
            <h2 className='mt-5 text-2xl font-semibold '>Make a youtube video</h2>
            <p className='text-sm  mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, itaque.</p>
           </div>
        </div>
         <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl px-2 py-5 '>
           <div className='flex justify-between  items-center '>
            <h3 className='bg-red-600 px-3 py-1 text-sm rounded '>High</h3>
            <h3 className='text-sm'>20 feb 2025</h3>
           </div>
           <div>
            <h2 className='mt-5 text-2xl font-semibold '>Make a youtube video</h2>
            <p className='text-sm  mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, itaque.</p>
           </div>
        </div>
          <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl px-2 py-5 '>
           <div className='flex justify-between  items-center '>
            <h3 className='bg-red-600 px-3 py-1 text-sm rounded '>High</h3>
            <h3 className='text-sm'>20 feb 2025</h3>
           </div>
           <div>
            <h2 className='mt-5 text-2xl font-semibold '>Make a youtube video</h2>
            <p className='text-sm  mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, itaque.</p>
           </div>
        </div>
       
    </div>
  )
}

export default TaskList