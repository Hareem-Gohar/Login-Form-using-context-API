import React from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
const App = () => {
  return (
    <UserContextProvider UserContextProvider>
      <div className='h-screen flex justify-center items-center bg-cyan-900 flex-col px-10'>
        <h2 className='text-4xl text-white uppercase font-semibold'>
          App Using Context API
        </h2>
        <Login />
        <Profile />
      </div>
      
    </UserContextProvider>

  )
}

export default App