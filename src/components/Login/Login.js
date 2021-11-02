import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';
const Login = () => {
    const {user, googleSignIn } = useAuth();
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="login">
                <h3>Log In</h3>
                <form >
                    <input type="email" name="email" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="password" id="" />
                    <p>New to ema-john.Go for <Link to="/register">Registraton</Link></p>
                </form>
                <p>Sign in with google</p>
            <button 
             className="btn-regular p"
             onClick = {googleSignIn}
             >Sign In Google</button>
        </div>
        </div>
    );
};

export default Login;