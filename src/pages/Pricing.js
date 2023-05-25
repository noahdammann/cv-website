import { IoIosCheckmarkCircleOutline, IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

import "../styles/pricing.css"

export default function Pricing() {

    return (
        <div className="pricing-wrapper">
            <div className="pricing">

                <div className="pc">
                    <h2>Power your Job Search with our <span className="blue">Professional CV Writing Service!</span></h2>
                    <div className="pc-content">
                        <div className="pc-left">
                            <p className="pc-row"><IoMdCheckmarkCircleOutline className="pc-icon" />ATS-friendly</p>
                            <p className="pc-row"><IoMdCheckmarkCircleOutline className="pc-icon" />Industry-specific</p>
                            <p className="pc-row"><IoMdCheckmarkCircleOutline className="pc-icon" />Articulate and polished</p>
                            <p className="pc-row"><IoMdCheckmarkCircleOutline className="pc-icon" />Professional design</p>
                            <p className="pc-row"><IoMdCheckmarkCircleOutline className="pc-icon" />Pursuasive and convincing</p>
                        </div>
                        <div className="pc-right">
                            <h4>CV Writing Service from</h4>
                            <h3>R199</h3>
                            <div className="pc-button-group">
                                <Link to="/cv-website/examples"><button className="button pc-button" id="pc-button1">See Examples</button></Link>
                                <Link to="/cv-website/quiz/section1"><button className="button pc-button" id="pc-button2">Get Started<FontAwesomeIcon icon={faCircleArrowRight} id="pc-right-arrow" /></button></Link>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="new-price-container">
                    <div className="pcol">
                        <div className="pcol-header">
                            <h3><span className="blue">CV Writing</span> Service</h3>
                            <h5>Invest in your future with a professionally written CV</h5>
                        </div>
                        <div className="prow2">ATS-friendly</div>
                        <div className="prow2">Industry-specific</div>
                        <div className="prow2">Articulate and polished</div>
                        <div className="prow2">Professional design</div>
                        <div className="prow2 plast-row">Pursuasive and convincing</div>
                        <div className="pricing-placeholder">
                            <p>We offer full refunds and revisions for up to 48 hours after completion.</p>
                        </div>
                    </div>
                    <div className="pcol">
                        <div className="pcol-header2">
                            <h2>R199</h2>
                        </div>
                        <div className="prow"><IoIosCheckmarkCircleOutline className="item-icon" /></div>
                        <div className="prow"><IoIosCheckmarkCircleOutline className="item-icon" /></div>
                        <div className="prow"><IoIosCheckmarkCircleOutline className="item-icon" /></div>
                        <div className="prow"><IoIosCheckmarkCircleOutline className="item-icon" /></div>
                        <div className="prow plast-row"><IoIosCheckmarkCircleOutline className="item-icon" /></div>
                        <Link to="/cv-website/quiz/section1"><button className="button" id="pricing-button">Get Started</button></Link>
                        <Link id="text-link" to="/cv-website/quiz/section1"><button className="button" id="go-button">Start</button></Link>
                    </div>
                </div>

            </div >

            <div className="pqs">

                <h2>For Your <span className="blue">Information</span></h2>

                <div className="pq-wrapper">
                    <div className="pq">
                        <h5>How do revisions work?</h5>
                        <p>If you need any changes to your CV, you have 48 hours from the time you receive it to request revisions. The first revision is free of charge, but any further revisions will be subject to a fee of R100 per revision.</p>
                        <Link to="/cv-website/refund-policy" target="_blank">Refund Policy</Link>
                    </div>

                    <div className="pq">
                        <h5>How do refunds work?</h5>
                        <p>We want you to be happy with our service. If you're not satisfied, you can ask for a full refund within 48 hours of receiving your completed CV. If you request a refund after we've made revisions to your CV, we'll deduct a fee of R100 from your total refund amount.</p>
                        <Link to="/cv-website/revisions-policy" target="_blank">Revisions Policy</Link>
                    </div>

                    <div className="pq">
                        <h5>How long until my CV is finished?</h5>
                        <p>We aim to deliver your CV within 48 hours after you place your order. However, in the event that we are unable to do so, we still guarantee delivery within 72 hours.</p>
                        <Link to="/cv-website/faqs" target="_blank">See more FAQs</Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

