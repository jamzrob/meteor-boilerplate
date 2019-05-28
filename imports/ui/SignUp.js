import React from "react";
import {Link} from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base';

export default class SignUp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }

    onSubmit(e){
        e.preventDefault();

        // trims all leading and trailing spaces
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        if(password.length < 9){
            return this.setState({error:'Password must be more than 8 characters long'});
        }

        Accounts.createUser({email, password}, (err) =>{
            if(err){
                this.setState({error:err.reason});
            } else{
                this.setState({error:''});
            }
        });
    }




    render () {
        return (
            <div className="boxed-view">
                <div className="boxed-view__box">
                    <h1>Join</h1>
                    {this.state.error ? <p>{this.state.error}</p> : undefined}
                    <form onSubmit={this.onSubmit.bind(this)} noValidate>
                        <input type="email" ref="email" name="email" placeholder="Email"/>
                        <input type="password" ref="password" name="password" placeholder="Password"/>
                        <button className="button">Sign Up!</button>
                    </form>
                    <Link to='/login'>Already have an account?</Link>
                </div>
            </div>
        );
    }
}
