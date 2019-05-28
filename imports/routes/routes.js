import {Meteor} from 'meteor/meteor';
import React from 'react';
import SignUp from '../ui/SignUp';
import Dashbord  from '../ui/Dashboard';
import NotFound from '../ui/NotFound'
import Login from '../ui/Login';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import history from '../api/history'


const unauthPages = ['/','/signup'];
const authPages = ['/dashboard'];

const NotFoundRedirect = ()=>{
    <div>Test</div>
};

const onEnterPublicPage = () => {
    if(Meteor.userId()){
        history.replace('/dashboard');
    }
};

const onEnterPrivatePage = () => {
    if(!Meteor.userId()){
        history.replace('/');
    }
};

export const onAuthChange = (isAuth) => {
    const pathname = history.location.pathname;
    const isUnauthPage = unauthPages.includes(pathname);
    const isAuthPage = authPages.includes(pathname);

    //if on an unauth page and user logged in, redirect to /links
    if(isUnauthPage && isAuth){
        history.replace('/dashboard');
    }
    //if on auth page and not logged in, redirect to /
    if(isAuthPage && !isAuth){
        history.replace('/');
    }
};

export const routes = (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Login} onEnter={onEnterPublicPage()}/>
            <Route path="/signUp" component={SignUp} onEnter={onEnterPublicPage()}/>
            <Route path="/dashboard" component={Dashbord} onEnter={onEnterPrivatePage()}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);


