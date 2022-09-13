import "../../Assets/Input.css"
import "../../Assets/Button.css"
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { resetPassword } from "../../firebase";
import toast from 'react-hot-toast'
import Button from "../../Components/Button"
import Input from "../../Components/Input"

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleReset = () => {
        resetPassword(email)
        .then(() => {
            toast.success("Password reset email sent!")
            navigate("/")
        })
        .catch((error) => {
            const errorCode = error.code
            toast.error(`${errorCode}`)
            console.log(errorCode)
        })
    }
    
    return (
        <div className='flex justify-center items-center my-[140px]'>
            <div className=' w-11/12 max-w-[700px] px-10 py-10 rounded-3xl bg-white border-2 border-gray-200 drop-shadow-lg'>
                <h1 className='text-5xl font-semibold'>Forgot Password</h1>
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
                    <div className='mt-8 flex flex-col gap-y-4'>
                        <Button className="input-btn" handleClick={handleReset}>Send password reset email</Button>
                    </div>
                    <div className='mt-8 flex justify-center items-center'>
                        <p className='font-medium text-base'>Don't have an account? 
                        <Link to="/register" className='ml-2 font-medium text-base text-violet-500'>Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}