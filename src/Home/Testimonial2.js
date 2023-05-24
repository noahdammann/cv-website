import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-material-ui-carousel";

import testimonial1 from "../images/testimonial1.png"
import testimonial2 from "../images/testimonial2.png"
import testimonial3 from "../images/testimonial3.png"

import userpic1 from "../images/userpic1.jpg"
import userpic2 from "../images/userpic2.jpg"
import userpic3 from "../images/userpic3.jpg"

export default function Testimonial2() {
    return (
        <div className="testimonial2-wrapper">
            <div className='testimonial2'>

                <h2 id="testimonial2-title">What Our <span className="blue">Customers Say</span></h2>

                <Carousel animation="slide" autoPlay duration="800" className="quote-carousel" navButtonsAlwaysVisible interval="6000" navButtonsWrapperProps={{ style: { opacity: "0.85" } }} indicatorIconButtonProps={{ style: { marginTop: "-105px", zIndex: "1", left: "0" } }} indicatorContainerProps={{ style: { left: "40%", position: "absolute" } }} >
                    <div className='quote-block'>
                        <img src={testimonial2} className="quote-image" id="testimonial2" />
                        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                        <h3 className="quote-description">I'm so glad I invested in professional CV writing services. I received an outstanding CV that truly reflected my skills and experience, and it helped me receive multiple job offers.</h3>
                        <p className="quote-author">Luthando Ngcobo</p>
                    </div>
                    <div className='quote-block'>
                        <img src={testimonial1} className="quote-image" />
                        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                        <h3 className="quote-description">The team really know their stuff, I was blown away by the CV they created for me. Their service surpassed all my expectations, and I would highly recommend them to anyone.</h3>
                        <p className="quote-author">Warren Robertson</p>
                    </div>
                    <div className='quote-block'>
                        <img src={testimonial3} className="quote-image" id="testimonial3" />
                        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                        <h3 className="quote-description">I've always been good at writing, but their writing service took my CV to the next level. It was professional, succinct, and it showcased my skills and experience in a compelling way.</h3>
                        <p className="quote-author">Taphelo Achol</p>
                    </div>
                </Carousel>

                <div className="quote-stack-container">

                    <section className="t-bq-section">
                        <div className="t-bq-wrapper t-bq-wrapper-boxed">
                            <div className="t-bq-quote t-bq-quote-emma">
                                <div className="t-bq-quote-emma-qmark"><span>&#10077;</span></div>
                                <div className="t-bq-quote-emma-userpic">
                                    <img src={userpic1} className="t-bq-quote-emma-userpic-img" />
                                </div>
                                <div className="t-bq-quote-emma-base">
                                    <blockquote className="t-bq-quote-emma-text" cite="Luthando Ngcobo">
                                        I'm so glad I invested in professional CV writing services. I received an outstanding CV that truly reflected my skills and experience, and it helped me receive multiple job offers.                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="t-bq-section">
                        <div className="t-bq-wrapper t-bq-wrapper-boxed">
                            <div className="t-bq-quote t-bq-quote-emma">
                                <div className="t-bq-quote-emma-qmark"><span>&#10077;</span></div>
                                <div className="t-bq-quote-emma-userpic">
                                    <img src={userpic2} className="t-bq-quote-emma-userpic-img" />
                                </div>
                                <div className="t-bq-quote-emma-base">
                                    <blockquote className="t-bq-quote-emma-text" cite="Warren Robertson">
                                        The team really know their stuff, I was blown away by the CV they created for me. Their service surpassed all my expectations, and I would highly recommend them to anyone.                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="t-bq-section">
                        <div className="t-bq-wrapper t-bq-wrapper-boxed">
                            <div className="t-bq-quote t-bq-quote-emma">
                                <div className="t-bq-quote-emma-qmark"><span>&#10077;</span></div>
                                <div className="t-bq-quote-emma-userpic">
                                    <img src={userpic3} className="t-bq-quote-emma-userpic-img" />
                                </div>
                                <div className="t-bq-quote-emma-base">
                                    <blockquote className="t-bq-quote-emma-text" cite="Taphelo Achol">
                                        I've always been good at writing, but the editing service took my CV to the next level. It was professional, succinct, and it showcased my skills and experience in a compelling way.                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div >
        </div >
    )
}
