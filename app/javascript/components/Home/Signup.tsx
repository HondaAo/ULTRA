import * as React from 'react' 
import * as image from "../images/chat.svg";
import {Link} from 'react-router-dom'
interface Signup {
    
}

export const Signup: React.FC<Signup> = ({}) =>{
        return (
            <div className="signup">
                <div className="signup-content">
                    <div className="signup-content-left">
                        <img src={image} alt="" />
                    </div>
                    <div className="signup-content-right">
                        <p>Free trial</p>
                        <h1>You can get a lot of free course now</h1>
                        <p style={{ marginBottom: '35px'}}>We will provide a lot of free lesson, you can choose any course for free.<br/>
                           Of course, you can chat with instructor in this period. Let's try it.
                        </p>
                        <Link to="/register" className="home-btn" >Signup now</Link>
                    </div>
                </div>
            </div>
        );
}