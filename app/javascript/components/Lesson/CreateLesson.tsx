import Axios from 'axios';
import * as React from 'react' 
import { useEffect, useState } from 'react';
import { AuthContext } from '../auth/Context';
import * as H from 'history'
import { RouteComponentProps } from 'react-router-dom'
import './Lesson.css'

interface CreateLesson extends RouteComponentProps<{}> {
    history: H.History,
}

export const CreateLesson: React.FC<CreateLesson> = ({history}) =>{
    const [ id, setId ] = useState(null)
    const [ video, setVideo] = useState(null)
    const [ image, setImage ] = useState('')
    const [ title, setTitle ] = useState('')
    const { userInfo, setUserInfo } = React.useContext(AuthContext);
    useEffect(() => {
        setUserInfo(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null)
        if(userInfo && userInfo.teacher){
            history.push('/dashboard')
        }
    },[])
    const onSubmit = (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append("video",video)
        form.append("title",title)
        form.append("image", image)
        form.append("id",id)
        console.log(video)
        Axios.post('/create_video',form)
        .then(res => {
            console.log(res.data)
            console.log(form)
        })
        .catch(err => console.log(err))
    } 
        return (
            <div className="create-lesson">
                <form className="create_lesson" onSubmit={onSubmit}>
                    <div>
                        <input type="number" placeholder="id" className="input-field" onChange={(e) => setId(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder="title" className="input-field" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder="image" className="input-field" onChange={(e) => setImage(e.target.value)} />
                    </div>
                    <div>
                        <input type="file" placeholder="video" className="input-field" onChange={(e) => setVideo(e.target.files[0])} />
                    </div>
                    <input type="submit" value="Register" className="home-btn" />
                </form>
            </div>
        );
}