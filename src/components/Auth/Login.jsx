import React, { useState } from 'react'

const Login = () => {

const [email,setEmail]= useState("");
const [password,setPassword]=useState("");

function handleSubmit(e){
  e.preventDefault()
  console.log(email, password)
  setEmail("")
  setPassword('')
}



  return (
    <div className='flex w-screen h-screen items-center justify-center' >
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onClick={(e)=>handleSubmit(e)} className='flex flex-col items-center justify-center '>
                <input value={email}
                onChange={(e)=>{
                   setEmail(e.target.value) 
                }}
                required 
                className='border-2 outline-none bg-transparent border-emerald-600 py-4 px-3 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your Email' 
                />
                <input value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className='border-2 outline-none bg-transparent border-emerald-600 py-4 px-3 text-xl rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder='Enter your Password' 
                />
                <button className='mt-8 border-none outline-none  bg-emerald-600 py-3 px-25 text-xl text-white rounded-full placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
    
  )
}

export default Login;