// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import  * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Home } from '../components/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Dashboard } from '../components/DashBoard/Dashboard'
import { Login } from '../components/pages/Login'
import { Register } from '../components/pages/Register'
import { AuthState } from '../components/auth/Context'
import { LessonList } from '../components/Lesson/LessonList'
import { Payment } from '../components/Payment/Payment'
import { Lesson } from '../components/Lesson/Lesson'
import { CreateLesson } from '../components/Lesson/CreateLesson'

const Index = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/lessons" exact component={LessonList} />
          <Route path="/lessons/:id" component={Lesson} />
          <Route path="/payment/:id" component={Payment} />
          <Route path="/lesson_create" component={CreateLesson} />
        </Switch>
    </BrowserRouter>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
  <AuthState>
    <Index />
  </AuthState>,
    document.body.appendChild(document.createElement('div')),
  )
})
