import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  // let obj={
  //   name:"jatin",
  //   age : 22,
  // }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4000 rounded-xl mb-5'>tailwind test</h1>
    <Card  username = "Chai Aur Code"/>
    <Card/>
    </>
  )
}

export default App
