import * as React from 'react' 
import { useState, useEffect, useContext } from 'react';
import './Pages.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AuthContext } from '../auth/Context';
import * as H from 'history'
import { RouteComponentProps } from 'react-router-dom'
import MediaQuery from 'react-responsive'
interface Login extends RouteComponentProps<{}> {
    history: H.History,
    Login: () => void
}

export const Login: React.FC<Login> = ({ history }) =>{
    const [ email, setEmail ] = useState<string>()
    const [ password, setPassword ] = useState<string>()
    const { userInfo, setUserInfo } = useContext(AuthContext);
    useEffect(() => {
        setUserInfo(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null)
        if(userInfo){
            history.push('/dashboard')
        }
    }, [userInfo])
    const Login = (e: any) => {
        e.preventDefault();
        const user_info = {
            email,
            password,
        }
        axios.post('http://localhost:3000/login',user_info)
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
                        <h3>Welcome back to my learning platform</h3>
                        <p>Enter your nickname, email and password</p>
                        <form onSubmit={Login}>
                        <div className="field">
                            <input onChange={(e) => setEmail(e.target.value)} className="input-field" type="email" placeholder="email" />
                        </div>
                        <div className="field">
                            <input onChange={(e) => setPassword(e.target.value)} className="input-field" type="password" placeholder="password" />
                        </div>
                        <div className="field">
                            <p>Forget your password?</p>
                        </div>
                        <div className="btn-field">
                            <input type="submit" value="LOGIN" className="btn-submit-auth" />
                            <span>Not having account?<Link to="/register">Register</Link></span>
                        </div>
                        </form>
                        <p>© 2020 ULTRA, Inc. All rights reserved</p>
                    </div>
                    <MediaQuery query="(min-width: 767px)">
                    <div className="auth-card-right">
                     <img src="https://images.pexels.com/photos/3414792/pexels-photo-3414792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                    </div>
                    </MediaQuery>
                </div>
            </div>

        );
}