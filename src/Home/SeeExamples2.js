import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

import "../styles/seeexample.css"

import simple11 from "../images/simple1-1.jpg"
import simple12 from "../images/simple1-2.jpg"
import simple21 from "../images/simple2-1.jpg"
import simple22 from "../images/simple2-2.jpg"
import simple31 from "../images/simple3-1.jpg"
import simple32 from "../images/simple3-2.jpg"

import traditional11 from "../images/traditional1-1.jpg"
import traditional12 from "../images/traditional1-2.jpg"
import traditional21 from "../images/traditional2-1.jpg"
import traditional22 from "../images/traditional2-2.jpg"
import traditional31 from "../images/traditional3-1.jpg"
import traditional32 from "../images/traditional3-2.jpg"

import modern11 from "../images/modern1-1.jpg"
import modern12 from "../images/modern1-2.jpg"
import modern21 from "../images/modern2-1.jpg"
import modern22 from "../images/modern2-2.jpg"
import modern31 from "../images/modern3-1.jpg"
import modern32 from "../images/modern3-2.jpg"

import simple1 from "../pdfs/simple1.pdf"
import simple2 from "../pdfs/simple2.pdf"
import simple3 from "../pdfs/simple3.pdf"

import traditional1 from "../pdfs/traditional1.pdf"
import traditional2 from "../pdfs/traditional2.pdf"
import traditional3 from "../pdfs/traditional3.pdf"

import modern1 from "../pdfs/modern1.pdf"
import modern2 from "../pdfs/modern2.pdf"
import modern3 from "../pdfs/modern3.pdf"

import { useEffect } from "react"

export default function SeeExamples2() {

    useEffect(() => {
        [...document.querySelectorAll('.col')].map(column => {
            column.style.setProperty('--animation', 'slide');
            column.style.setProperty('height', '200%');
        });
    }, [])

    return (
        <div className="see-examples2">
            <h2>Discover Our <span className="blue">Examples</span></h2>
            <div className="slider-grid">
                <div className="slider">

                    <div className="col">
                        <a href={simple1} target="_blank"><img src={simple11} /></a>
                        <a href={traditional1} target="_blank"><img src={traditional12} /></a>
                        <a href={modern2} target="_blank"><img src={modern21} /></a>
                        <a href={traditional2} target="_blank"><img src={traditional22} /></a>
                        <a href={simple2} target="_blank"><img src={simple22} /></a>
                        <a href={modern1} target="_blank"><img src={modern12} /></a>
                    </div>

                    <div className="col">
                        <a href={traditional3} target="_blank"><img src={traditional31} /></a>
                        <a href={modern3} target="_blank"><img src={modern32} /></a>
                        <a href={simple1} target="_blank"><img src={simple12} /></a>
                        <a href={simple3} target="_blank"><img src={simple31} /></a>
                        <a href={traditional2} target="_blank"><img src={traditional21} /></a>
                        <a href={simple2} target="_blank"><img src={simple21} /></a>
                    </div>

                    <div className="col">
                        <a href={traditional3} target="_blank"><img src={traditional32} /></a>
                        <a href={modern1} target="_blank"><img src={modern11} /></a>
                        <a href={traditional1} target="_blank"><img src={traditional11} /></a>
                        <a href={modern3} target="_blank"><img src={modern31} /></a>
                        <a href={modern2} target="_blank"><img src={modern22} /></a>
                        <a href={simple3} target="_blank"><img src={simple32} /></a>
                    </div>

                </div>
            </div>

            <div className="gallery">
                <a href={traditional3} target="_blank"><img src={traditional31} /></a>
                <a href={simple2} target="_blank"><img src={simple21} /></a>
                <a href={modern3} target="_blank"><img src={modern31} /></a>
                <a href={modern2} target="_blank"><img src={modern21} /></a>
                <a href={simple1} target="_blank"><img src={simple11} /></a>
                <a href={traditional2} target="_blank"><img src={traditional21} /></a>
                <a href={modern1} target="_blank"><img src={modern11} /></a>
                <a href={simple3} target="_blank"><img src={simple31} /></a>
                <a href={traditional1} target="_blank"><img src={traditional11} /></a>
            </div>

            <div className="gallery2">
                <div className="shifter">
                    <a href={simple2} target="_blank"><img src={simple22} /></a>
                    <a href={modern3} target="_blank"><img src={modern31} /></a>
                    <a href={traditional3} target="_blank"><img src={traditional31} /></a>
                    <a href={simple3} target="_blank"><img src={simple32} /></a>
                    <a href={modern1} target="_blank"><img src={modern11} /></a>
                    <a href={traditional1} target="_blank"><img src={traditional11} /></a>
                    <a href={modern2} target="_blank"><img src={modern21} /></a>
                    <a href={traditional1} target="_blank"><img src={traditional12} /></a>
                    <a href={traditional3} target="_blank"><img src={traditional32} /></a>
                </div>
            </div>

            <div className="gallery3">
                <a href={simple3} target="_blank"><img src={simple31} /></a>
                <a href={traditional2} target="_blank"><img src={traditional21} /></a>
                <a href={modern2} target="_blank"><img src={modern22} /></a>
                <a href={simple1} target="_blank"><img src={simple11} /></a>
                <a href={traditional2} target="_blank"><img src={traditional22} /></a>
                <a href={modern1} target="_blank"><img src={modern12} /></a>
                <a href={simple2} target="_blank"><img src={simple21} /></a>
                <a href={modern3} target="_blank"><img src={modern32} /></a>
                <a href={simple1} target="_blank"><img src={simple12} /></a>
            </div>

            <Link to="/cv-website/examples"><button id="see-examples-button" className="button">See All Examples <FontAwesomeIcon icon={faCircleArrowRight} id="arrow-icon" /></button></Link>

        </div>
    )
}
