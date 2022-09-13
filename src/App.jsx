import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import Reset from './Pages/Auth/ForgotPassword'
import Cover from './Pages/Cover'
import Dashboard from './Pages/Dashboard'
import { AuthProvider } from './Context/AuthContext'
import PrivateRoute from './Context/PrivateRoute'
import GuestHeader from './Components/GuestHeader'
import AuthHeader from './Components/AuthHeader'
import RecipeDetails from './Pages/RecipeDetails'
import { Toaster } from 'react-hot-toast'

function App() {
    return (
        <div className='app'>
            <Toaster></Toaster>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<AuthHeader />}>
                            <Route exact path='/dashboard' element={
                                <PrivateRoute>
                                    <Dashboard />
                                </PrivateRoute>
                            }/>
                            <Route exact path='/recipe-details' element={
                                <PrivateRoute>
                                    <RecipeDetails />
                                </PrivateRoute>
                            }/>
                        </Route>
                        <Route element={<GuestHeader />} >
                            <Route path='/login' element={<Login />}/>
                            <Route path='/register' element={<Register />}/>
                            <Route path='/reset' element={<Reset />}/>
                            <Route path='/' element={<Cover />}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}

export default App
