import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import Reset from './Pages/Auth/ForgotPassword'
import Cover from './Pages/Cover'
import Dashboard from './Pages/Dashboard'
import './Assets/App.css'

function App() {
    return (
        <div className='app'>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Cover />}/>
                    <Route exact path='/login' element={<Login />}/>
                    <Route exact path='/register' element={<Register />}/>
                    <Route exact path='/reset' element={<Reset />}/>
                    <Route exact path='/dashboard' element={<Dashboard />}/>
                    <Route exact path='*'/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
