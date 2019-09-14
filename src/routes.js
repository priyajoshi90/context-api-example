import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './components/home';
import CompanyPage from './components/Company/companyPage';
import AboutPage from './components/About/aboutPage';


export default(
    <Switch>
        <Route exact path="/" component={Home}/>
        
    </Switch>
);