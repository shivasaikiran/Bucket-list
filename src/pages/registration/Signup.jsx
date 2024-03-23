import React, {  useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../firebase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/Loader';



function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(myContext);
    const {loading, setLoading} =context;
 
    const Signup= async()=>{
        setLoading(true)
        if (name === "" || email === "" || password === "") {
            return toast.error("All fields are required")
        }
    try{
        const users=await createUserWithEmailAndPassword(auth,email,password)
        console.log(users)

        const user = {
            name: name,
            uid: users.user.uid,
            email: users.user.email,
             time : Timestamp.now()

        }
        const userRef = collection(fireDB, "users")
        await addDoc(userRef, user);
        toast.success("Signup Succesfully")

        setName("");
            setEmail("");
            setPassword("");
            setLoading(false)
            
    }
    catch(error){
        console.log(error)
        setLoading(false)
    }
}


    
    
  return (
    <div className='flex items-center justify-center h-screen '>
         {loading && <Loader/>}
            <div className='px-10 py-10 bg-gray-800 rounded-xl'>
                <div className="">
                    <h1 className='mb-4 text-xl font-bold text-center text-white'>Signup</h1>
                </div>
                <div>
                    <input type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                        name='name'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Name'
                    />
                </div>
                <div>
                    <input type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className='flex justify-center mb-3 '>
                    <button
                    onClick={Signup}
                        className='w-full px-2 py-2 font-bold text-white bg-yellow-500 rounded-lg '>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Have an account <Link className='font-bold text-yellow-500 ' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
  )
}

export default Signup