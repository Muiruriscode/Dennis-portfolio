import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { Home, Register, Login, Resume, Hire, Job } from './pages'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route path='/services'>
            <Hire />
          </Route>
          <Route path='/job/:category'>
            <Job />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
