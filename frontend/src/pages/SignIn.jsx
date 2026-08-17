import { useState } from "react";
import { Link } from "react-router-dom";

function SignIn(){
    return(
        <div className="auth-page">
            <div className="auth-card">
                <h1>SignIn Page</h1>
                <form>
                    <div className="auth-field">
                        <label for="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="auth-field">
                        <label for="pwd">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <button type="submit" className="auth-button">Sign In</button>
                    <div className="auth-links">
                        <Link to="/">Back to Home</Link>
                        <Link to="/forgot-password">Forgot Password?</Link>

                    </div>
                </form>
            </div>
        </div>
        
    )
}
export default SignIn;