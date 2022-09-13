import "../../Assets/Input.css"
import "../../Assets/Button.css"
import React, {  useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { registerUser, db } from "../../firebase/"
import { doc, setDoc, Timestamp } from "firebase/firestore" 
import toast from 'react-hot-toast'
import Input from "../../Components/Input"

export default function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleRegister = () => {
        registerUser(email, password)
        .then((userCredential) => {
            const user = userCredential.user
            setDoc(doc(db, 'users', user.uid), {
                name: name,
                email: email,
                authProvider: "local",
                registeredAt: Timestamp.fromDate(new Date()),
            })
            toast.success('Successfully registerd an account')
            navigate("/dashboard")
        })
        .catch((error) => {
            const errorCode = error.code
            toast.error(`${errorCode}`)
            console.log(errorCode)
        })
    }

    return (
        <div className='flex justify-center items-center my-[40px]'>
            <div className=' w-11/12 max-w-[700px] px-10 py-10 rounded-3xl bg-white border-2 border-gray-200 drop-shadow-lg'>
                <h1 className='text-5xl font-semibold'>Register</h1>
                <p className='font-medium text-lg text-gray-500 mt-4'>Please enter you details.</p>
                <div className='mt-8'>
                    <div className='flex flex-col'>
                        <label className='text-lg font-medium'>Name</label>
                        <Input 
                            className="default-input"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-lg font-medium'>Email</label>
                        <Input 
                            className="default-input"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='text-lg font-medium'>Password</label>
                        <Input 
                            className="default-input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div> 
                    <div className='mt-8 flex flex-col gap-y-4'>
                        <button className="input-btn" onClick={handleRegister}>Sign in</button>
                    </div>
                    <div className='mt-8 flex justify-center items-center'>
                        <p className='font-medium text-base'>Have an account? 
                            <Link to="/login" className='ml-2 font-medium text-base text-violet-500'>Sign in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
