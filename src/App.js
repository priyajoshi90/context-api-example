import React,{Component} from 'react';
 
import { BrowserRouter as Router, Route } from "react-router-dom";

import  Home  from './components/home';
import  aboutPage from './components/About/aboutPage';
import companyPage from './components/Company/companyPage';
import coursesPage from './components/Courses/coursePage';
 import '../node_modules/bootstrap/dist/css/bootstrap.css';
import NavBar from './NavBar';


class App extends Component {
  render() {
    return (
     
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/company" component={companyPage} />
          <Route path="/about" component={aboutPage} />
          <Route path="/courses" component={coursesPage} />
           
        </div>
      </Router>
      
    );
  }
}

export default App;