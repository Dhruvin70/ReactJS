import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (



    <>
    <div className='w-full h-screen  duration-200'style={{backgroundColor:color}}>
<div className='fixed flex flex-wrap justify-center  py-3 inset-y-12 left-3'>
  <div className='flex flex-wrap justify-center w-16 gap-3  shadow-xl bg-white pt-5 rounded-full'>
  <button className='rounded-full  w-10 h-10 ' style={{backgroundColor:"pink"}} onClick={()=>{setColor("pink")}}></button>
  <button className='rounded-full  w-10 h-10 ' style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}></button>
  <button className='rounded-full  w-10 h-10 ' style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}></button>
  <button className='rounded-full  w-10 h-10 ' style={{backgroundColor:"yellow"}} onClick={()=>{setColor("yellow")}}></button>
  <button className='rounded-full  w-10 h-10 ' style={{backgroundColor:"violet"}} onClick={()=>{setColor("violet")}}></button>
  <button className='rounded-full  w-10 h-10 ' style={{backgroundColor:"black"}} onClick={()=>{setColor("black")}}></button>
  <button className='rounded-full  w-10 h-10 ' style={{backgroundColor:"orange"}} onClick={()=>{setColor("orange")}}></button>
  <button className='rounded-full  w-10 h-10 ' style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}></button>




</div>

        
      </div>

    </div>
    </>
  )
}

export default App
