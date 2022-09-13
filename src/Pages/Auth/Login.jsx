import '../../Assets/Input.css';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from "../../firebase/";
import toast from 'react-hot-toast';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

export default function Login() {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleLogin = () => {
        loginUser(email, password)
        .then((userCredential) => {
            toast.success('Successfully logged in')
            navigate('/dashboard')
        })
        .catch((error) => {
            const errorCode = error.code
            toast.error(`${errorCode}`);
            console.log(errorCode)
        })
    }

    return (
        <div className='flex justify-center items-center my-[40px]'>
            <div className=' w-11/12 max-w-[700px] px-10 py-10 rounded-3xl bg-white border-2 border-gray-200 drop-shadow-lg'>
                <h1 className='text-5xl font-semibold'>Login</h1>
                <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter you details.</p>
                <div className='mt-8'>
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
                        <div className='mt-8 flex justify-between items-center'>
                            <Link to="/reset" className='font-medium text-base text-violet-500'>Forgot password</Link>
                        </div>    
                    </div>
                    <div className='mt-8 flex flex-col gap-y-4'>
                        <Button className="input-btn" handleClick={handleLogin}>Sign in</Button>
                    </div>
                    <div className='mt-8 flex justify-center items-center'>
                        <p className='font-medium text-base'>Don't have an account? 
                        <Link to="/register" className='ml-2 font-medium text-base text-violet-500'>Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}