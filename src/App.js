
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Skill from './components/Skill';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Portfolios from './components/Portfolios';
import Education from './components/Education';
import Referees from './components/Referees';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <Router>
      <>

        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/Sidebar" component={Sidebar} />
          <Route path="/Skill" component={Skill} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Education" component={Education} />
          <Route path="/Experience" component={Experience} />
          <Route path="/Portfolios" component={Portfolios} />
          <Route path="/Referees" component={Referees} />
        </Switch>
        <Route path="/footer" component={Footer} />
      </>
    </Router>

  );
}

export default App;
