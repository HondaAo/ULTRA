import * as React from 'react' 

interface SignupProps {

}

export const Signup: React.FC<SignupProps> = ({}) =>{
    const image = require('../images/chat.svg')
        return (
            <div className="signup">
                <div className="signup-content">
                    <div className="signup-content-left">
                        <img src={image} alt="" />
                    </div>
                    <div className="signup-content-right">
                        <p>Free trial</p>
                        <h1>You can apply a week free trial now</h1>
                        <p>We will provide a week free trial, you can choose any course for free.<br/>
                           Of course, you can chat with instructor in this period. Let's try it.
                        </p>
                        <button className="home-btn">Signup now</button>
                    </div>
                </div>
            </div>
        );
}