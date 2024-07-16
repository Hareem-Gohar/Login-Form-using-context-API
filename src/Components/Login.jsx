import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }
    return (
        <div className='bg-white w-full lg:w-[500px] flex flex-col justify-center items-center gap-4 py-6 my-5 border-2 border-black'>
            <h1 className='text-2xl font-semibold'>Login Page</h1>
            <div className=' flex gap-3 items-center'>
                <label className='text-xl font-medium' htmlFor="">Username</label>
                <input
                    className='border-2 px-3 py-2'
                    type="text"
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value
                    )} />
            </div>
            <div className=" flex gap-3 items-center">
                <label htmlFor=""
                    className='text-xl font-medium'>Password</label>
                <input type="text"
                    className='border-2 px-3 py-2'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value
                    )} />
            </div>

            <button
            className='bg-black px-4 py-2 text-white font-medium'
            onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login