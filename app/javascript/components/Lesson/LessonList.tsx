import Axios from 'axios';
import * as React from 'react' 
import { useEffect, useState } from 'react';
import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header'
import './Lesson.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
interface Lesson {
}

export const LessonList: React.FC<Lesson> = ({}) =>{
    const [ lessons, setLessons ] = useState([])
    const [ param, setParam ] = useState<string>()
    const [ searchLessons, setSearchLessons ] = useState([])
    const [ selected, setSelected ] = useState(false)
    const [ message, setMessage ] = useState<string>()
    useEffect(() => {
        axios.get('/get_lessons')
        .then(res => {
            setLessons(res.data.lessons)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    const search = (e) => {
        e.preventDefault();
        axios.get(`/search_lesson/${param}`)
        .then(res => {
            setSearchLessons(res.data.lessons)
            setMessage(res.data.message)
            setSelected(true)
        })
        .catch(err => console.log(err))
    }
         return (
            <>
            <Header />
            <div className="lesson-list">
                <div className="lesson-list-header">
                 <h1>Lessons List</h1>
                 <form className="lessons-search" onSubmit={search}>
                     <input type="text" placeholder="Find a lesson" onChange={(e: any) => setParam(e.target.value)} className="lessons-search-input"/><input className="lessons-search-button" value="search" type="submit"/>
                 </form>
                </div>
                {message && <div className="message">
                    <p className="ui green message">{message}</p>
                </div>}
                <div className="lesson-cards">
                { !selected && lessons.length > 0 && lessons.map(lesson => {
                     return (
                        <Link to={`/lessons/${lesson.id}`} className="lesson-card">
                            <img src={lesson.image} alt="" />
                            <div className="lesson-card-content">
                                <h2>{lesson.title}</h2>
                                {lesson.description.length > 80 ? <p>{lesson.description.slice(0, 75) + '....'}</p>:<p>{lesson.description}</p>}
                                <div className="content-bottom">
                                    <p style={{ color: '#4862ff'}}>Ao Honda</p>
                                    <p style={{ color: 'tomato'}}>FREE</p>
                                </div>
                            </div>
                         </Link>
                     )
                 })}
                 { selected && searchLessons.map(lesson => {
                     return (
                         <Link to={`/lessons/${lesson.id}`} className="lesson-card">
                            <img src={lesson.image} alt="" />
                            <div className="lesson-card-content">
                                <h2>{lesson.title}</h2>
                                {lesson.description.length > 80 ? <p>{lesson.description.slice(0, 75) + '....'}</p>:<p>{lesson.description}</p>}
                                <div className="content-bottom">
                                    <p style={{ color: '#4862ff'}}>Ao Honda</p>
                                    <p style={{ color: 'tomato'}}>FREE</p>
                                </div>
                            </div>
                         </Link>
                     )
                 })}
                </div>
            </div>
            <Footer />
            </>
        );
}