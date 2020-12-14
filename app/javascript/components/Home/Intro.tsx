import * as React from 'react' 

interface IntroProps {

}

export const Intro: React.FC<IntroProps> = ({}) =>{
        return (
            <div className="intro-page">
                <div className="intro-section">
                <div className="intro-section-left">
                    <img src="https://images.pexels.com/photos/5952234/pexels-photo-5952234.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </div>
                <div className="intro-section-right">
                    <span>AO HONDA</span>
                    <h1>
                     Hi! Everyone!
                     Please check my introduction page and portfolio.
                    </h1>
                    <p>I have been full stack engineer below, you can contact<br /> and watch my experience.</p>
                    <button className="home-btn">LEARN MORE</button>
                </div>
                </div>
            </div>
        );
}