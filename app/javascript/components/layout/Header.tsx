import * as React from 'react' 
import './Layout.css'
import '../Home.css'
import { Link } from 'react-router-dom'
import { FaRocket } from 'react-icons/fa'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../auth/Context'
import MediaQuery from 'react-responsive'
interface HeaderProps {
  
}

export const Header: React.FC<HeaderProps> = ({}) =>{
    const { userInfo, setUserInfo } = useContext(AuthContext);
    useEffect(() => {
        setUserInfo(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null)
    }, [])
        return (
            <div className="nav">
                <div className="navbar-element">
                <div className="nav-left">
                  <Link to="/" className="nav-logo">
                    <FaRocket style={{ marginRight: '15px'}} />
                      ULTRA
                  </Link>
                </div>
                <MediaQuery query="(min-width: 767px)">
                <div className="navbar-menu">
                   <ul className="menu-list">
                       <li><Link to="/" className="nav-menu">Top</Link></li>
                       <li><Link to="/lessons" className="nav-menu">Lessons</Link></li>
                       <li>{ !userInfo ? <Link to="/register" className="nav-menu-blue">SIGN UP</Link>: <Link to="/dashboard" className="nav-menu-blue">DashBoard</Link>}</li>
                   </ul>
                </div>
                </MediaQuery>
                </div>
               
            </div>
        );
}