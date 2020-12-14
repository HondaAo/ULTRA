import Axios from 'axios';
import * as React from 'react' 
import { AuthContext } from '../auth/Context';
import { Header } from '../layout/Header'
import './DashBoard.css'
import axios from 'axios'
import { useState } from 'react';
import { Footer } from '../layout/Footer';
import { FaCheckCircle, FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import { RouteComponentProps } from 'react-router-dom'
import * as H from 'history'

interface DashBoard extends RouteComponentProps<{}> {
    history: H.History
}
export const Dashboard: React.FC<DashBoard> = ({ history}) =>{
    const { userInfo, setUserInfo } = React.useContext(AuthContext);
    const [ lessons, setLessons ] = useState([])
    const [ user, setUser ] = useState(null)
    React.useEffect(() => {
        setUserInfo(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null)
        console.log(userInfo)
        axios.get('/mylessons')
        .then(res => {
            setLessons(res.data.lessons)
        })
        .catch(err => console.log(err))
    }, [])
    const logout = () => {
        axios.get('/logout')
        .then(res => {
            alert(res.data.message)
            localStorage.removeItem('userInfo')
            history.push('/')
        })
        .catch(err => console.log(err))
    }
        return (
            <>
             <Header />
             <div className="dashboard-page">
              <div className="dashboard-content">
                <div className="dashboard-page-left">
                 <h1>Your Lessons List</h1>
                 <div className="mylesson-cards">
                 {lessons.map(lesson => {
                     return (
                         <>
                         <div className="mylesson-card">
                             <img src={lesson.image} alt="" />
                             <div className="mylesson-content">
                                 <p>{lesson.title}</p>
                             </div>
                         </div>
                        </>
                     )
                 })}
                 { lessons.length === 0 && <h3>No lesson exists</h3>}   
                </div>
                </div>
                <div className="dashboard-page-right">
                 <h3>User Info</h3>
                 { userInfo && (
                 <div className="userinfo_list">
                    <p className="userInfo">
                         <FaUserAlt className="userInfo-icon" />
                        <span>{userInfo.username}</span> 
                    </p>
                    <p>
                         <MdEmail className="userInfo-icon" />
                        <span>{userInfo.email}</span> 
                    </p>
                    <p>
                        <FaCheckCircle className="userInfo-icon" />
                        <span>{userInfo.status}</span>
                    </p>
                    <hr />
                    <button className="btn-logout" onClick={logout}>LOGOUT</button>
                 </div>
                 )}
                </div>
              </div>
             </div>
             <Footer />
            </>
        );
}