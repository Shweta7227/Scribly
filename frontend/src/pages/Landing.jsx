import { Link } from "react-router-dom";

function Landing() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#6F4E37", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/" style={{ color: "var(--color-text)" }}>
                        Scribly
                    </Link>
                    <div className="ms-auto d-flex gap-2">
                        <Link to="/signin" className="btn btn-outline-dark">Sign In</Link>
                        <Link to="/signup" className="btn" style={{ backgroundColor: "#6F4E37", color: "#fff" }}>Sign Up</Link>
                    </div>
                </div>
            </nav>
            <h1> Landing Page!!<i className="fa-solid fa-heart"></i></h1>
        </div>
    )
}
export default Landing;