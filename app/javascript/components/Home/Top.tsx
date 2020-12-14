import * as React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
interface TopProps {

}

export const Top: React.FC<TopProps> = ({}) =>{
    const image = require('../images/image.svg')
        return (
            <div className="info-section">
             <div className="info-top">
               <div className="info-top-left">
                   <p>Be Self-taught Engineer</p>
                   <h1>Become a legend from scrath<br />for Novice Web Developer</h1>
                   <p>We help web developer ecpecialiy beginner. Our team of unique <br /> specialistcan help you achieve your business goals.</p>
                   <Link to="/lessons" className="home-btn">Get Started</Link>
               </div>
               <div className="info-top-right">
                   <img src={image} />
               </div>
             </div>
            </div>
        );
}