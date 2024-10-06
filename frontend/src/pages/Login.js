import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login-page">
            <h2>Login Page</h2>
            <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
