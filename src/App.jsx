
import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import { useEffect } from 'react'
 export const totalCredits=15;
function App() {
  const[courses,setCourses]=useState([]);
  const [cart,setCart]=useState([])
  useEffect(()=>{
    fetch('./fakeData.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
  },[]);
  const handleAddToCart=(course)=>{
    console.log(course);
    const credit =cart.reduce((p,c)=>p+c.credit,0);
    if (credit+course.credit>totalCredits) {
      return alert(`only ${totalCredits} are allowed`)
    }
    const alredyExist=cart.find((c)=>c.id==course.id);
    if (!alredyExist) {
      setCart([...cart,course]);
    }
   

  }

  return (
    <>
     
     <div className='bg-base-200 p-8 rounded-lg'>
     <h1 className='text-4xl font-black mb-5 text-cyan-300'>Our Courses </h1>
     <div className=''>
     <Courses courses={courses} cart={cart} handleAddToCart={handleAddToCart}></Courses> 
     </div>
      
     </div>
    </>
  )
}

export default App
