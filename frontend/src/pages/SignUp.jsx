import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp(){
    const [formData, setFormData] = useState({email: "",password: "",}); //initialization with empty data
    return(
        <div>
          <h1>Signup Page</h1>
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
          </form>
        </div>
    )
}
export default SignUp;