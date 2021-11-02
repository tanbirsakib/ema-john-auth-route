import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
        <div className="login">
            <h3>Create Account</h3>
            <form >
                <input type="text" name="" id="" placeholder="Your Name" />
                <br />
                <input type="email" name="email" id="" placeholder="Your Email" />
                <br />
                <input type="password" name="password" id="" placeholder="Enter password" />
                <br />
                <input type="password" name="password" id="" placeholder="Re-enter password" />
                <br />
                <input type="submit" value="Submit" />
                <p>Already have an account?<Link to="/login">Login</Link></p>
                
            </form>
            <p>Sign in with google</p>
        <button className="btn-regular p">Sign In Google</button>
    </div>
    </div>
    );
};

export default Registration;