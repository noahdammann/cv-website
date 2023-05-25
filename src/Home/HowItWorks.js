import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import { Bs1Circle } from "react-icons/bs"
import { Bs2Circle } from "react-icons/bs"
import { Bs3Circle } from "react-icons/bs"

import quiz from "../images/vector1.png"
import cards from "../images/vector22.png"
import finished from "../images/vector32.jpg"

export default function HowItWorks() {

    const [activeButton, setActiveButton] = useState(1);

    const clickHandler = (id) => {
        if (id < 1) {
            id = 3
        } else if (id > 3) {
            id = 1
        }
        setTimeout(() => {
            setActiveButton(id)
        }, 200)
        document.querySelectorAll(".hiw-content").forEach(item => {
            item.style.animation = "change-step 0.4s ease-in-out forwards"
            setTimeout(() => {
                item.style.animation = ""
            }, 400)
        });
    }

    return (
        <div className="how-it-works">

            <img src={cards} className="hiw-img" id="invis1" />
            <img src={finished} className="hiw-img" id="invis2" />

            <h2>Here's How <span className="blue">It Works</span></h2>

            <Button class="prev-arrow" onClick={() => clickHandler(activeButton - 1)}></Button>
            <Button class="next-arrow" onClick={() => clickHandler(activeButton + 1)}></Button>

            <ButtonGroup className="button-group">

                <Button id={activeButton == 1 ? "hiw-active" : "hiw-inactive"} className="hiw-button button1" variant="contained" onClick={() => clickHandler("1")}><span className="hiw-step-span1">Step 1</span><span className="hiw-step-span2">Quiz</span></Button>

                <Button id={activeButton == 2 ? "hiw-active" : "hiw-inactive"} className="hiw-button" variant="contained" onClick={() => clickHandler("2")}><span className="hiw-step-span1">Step 2</span><span className="hiw-step-span2">Order</span></Button>

                <Button id={activeButton == 3 ? "hiw-active" : "hiw-inactive"} className=" hiw-button button3" variant="contained" onClick={() => clickHandler("3")}><span className="hiw-step-span1">Step 3</span><span className="hiw-step-span2">Done!</span></Button>

            </ButtonGroup>

            {
                activeButton == 1 ?

                    <div className="hiw-content">
                        <div className="hiw-description" id="first-description-hiw">
                            <Bs1Circle className="hiw-number-icon" />
                            <h3>Take Our Quiz</h3>
                            <p>You start by completing our quiz. It helps us gather all the necessary information we need so we can create a CV tailored to you. You can start now <Link to="/cv-website/quiz/section1">here</Link>.</p>
                        </div>
                        <img src={quiz} className="hiw-img" id="vector1" />
                    </div>

                    : activeButton == 2 ?

                        <div className="hiw-content">
                            <div className="hiw-description">
                                <Bs2Circle className="hiw-number-icon" />
                                <h3>Place Your Order</h3>
                                <p>Once you've finished the quiz, make the payment of R199, and we'll get to work on your CV right away. Pay online with credit card, EFT or any other payment method.</p>
                            </div>
                            <img src={cards} className="hiw-img" id="vector2" />
                        </div>

                        :

                        <div className="hiw-content">
                            <div className="hiw-description">
                                <Bs3Circle className="hiw-number-icon" />
                                <h3>And You're Done!</h3>
                                <p>Once completed, we'll email you a copy of your CV in both Word and PDF formats. For the next 48 hours we offer revisions to the content, design, or layout of your CV.</p>
                            </div>
                            <img src={finished} className="hiw-img" id="vector3" />
                        </div>
            }

        </div >
    )
}
