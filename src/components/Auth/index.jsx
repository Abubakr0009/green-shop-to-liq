import { LogIn } from 'lucide-react'
import React, { useEffect } from 'react'
import Register from './Register'
import Login from './Login'
import '../../index.css'

function Auth({ isLoginOpen, isRegisterOpen, setIsModalOpen , setIsLogged}) {
    useEffect(() => {
        const login = document.getElementById('login')
        const register = document.getElementById('register')
        if (login && register) {
            if (isLoginOpen) { register.style.opacity = 0; setTimeout(() => { login.style.opacity = 1 }, 100) };
            if (isRegisterOpen) { login.style.opacity = 0; setTimeout(() => { register.style.opacity = 1 }, 100) };
        }
    }, [isLoginOpen, isRegisterOpen])

    return (
        <div className="auth-container">
            <div id='login' className="transi">
                {isLoginOpen && <Login setIsModalOpen={setIsModalOpen} setIsLogged={setIsLogged} />}
            </div>
            <div id='register' className="transi">
                {isRegisterOpen && <Register setIsModalOpen={setIsModalOpen} setIsLogged={setIsLogged}/>}
            </div>
        </div>
    )
}

export default Auth