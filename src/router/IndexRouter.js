import React from 'react'
import{HashRouter, Route,Switch,Redirect} from 'react-router-dom'
import Home from '../view/Home'
import Info from '../view/Info'
import Projects from '../view/Projects'
import NoPermission from '../view/NoPermission'
import Mole from '../view/mole/Mole'
import Drum from '../view/drum/Drum'
import Slide from '../view/slide/Slide'
import LocalStorage from '../view/localStorage/LocalStorage'
import Css from '../view/css/Css'
import Shift from '../view/shift/Shift'
import Dropdown from '../view/dropdown/Dropdown'
import Speech from '../view/speech/Speech'
import Ahead from '../view/ahead/Ahead'

export default function IndexRouter() {
  return (
    <HashRouter>
            <Switch>
            <Route path='/home' component={Home} exact/>
            <Route path='/home/aboutMe' component={Info} exact/>
            <Route path='/home/projects' component={Projects} exact/>            
            <Route path='/home/projects/1' component={Mole} exact/>
            <Route path='/home/projects/2' component={Drum} exact/> 
            <Route path='/home/projects/3' component={Slide} exact/>             
            <Route path='/home/projects/4' component={LocalStorage} exact/>             
            <Route path='/home/projects/5' component={Css} exact/>             
            <Route path='/home/projects/6' component={Shift} exact/>             
            <Route path='/home/projects/7' component={Dropdown} exact/>             
            <Route path='/home/projects/8' component={Ahead} exact/>             
            <Route path='/home/projects/9' component={Speech} exact/>             
            <Redirect from='/' to='/home' exact />
            <Route path='*' component={NoPermission} />
            </Switch>
    </HashRouter>
  )
}
