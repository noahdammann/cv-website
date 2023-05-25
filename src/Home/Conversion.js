import { Link } from "react-router-dom"

import conversion from "../images/conversion.png"

import "../styles/conversion.css"
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Conversion() {
    return (
        <div className="conversion">
            <h2>Ready to get the <span className="blue">CV you deserve?</span></h2>
            <div className="conv-container">
                <div className="conv-right">
                    <h3>Professionally written CV for only <span className="price-tag">R199!</span></h3>
                    <Link to="/cv-website/quiz/section1"><button className="button" id="conversion-button">Get Started <span id="conversion-arrow-icon"><FontAwesomeIcon icon={faCircleArrowRight} /></span></button></Link>
                </div>
                <img className="conversion-image" src={conversion} alt="Man satisfied with CV" />
            </div>
        </div>
    )
}
