
import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import { useEffect } from 'react'

function App() {
  const[courses,setCourses]=useState([])
  useEffect(()=>{
    fetch('./fakeData.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
  },[])

  return (
    <>
     
      <h1 className='text-4xl font-black mb-5 text-cyan-300'>Our Courses </h1>
     <div className=''>
     <Courses courses={courses}></Courses> 
     </div>
      
    </>
  )
}

export default App
