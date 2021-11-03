import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';
const Login = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    // tracking the path where login come from  or if didnt come from anywhere the component wanted to be , it will be redirect to home after login
    const redirect_uri = location.state?.from || "/shop";
    const history = useHistory()
    console.log("came from", location.state?.from)

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            // moving to the placeorder route by tracking the path by location.state.from 
            history.push(redirect_uri);
        })
    }
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="login">
                <h3>Log In</h3>
                <form >
                    <input type="email" name="email" id="email" placeholder="Your Email" />
                    <br />
                    <input type="password" name="password" id="password" />
                    <p>New to ema-john.Go for <Link to="/register">Registraton</Link></p>
                </form>
                <p>Sign in with google</p>
            <button 
             className="btn-regular p"
             onClick = {handleGoogleSignIn}
             >Sign In Google</button>
        </div>
        </div>
    );
};

export default Login;