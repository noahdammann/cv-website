import "../styles/checkout.css"
import { Link, Navigate, useLoaderData } from "react-router-dom"
import { useEffect, useState } from "react"
import { IoShieldCheckmark } from "react-icons/io5"

export default function Checkout() {

    const successRoute = useLoaderData()

    const section2 = JSON.parse(localStorage.getItem("section2"))
    const section5 = JSON.parse(localStorage.getItem("section5"))

    const emailAddress = section2?.email
    const unformatedTemplate = section5?.template
    let template;
    if (unformatedTemplate) {
        template = unformatedTemplate.charAt(0).toUpperCase() + unformatedTemplate.slice(1, -1) + " " + unformatedTemplate.slice(-1)
    }

    const [quizNotComplete, setQuizNotComplete] = useState(false)

    useEffect(() => {
        if (!section2 || !section5) {
            setQuizNotComplete(true)
        }
    }, [])

    return (
        <div className="checkout">
            {quizNotComplete && <Navigate to="/quiz/section1" />}


            <div className="cvi">

                <h2>Ready to order your <span className="blue">Professional CV?</span></h2>

                <div className="cvi-bullets">
                    <div className="cvi-bullet">
                        <IoShieldCheckmark className="shield-checkmark" />
                        <p>Request revisions</p>
                    </div>
                    <div className="cvi-bullet">
                        <IoShieldCheckmark className="shield-checkmark" />
                        <p>Completed in 48-hours</p>
                    </div>
                    <div className="cvi-bullet">
                        <IoShieldCheckmark className="shield-checkmark" />
                        <p>Full refund guarantee</p>
                    </div>
                </div>

                <p className="cvi-contact-info">If you have any more questions you'd like to ask, send an email to <a href="mailto:support@cvexpertise.com" target="_blank">support@cvexpertise.com</a></p>

            </div>

            <div className="cbc">
                <div className="cbc-body">
                    <h4>Confirm your details</h4>

                    <div className="cbc-info">
                        <p>Email: </p>
                        <h6>{emailAddress}</h6>
                    </div>

                    <div className="cbc-info">
                        <p>Template: </p>
                        <h6>{template}</h6>
                    </div>

                    <h4>Order Summary</h4>

                    <div className="cbc-info">
                        <p>Product: </p>
                        <h6>CV Writing Service</h6>
                    </div>

                    <div className="cbc-info" id="last-cbc-info">
                        <p>Total amount due: </p>
                        <h6>R199</h6>
                    </div>

                    <p className="cbc-tacs">By purchasing you agree to the <Link to="/cv-website/terms-and-conditions" target="_blank">Terms & Conditions</Link></p>

                    <form name="PayFastPayNowForm" action="https://www.payfast.co.za/eng/process" method="post" id="make-payment-form">
                        <input required type="hidden" name="cmd" value="_paynow" />
                        <input required type="hidden" name="receiver" pattern="[0-9]" value="22391840" />
                        <input type="hidden" name="return_url" value={`https://cvexpertise.co.za/cv-website/#/success/${successRoute}`} />
                        <input type="hidden" name="cancel_url" value="https://cvexpertise.co.za/cv-website/#/checkout" />
                        <input required type="hidden" name="amount" value="199.00" />
                        <input required type="hidden" name="item_name" maxLength="255" value="CV Writing Service" />
                        <table>
                            <thead>
                                <tr>
                                    <td colSpan={2} align={"center"}>
                                        <button type="submit" className="button" id="make-payment-button">Buy Now</button>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                    </form>

                </div>
            </div>
        </div >
    )
}
