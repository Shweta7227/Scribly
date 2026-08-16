import { useState } from "react";
import { Link } from "react-router-dom";
import "../features/auth/auth.css";

function SignUp() {
    const [formData, setFormData] = useState({ email: "", password: "", }); //initialization with empty data
    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>Signup Page</h1>
                <form>
                    <div className="auth-field">
                        <label for="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="auth-field">
                        <label for="pwd">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <button type="submit" className="auth-button">Sign Up</button>
                    <div className="auth-links">
                        <Link to="/">Back to Home</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUp;