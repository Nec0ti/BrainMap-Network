import React from 'react';
import './Signup.css';

const Signup = () => {
    return (
        <div className="signup-page">
            <h2>Signup Page</h2>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Signup;
