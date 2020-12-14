import * as React from 'react' 

interface MembershipProps {

}

export const Membership: React.FC<MembershipProps> = ({}) =>{
        return (
            <div className="member-ship">
                <div className="register-email">
                    <h1>Join my exclusive membership to recieve the latest news and trends.</h1>
                    <p>You can unsubscribe any time.</p>
                    <div className="register-input">
                        <input type="text" placeholder="Email Address" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="member-footer">
                    <div className="footer-list">
                        <h2>About me</h2>
                        <ul className="footer-ul">
                            <li>Portfolio</li>
                            <li>Experience</li>
                            <li>Skill set</li>
                            <li>Github</li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <h2>Contact me</h2>
                        <ul className="footer-ul">
                            <li>Contact</li>
                            <li>Support</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <h2>Lessons</h2>
                        <ul className="footer-ul">
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>Rails</li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <h2>Social Media</h2>
                        <ul className="footer-ul">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
}