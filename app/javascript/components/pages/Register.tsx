import * as React from 'react' 
import { useContext, useEffect, useState } from 'react';
import './Pages.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AuthContext } from '../auth/Context';
import * as H from 'history'
import { RouteComponentProps } from 'react-router-dom'

interface Register extends RouteComponentProps<{}> {
    history: H.History,
    register: () => void
}

export const Register: React.FC<Register> = ({ history }) =>{
    const [ username, setUsername ] = useState<string>()
    const [ email, setEmail ] = useState<string>()
    const [ password, setPassword ] = useState<string>()
    const [ passwordConfirm, setPasswordConfirm ] = useState<string>()
    const { userInfo, setUserInfo } = useContext(AuthContext);
    useEffect(() => {
        setUserInfo(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null)
        if(userInfo){
            history.push('/dashboard')
        }
    }, [userInfo])
    const register = (e: any) => {
        e.preventDefault();
        const user_info = {
            username,
            email,
            password,
            passwordConfirm
        }
        console.log(user_info)
        axios.post('http://localhost:3000/signup',user_info)
        .then(res => {
            localStorage.setItem('userInfo',JSON.stringify(res.data.user))
            history.push('/dashboard')
        })
        .catch(err => console.log(err))
    }
        return (
            <div className="auth-page">
                <div className="auth-card">
                    <div className="auth-card-left">
                        <h3>Welcome to my learning platform</h3>
                        <p>Enter your nickname, email and password</p>
                        <form onSubmit={register}>
                        <div className="field">
                            <input onChange={(e) => setUsername(e.target.value)} className="input-field" type="text" placeholder="username" />
                        </div>
                        <div className="field">
                            <input onChange={(e) => setEmail(e.target.value)} className="input-field" type="email" placeholder="email" />
                        </div>
                        <div className="field">
                            <input onChange={(e) => setPassword(e.target.value)} className="input-field" type="password" placeholder="password" />
                        </div>
                        <div className="field">
                            <input onChange={(e) => setPasswordConfirm(e.target.value)} className="input-field" type="password" placeholder="confirm password" />
                        </div>
                        <div className="btn-field">
                            <input type="submit" value="REGISTER" className="btn-submit-auth" />
                            <span>Already having account?<Link to="/login">Login</Link></span>
                        </div>
                        </form>
                        <p>© 2020 ULTRA, Inc. All rights reserved</p>
                    </div>
                    <div className="auth-card-right">
                     <img src="https://images.pexels.com/photos/3414792/pexels-photo-3414792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                    </div>
                </div>
            </div>

        );
}