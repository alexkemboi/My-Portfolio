
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import Home from './components/Home';
import Skill from './components/Skill';
import Profile from './components/Profile';
import Experience  from './components/Experience';
import Portfolios from './components/Portfolios';
import Education from './components/Education';

function App() {
  return (
    <Router>
      <>

      <Route exact path="/" component={Home}/>
      <Switch>
        <Route path="/Skill" component={Skill}/>
        <Route path="/Profile" component={Profile}/>
        <Route path="/Education" component={Education}/>
        <Route path="/Experience" component={Experience}/>
        <Route path="/Portfolios" component={Portfolios}/>
      </Switch>

      </>
    </Router>
  );
}

export default App;
