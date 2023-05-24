import "../styles/contactus.css"
import contactUsImg from "../images/contact-us.jpg"
import { TextField } from "@mui/material"

export default function ContactUs() {
    return (
        <div className="contact-us">

            <img src={contactUsImg} alt="Contact us" className="contact-us-image" />

            <div className="contact-us-form-container">
                <h3>Contact Us</h3>
                <form className="contact-us-form" action="https://formsubmit.co/7542ff36ebb2df5a23afb561b114a5f7" method="POST" >
                    <div className="contact-us-form-input-container">
                        <TextField
                            className="contact-us-input"
                            label="First Name"
                            name="first name"
                        />
                        <TextField
                            className="contact-us-input"
                            label="Email Address"
                            name="email"
                        />
                        <TextField
                            className="contact-us-input"
                            label="Type your message here..."
                            name="message"
                            multiline
                            rows={4}
                        />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://cvexpertise.co.za" />
                    </div>
                    <button className="button" id="contact-us-button">Submit</button>
                </form>
            </div>

        </div>
    )
}
