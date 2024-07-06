import React, { useState } from 'react'
import Header from './Header'
import { API_END_POINT } from './utils/constant'
import axios from "axios"


function Login() {
    const [isLogin, setIsLogin] = useState(false)
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginHandler = () => {
        setIsLogin(!isLogin)
    }

    const getInputData = async (e) => {
        e.preventDefault()
        const user = { fullName, email, password }
        try {
            const res = await axios.post(`${API_END_POINT}/register`, user)
            console.log(res);
        } catch (error) {
            console.log(error);
        }

        // console.log(fullName, email, password);
        setFullName("")
        setEmail("")
        setPassword("")
    }


    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='w-[100vw] h-[100vh]' src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-650-80.jpg.webp" alt="banner" />
            </div>
            <form onSubmit={getInputData} className='absolute my-20 p-8 mx-auto w-3/12 left-0 right-0 bg-black flex flex-col items-center justify-center opacity-85 rounded-lg'>
                <h1 className='text-white text-3xl mb-5 font-bold'>{isLogin ? "Login" : "SignUp"}</h1>
                <div className='flex flex-col'>
                    {
                        !isLogin && <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" placeholder='Full Name' className='outline-none p-3 my-3 rounded-sm bg-gray-800 text-white' />
                    }

                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' className='outline-none p-3 my-3 rounded-sm bg-gray-800 text-white' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='outline-none p-3 my-3 rounded-sm bg-gray-800 text-white' />
                    <button className='bg-red-600 mt-4 p-3 font-medium text-white rounded-sm'>{isLogin ? "Login" : "SignUp"}</button>
                    <p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"}
                        <span onClick={loginHandler} className='text-blue-900 ml-1 font-medium cursor-pointer'>{isLogin ? "SignUp" : "Login"}</span>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login