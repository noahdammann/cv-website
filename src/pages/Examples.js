import Carousel from "react-material-ui-carousel"

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

import "../styles/examples.css"
import { useState, useEffect } from "react"

export default function Examples() {

    const size = useWindowSize();

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });
        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }

    return (
        <div className="examples">

            <div className="title-container">
                <h2 id="examples-title">We offer 3 different types of CVs:</h2>
            </div>

            {/* First example: SIMPLE */}
            <div className="example-container-wrapper">
                <div className="example-container">

                    <div className="images-container">
                        <h2 className="template-title">Simple</h2>
                        <Carousel className="carousel" interval="4000" navButtonsAlwaysVisible navButtonsWrapperProps={{ style: { transform: "translateX(-9px)", opacity: "0.75" } }} navButtonsProps={{ className: "navbuttons" }} indicators={false} >
                            <div>
                                <img src={simple11} alt="Example CV page 1" className="product-image image1" />
                                <img src={simple12} alt="Example CV page 2" className="product-image image2" />
                            </div>
                            <div>
                                <img src={simple21} alt="Example CV page 1" className="product-image image1" />
                                <img src={simple22} alt="Example CV page 2" className="product-image image2" />
                            </div>
                            <div>
                                <img src={simple31} alt="Example CV page 1" className="product-image image1" />
                                <img src={simple32} alt="Example CV page 2" className="product-image image2" />
                            </div>
                        </Carousel>
                    </div>

                    <div className="info-compartment">

                        <h3>When to use:</h3>
                        <p>Opt for this format if you have limited work experience or are applying for entry-level positions. Its concise layout emphasizes your education and skills, making it perfect for those just starting their careers.</p>

                        <h3>See examples:</h3>
                        <a href={simple1} target="_blank"><p>UX Designer</p></a>
                        <a href={simple2} target="_blank"><p>Software Engineer</p></a>
                        <a href={simple3} target="_blank"><p>Social Media Marketer</p></a>
                    </div>

                </div>
            </div>

            {/* Second example: TRADITIONAL */}
            <div className="traditional-example-container-wrapper">
                <div className="example-container traditional-example-container">

                    <div className="info-compartment">

                        <h3>When to use:</h3>
                        <p>Choose this format if you have a solid work history and are applying for higher-level positions. Its detailed employment history, education, and professional achievements convey a sense of professionalism and competence.</p>

                        <h3>See examples:</h3>
                        <a href={traditional1} target="_blank"><p>Technical Advisor</p></a>
                        <a href={traditional3} target="_blank"><p>Information Technology Analyst</p></a>
                        <a href={traditional2} target="_blank"><p>Irrigation/Plumbing Professional</p></a>
                    </div>

                    <div className="images-container">
                        <h2 className="template-title">Traditional</h2>
                        <Carousel className="carousel" interval="4000" navButtonsAlwaysVisible navButtonsWrapperProps={{ style: { transform: "translateX(-9px)", opacity: "0.75" } }} navButtonsProps={{ className: "navbuttons" }} indicators={false}>
                            <div>
                                <img src={traditional11} alt="Example CV page 1" className="product-image image1" />
                                <img src={traditional12} alt="Example CV page 2" className="product-image image2" />
                            </div>
                            <div>
                                <img src={traditional21} alt="Example CV page 1" className="product-image image1" />
                                <img src={traditional22} alt="Example CV page 2" className="product-image image2" />
                            </div>
                            <div>
                                <img src={traditional31} alt="Example CV page 1" className="product-image image1" />
                                <img src={traditional32} alt="Example CV page 2" className="product-image image2" />
                            </div>
                        </Carousel>
                    </div>

                </div>
            </div>

            {/* Third example: MODERN */}
            <div className="example-container-wrapper">
                <div className="example-container" id="last-example">

                    <div className="images-container">
                        <h2 className="template-title">Modern</h2>
                        <Carousel className="carousel carousel-single" interval="4000" navButtonsAlwaysVisible navButtonsWrapperProps={{ style: { transform: "translateX(-9px)", opacity: "0.75" } }} navButtonsProps={{ className: "navbuttons" }} indicators={false}>
                            <div>
                                <img src={modern11} alt="Modern CV example 1 page 1" className="modern-image modernimage1" />
                                <img src={modern12} alt="Modern CV example 1 page 2" className="modern-image modernimage2" />
                            </div>
                            <div>
                                <img src={modern21} alt="Modern CV example 1 page 1" className="modern-image modernimage1" />
                                <img src={modern22} alt="Modern CV example 1 page 2" className="modern-image modernimage2" />
                            </div>
                            <div>
                                <img src={modern31} alt="Modern CV example 1 page 1" className="modern-image modernimage1" />
                                <img src={modern32} alt="Modern CV example 1 page 2" className="modern-image modernimage2" />
                            </div>
                        </Carousel>
                    </div>


                    <div className="info-compartment">

                        <h3>When to use:</h3>
                        <p>Select this format if you work in a creative industry or want to showcase your design skills. Its bold colors, graphics, and unique layout make your CV stand out and convey your creativity, ideal for positions that value innovation and originality.</p>

                        <h3>See examples:</h3>
                        <a href={modern2} target="_blank"><p>Architect</p></a>
                        <a href={modern1} target="_blank"><p>Interior Desinger</p></a>
                        <a href={modern3} target="_blank"><p>Sales Consultant</p></a>
                    </div>

                </div>

            </div>


            {/* Simple narrow */}
            <div className="example-col-container">
                <h2>Simple</h2>
                <p>Opt for this format if you have limited work experience or are applying for entry-level positions. Its concise layout emphasizes your education and skills, making it perfect for those just starting their careers.</p>
                <Carousel className="carousel2" interval="4000" navButtonsAlwaysVisible navButtonsAlwaysInvisible={size.width <= 550 ? true : false} navButtonsWrapperProps={{ style: { transform: "translateX(-7px)", opacity: "0.85", width: "10%" } }} navButtonsProps={{ className: "navbuttons2" }} indicators={false} >
                    <div>
                        <img src={simple11} alt="Example CV page 1" className="product-image2 image11" />
                        <img src={simple12} alt="Example CV page 2" className="product-image2 image22" />
                    </div>
                    <div>
                        <img src={simple21} alt="Example CV page 1" className="product-image2 image11" />
                        <img src={simple22} alt="Example CV page 2" className="product-image2 image22" />
                    </div>
                    <div>
                        <img src={simple31} alt="Example CV page 1" className="product-image2 image11" />
                        <img src={simple32} alt="Example CV page 2" className="product-image2 image22" />
                    </div>
                </Carousel>
                <h3>See Examples:</h3>
                <ul>
                    <a href={simple1} target="_blank"><p>UX Designer</p></a>
                    <a href={simple2} target="_blank"><p>Software Engineer</p></a>
                    <a href={simple3} target="_blank"><p>Social Media Marketer</p></a>
                </ul>
            </div>

            <hr className="seperator"></hr>

            {/* Traditional narrow */}
            <div className="example-col-container">
                <h2>Traditional</h2>
                <p className="narrow-description">Choose this format if you have a solid work history and are applying for higher-level positions. Its detailed employment history, education, and professional achievements convey a sense of professionalism and competence.</p>
                <Carousel className="carousel2" interval="4000" navButtonsAlwaysVisible navButtonsAlwaysInvisible={size.width <= 550 ? true : false} navButtonsWrapperProps={{ style: { transform: "translateX(-7px)", opacity: "0.85", width: "10%" } }} navButtonsProps={{ className: "navbuttons2" }} indicators={false} >
                    <div>
                        <img src={traditional11} alt="Example CV page 1" className="product-image2 image11" />
                        <img src={traditional12} alt="Example CV page 2" className="product-image2 image22" />
                    </div>
                    <div>
                        <img src={traditional21} alt="Example CV page 1" className="product-image2 image11" />
                        <img src={traditional22} alt="Example CV page 2" className="product-image2 image22" />
                    </div>
                    <div>
                        <img src={traditional31} alt="Example CV page 1" className="product-image2 image11" />
                        <img src={traditional32} alt="Example CV page 2" className="product-image2 image22" />
                    </div>
                </Carousel>
                <h3>See Examples:</h3>
                <ul>
                    <a href={traditional1} target="_blank"><p>Technical Advisor</p></a>
                    <a href={traditional3} target="_blank"><p>Information Technology Analyst</p></a>
                    <a href={traditional2} target="_blank"><p>Irrigation/Plumbing Professional</p></a>
                </ul>
            </div>

            <hr className="seperator"></hr>

            {/* Modern narrow */}
            <div className="example-col-container">
                <h2>Modern</h2>
                <p className="narrow-description">Select this format if you work in a creative industry or want to showcase your design skills. Its bold colors, graphics, and unique layout make your CV stand out and convey your creativity, ideal for positions that value innovation and originality.</p>
                <Carousel className="carousel2" interval="4000" navButtonsAlwaysVisible navButtonsAlwaysInvisible={size.width <= 550 ? true : false} navButtonsWrapperProps={{ style: { transform: "translateX(-7px)", opacity: "0.85", width: "10%" } }} navButtonsProps={{ className: "navbuttons2" }} indicators={false} >
                    <div>
                        <img src={modern11} alt="Modern CV example 1 page 1" className="product-image2 image11" />
                        <img src={modern12} alt="Modern CV example 1 page 2" className="product-image2 image22" />
                    </div>
                    <div>
                        <img src={modern21} alt="Modern CV example 1 page 1" className="product-image2 image11" />
                        <img src={modern22} alt="Modern CV example 1 page 2" className="product-image2 image22" />
                    </div>
                    <div>
                        <img src={modern31} alt="Modern CV example 1 page 1" className="product-image2 image11" />
                        <img src={modern32} alt="Modern CV example 1 page 2" className="product-image2 image22" />
                    </div>
                </Carousel>
                <h3>See Examples:</h3>
                <ul id="last-col-narrow-ul">
                    <a href={modern2} target="_blank"><p>Architect</p></a>
                    <a href={modern1} target="_blank"><p>Interior Desinger</p></a>
                    <a href={modern3} target="_blank"><p>Sales Consultant</p></a>
                </ul>
            </div>

            <hr className="seperator"></hr>

            <h2 className="summary-table-title">Choose the Right CV Layout: A Summary Comparison of Simple, Traditional, and Modern Template</h2>

            <div className='summary-table-container'>
                <table className="summary-table">
                    <thead>
                        <tr>
                            <th scope="col" className="summary-table-template"></th>
                            <th scope='col' className="summary-table-template">Simple</th>
                            <th scope='col' className="summary-table-template">Traditional</th>
                            <th scope='col' className="summary-table-template">Modern</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row'>Industries</th>
                            <td>Retail, Customer service, Hospitality, Cleaning and maintenance, Logistics, Manufacturing, Education, Consulting, Real Estate</td>
                            <td>Law, Finance, Healthcare, Government, Non-profit, Insurance, Engineering, Management</td>
                            <td>Marketing, Advertising, Graphic design, Web development, Media and entertainment, Fashion and beauty, Architecture and interior design</td>
                        </tr>
                        <tr>
                            <th scope='row'>Years of Experience</th>
                            <td>0+ years</td>
                            <td>20+ years</td>
                            <td>5+ years</td>
                        </tr>
                        <tr>
                            <th scope='row'>Flexibility and Versitility</th>
                            <td>High</td>
                            <td>Medium</td>
                            <td>Low</td>
                        </tr>
                        <tr>
                            <th scope='row'>Job Position</th>
                            <td>Entry-level to Mid-career</td>
                            <td>Senior position to Executive</td>
                            <td>Mid-career to Senior position</td>
                        </tr>
                        <tr>
                            <th scope='row'>Income range</th>
                            <td>R5 000 - R55 000 / month</td>
                            <td>R70 000+ / month</td>
                            <td>R10 000 - R70 000 / month</td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ color: "black " }} className="table-footnote">It's important to note that these are just general guidelines, and there may be some overlap between industries. Ultimately, the best format for your CV will depend on your personal style, skills, and the requirements of the job you're applying for.</p>
            </div>

        </div >
    )
}
