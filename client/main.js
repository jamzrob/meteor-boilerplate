import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker';
import {routes, onAuthChange} from '../imports/routes/routes'
import '../imports/startup/simple-schema-config';

Tracker.autorun(()=> {
    const isAuth = !!Meteor.userId();
    onAuthChange(isAuth);
});


Meteor.startup(()=>{
    ReactDOM.render(routes, document.getElementById('app'));
});