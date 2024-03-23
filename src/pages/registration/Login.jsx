import React, { useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/FirebaseConfig'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader'

function Login() {
    const context=useContext(myContext)
    const {loading,setLoading} = context

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate();


    const login = async () =>{
        setLoading(true)
        try {
            const result = await signInWithEmailAndPassword(auth,email,password)
            toast.success('Signin Successfully', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/')
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            
        }

    }


  return (
    <div className='flex flex-col items-center justify-center h-screen gap-1 '>
        {loading&&<Loader/>}
            <div className='px-10 py-10 bg-gray-800 rounded-xl'>
                <div className="">
                    <h1 className='mb-4 text-xl font-bold text-center text-white'>Login</h1>
                </div>
                <div>
                    <input type="email"
                       value={email}
                       onChange={(e)=> setEmail(e.target.value)}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                       onChange={(e)=> setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className='flex justify-center mb-3 '>
                    <button
                    onClick={login}
                        className='w-full px-2 py-2 font-bold text-black bg-blue-600 rounded'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don&apos;t have an account <Link className='font-bold text-blue-500 ' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>

           <div>
           <p>username:rahul1@gmail.com</p>
            <p>pass:11111111</p>
           </div>

        </div>
  )
}

export default Login