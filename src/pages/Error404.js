import { Link } from "react-router-dom"
import "../styles/error404.css"

export default function Error404() {
    return (
        <div className="error404">
            <h2 className="error-h2">404</h2>
            <p className="error-p">Oops! Something is wrong.</p>
            <Link className="error-button" to="/cv-website">Go back in Home page</Link>
        </div>
    )
}
