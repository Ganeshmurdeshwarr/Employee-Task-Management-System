import React from 'react'

const CompleteTask = ({data}) => {

  const {date, title, description, category}=data

  return (
      <div className="flex-shrink-0 h-full w-[300px] bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-4 shadow-lg text-white hover:scale-105 transition-transform">
  <div className="flex justify-between items-center">
    <h3 className="bg-blue-700 px-3 py-1 text-sm rounded-lg">{category}</h3>
    <h3 className="text-sm">{date}</h3>
  </div>

  <h2 className="mt-5 text-2xl font-bold">{title}</h2>
  <p className="text-sm mt-2 text-white/90">{description}</p>

  <div className="mt-4">
    <button className="w-full bg-green-500 hover:bg-green-600 py-2 rounded-lg font-medium">Complete</button>
  </div>
</div>

  )
}

export default CompleteTask