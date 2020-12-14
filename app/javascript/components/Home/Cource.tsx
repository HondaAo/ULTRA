import * as React from 'react' 
import { FaDragon } from 'react-icons/fa'
import { GiNinjaHeroicStance, GiRockGolem } from 'react-icons/gi'
import { Link } from 'react-router-dom'

interface CourceProps {

}

export const Cource: React.FC<CourceProps> = ({}) =>{
        return (
            <div className="course-page">
                <h1>Our Course Type</h1>
                <div className="course-cards">
                    <div className="course-card">
                        <GiNinjaHeroicStance className="card-icon" />
                        <h3>Ninja Course</h3>
                        <h1>$9.99</h1>
                        <p>per month</p>
                        <div className="card-content">
                            <p>more than 10 courses</p>
                            <p>chat with teachers</p>
                            <p>join the programming comminity</p>
                        </div>
                        <Link to="/payment/1" className="home-btn">Choose Course</Link>
                    </div>
                    <div className="course-card">
                        <GiRockGolem className="card-icon" />
                        <h3>Golem Course</h3>
                        <h1>$19.99</h1>
                        <p>per 3 month</p>
                        <div className="card-content">
                            <p>more than 20 courses</p>
                            <p>chat with teachers</p>
                            <p>join the programming comminity</p>
                        </div>
                        <Link to="/payment/2" className="home-btn">Choose Course</Link>
                    </div>
                    <div className="course-card">
                        <FaDragon className="card-icon" />
                        <h3>Dragon Course</h3>
                        <h1>$49.99</h1>
                        <p>per year</p>
                        <div className="card-content">
                            <p>unlimited courses</p>
                            <p>chat with teachers</p>
                            <p>join the programming comminity</p>
                        </div>
                        <Link to="/payment/3" className="home-btn">Choose Course</Link>
                    </div>
                </div>
            </div>
        );
}