import { Link, Navigate, useLoaderData } from "react-router-dom"

import quizImage from "../images/quiz.jpg"

import "../styles/start-quiz.css"

function value_limit(val, min, max) {
    return val < min ? min : (val > max ? max : val);
}

export default function StartQuiz() {

    const dataFound = useLoaderData();
    const page = value_limit(dataFound + 1, 0, 5)
    const sectionName = `/quiz/section${page}`

    return (
        <div className="quiz">
            {page > 0 && <Navigate to={sectionName} />}

            <div className="quiz-home-container">

                {/* For wide screens */}
                <img src={quizImage} className="quiz-image" alt="Women taking quiz" />
                <div className="quiz-info">
                    <h2>Customized CV Creation: <span className="blue">Begin with Our Quiz</span></h2>
                    <h4>Our quiz is the first step towards crafting a CV that makes you look good. Our expertly designed questions will help us gather the information we need to build a CV that truly showcases your skills and accomplishments.</h4>
                    <Link to="/cv-website/quiz/section1" className="quiz-link"><button className="button" id="start-quiz-button">Start Quiz</button></Link>
                </div>

                {/* For narrow screens */}
                <div className="quiz-info2">
                    <h2>Customized CV Creation: <span className="blue">Begin with Our Quiz</span></h2>
                    <h4>Our quiz is the first step towards crafting a CV that makes you look good. Our expertly designed questions will help us gather the information we need to build a CV that truly showcases your skills and accomplishments.</h4>
                </div>
                <img src={quizImage} className="quiz-image2" alt="Women taking quiz" />
                <Link to="/cv-website/quiz/section1" className="quiz-link"><button className="button" id="start-quiz-button2">Start Quiz</button></Link>

            </div>

        </div>

    )
}


export const startQuizLoader = async () => {
    if (JSON.parse(localStorage.getItem("section5"))) {
        return 5
    } else if (JSON.parse(localStorage.getItem("section4"))) {
        return 4
    } else if (JSON.parse(localStorage.getItem("section3"))) {
        return 3
    } else if (JSON.parse(localStorage.getItem("section2"))) {
        return 2
    } else if (JSON.parse(localStorage.getItem("section1"))?.jobTitle) {
        return 1
    } else if (JSON.parse(localStorage.getItem("section1"))) {
        return 0
    } else {
        return -1
    }
}