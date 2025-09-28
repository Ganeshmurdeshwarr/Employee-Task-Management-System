import React from 'react'

const FailedTask = ({data}) => {

  const {date, title, description, category}=data

  return (
  <div className="flex-shrink-0 h-full w-[300px] bg-gradient-to-br from-red-800 to-red-600 rounded-2xl p-4 shadow-lg text-white hover:scale-105 transition-transform">
  <div className="flex justify-between items-center">
    <h3 className="bg-red-900 px-3 py-1 text-sm rounded-lg">{category}</h3>
    <h3 className="text-sm">{date}</h3>
  </div>

  <h2 className="mt-5 text-2xl font-bold">{title}</h2>
  <p className="text-sm mt-2 text-white/90">{description}</p>

  <div className="mt-4">
    <button className="w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg font-medium">Failed</button>
  </div>
</div>

  )
}

export default FailedTask