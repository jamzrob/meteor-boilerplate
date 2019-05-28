import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import SignUp from '../ui/SignUp';
import Dashboard  from '../ui/Dashboard';
import NotFound from '../ui/NotFound'
import Login from '../ui/Login';



const unauthPages = ['/','/signup'];
const authPages = ['/dashboard'];


const onEnterPublicPage = () => {
    if(Meteor.userId()){
        browserHistory.replace('/dashboard');
    }
};

const onEnterPrivatePage = () => {
    if(!Meteor.userId()){
        browserHistory.replace('/');
    }
};

export const onAuthChange = (isAuth) => {
    const pathname = browserHistory.getCurrentLocation().pathname;
    const isUnauthPage = unauthPages.includes(pathname);
    const isAuthPage = authPages.includes(pathname);

    //if on an unauth page and user logged in, redirect to /links
    if(isUnauthPage && isAuth){
        browserHistory.replace('/dashboard');
    }
    //if on auth page and not logged in, redirect to /
    if(isAuthPage && !isAuth){
        browserHistory.replace('/');
    }
};

export const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
        <Route path="/signup" component={SignUp} onEnter={onEnterPublicPage}/>
        <Route path="/dashboard" component={Dashboard} onEnter={onEnterPrivatePage}/>
        <Route path="*" component={NotFound}/>
    </Router>
);


