import * as React from 'react' 
import { Header } from '../layout/Header';
import { RouteComponentProps } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Footer } from '../layout/Footer';
import './Lesson.css'
interface Lesson extends RouteComponentProps<{}> {
   match: any
}


export const Lesson: React.FC<Lesson> = ({ match }) =>{
    const id = match.params.id
    const [ course, setCourse ] = useState(null)
    useEffect(() => {
      Axios.get(`/get_lessons/${id}`)
      .then(res => {
          setCourse(res.data.lesson)
      })
      .catch(err => console.log(err))
    },[])
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
                        ${course.charge}
                    </div>
                   { course.charge > 0 ? <button className="btn-logout">Go Payment</button> : <button className="btn-logout" onClick={() => {
                       Axios.post(`/register_lesson/${course.id}`)
                       .then(res => {
                           alert(res.data.message)
                           console.log(res.data)
                       })
                       .catch(err => console.log(err))
                   }} >Register</button> }
                </div>
                </>
                )}
            </div>
            <Footer />
            </>
        );
}