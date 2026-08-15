import { useState } from "react";
import { Link } from "react-router-dom";

function SignIn(){
    return(
        <div>
          <h1>SignIn Page</h1>
          <form>
            <div>
                <label for="email">Email</label>
                <input type="email" id="email"/>
            </div>
            <div>
                <label for="pwd">Password</label>
                <input type="password" id="password"/>
            </div>
            <div>
                <button type="submit">Sign Up</button>
            </div>
            <Link to="/">Back to Home</Link>
            <Link to="/forgot-password">Forgot Password?</Link>
          </form>
        </div>
    )
}
export default SignIn;