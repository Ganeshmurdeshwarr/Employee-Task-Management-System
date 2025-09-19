import React from 'react'

const CompleteTask = ({data}) => {

  const {date, title, description, category}=data

  return (
        <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl px-2 py-5 ">
      <div className="flex justify-between  items-center ">
        <h3 className="bg-red-600 px-3 py-1 text-sm rounded ">{category}</h3>
        <h3 className="text-sm">{date}</h3>
      </div>

        <h2 className="mt-5 text-2xl font-semibold ">{title}</h2>
        <p className="text-sm  mt-2">
          {description}
        </p>
     
      <div className=" mt-2">
        <button className="w-full "> Complete</button>
      </div>
    </div>
  )
}

export default CompleteTask