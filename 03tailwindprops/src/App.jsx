import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

let myObj = {
  name: 'Hitesh',
  age: 24,
  address: {
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
  },
}
 let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function App() {


  return (
   <>
   <div className='flex flex-col justify-center items-center h-screen '>
    <Card  username="Hitesh" post="Devloper" myArr={newArr}/>
    <Card/>
    <Card/>
   </div>
   </>
  )
}

export default App
