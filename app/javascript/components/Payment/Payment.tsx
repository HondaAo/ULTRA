import * as React from 'react' 
import { Header } from '../layout/Header';
import { RouteComponentProps } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import './Payment.css'
import { Footer } from '../layout/Footer';
import { Checkout } from './Checkout';
import { AuthContext } from '../auth/Context';
import { GoAlert } from 'react-icons/go'
interface Payment extends RouteComponentProps<{}> {
   match: any
}

export const Payment: React.FC<Payment> = ({ match }) =>{
    const id = match.params.id
    const [ course, setCourse ] = useState(null)
    const [ payment, setPayment ] = useState(false)
    const [ message, setMessage ] = useState<string>()
    const { userInfo, setUserInfo } = React.useContext(AuthContext);
    React.useEffect(() => {
        setUserInfo(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null)
        Axios.get(`/get_course/${id}`)
        .then(res => {
            setCourse(res.data.course)
        })
        .catch(err => console.log(err))
    },[])
    const alert = () => {
        setMessage("You already have registered other course.")
    }
        return (
            <>
            <Header />
            <div className="payment-page">
                {  course && (
                <>
                <div className="payment-left">
                    <h1>{course.title} course</h1>
                    <div className="course-content">
                    </div>
                </div>
                <div className="payment-right">
                    <h2>Charge</h2>
                    <div className="charge-content">
                        <p>{course.title}</p>
                        <p>X 1</p>
                    </div>
                    <hr />
                    <div className="charge-total">
                        ${course.charge}.99
                    </div>
                    { userInfo && userInfo.status === "normal" && <button className="btn-logout" onClick={() => setPayment(true)}>Go Payment</button>}
                    { userInfo && userInfo.status !== "normal" && <button className="btn-logout" onClick={alert}>Go Payment</button>}
                    { payment && <Checkout course={course} />}
                    { message && <div className="alert-message"><GoAlert style={{ marginRight: '10px', color: 'red'}} />{message}</div>}
                </div>
                </>
                )}
            </div>
            <Footer />
            </>
        );
}