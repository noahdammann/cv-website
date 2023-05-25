import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

import quizImgLoader from "../images/quiz.jpg"

export default function Landing2() {
    return (
        <div className="landing">
            <div className="product-info-container">
                <h1>Get a Professional CV that gets you Hired</h1>
                <Link to="/cv-website/start-quiz" className="non-decorated-link"><button className="button" id="call-to-action-button">Start Now <span id="arrowIcon"><FontAwesomeIcon icon={faCircleArrowRight} /></span></button></Link>
            </div>
            <img src={quizImgLoader} id="quiz-img-loader" />
        </div>
    )
}
