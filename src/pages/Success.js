import "../styles/success.css"
import secureLocalStorage from "react-secure-storage";
import React, { useEffect } from "react"
import emailjs from "emailjs-com"
import Parse from 'parse/dist/parse.min.js';

const section1 = JSON.parse(localStorage.getItem("section1"))
const section2 = JSON.parse(localStorage.getItem("section2"))
const section3 = JSON.parse(localStorage.getItem("section3"))
const section4 = JSON.parse(localStorage.getItem("section4"))
const section5 = JSON.parse(localStorage.getItem("section5"))
const previousCv = JSON.parse(localStorage.getItem("previousCv"))
const profilePicture = JSON.parse(localStorage.getItem("profilePicture"))

const firstName = section2?.fullName?.split(" ")[0]

const templateParams = {
    'user_name': firstName,
    'user_email': section2?.email
}

export default function Success() {

    Parse.initialize("STIwJi4FxePuDpJNN5z36ei73m4cO9zPkWmgek3s", "O1IGWGssZIfE6LhQu21zgBaaLaVi3DJLiyWfK3qf"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = "https://parseapi.back4app.com/";

    // Important fields
    const fullName = section2.fullName
    const email = section2.email
    const location = section2.address
    const template = section5.template
    // Job Data
    const jobData = {
        jobTitle: section1.jobTitle,
        desiredIncome: section1.desiredIncome,
        generalSkills: section1.generalSkills,
        technicalSkills: section1.technicalSkills
    }
    if (section1.moreGeneralSkills) {
        jobData.moreGeneralSkills = section1.moreGeneralSkills
    }
    if (section1.moreTechnicalSkills) {
        jobData.moreTechnicalSkills = section1.moreTechnicalSkills
    }
    // Other info
    const otherInfo = {
        languages: section5.languages,
        race: section2.race,
        gender: section2.gender,
        hobbies: section5.hobbies
    }
    if (section2.phone) {
        otherInfo.phoneNumber = section2.phone
    }
    if (section5.moreLanguages) {
        otherInfo.moreLanguages = section5.moreLanguages
    }
    if (section5.additionalInformation) {
        otherInfo.additionalInformation = section5.additionalInformation
    }
    if (previousCv) {
        otherInfo.previousCv = previousCv
    }
    if (profilePicture) {
        otherInfo.profilePicture = profilePicture
    }
    const workExperiences = section4.workExperiences
    const educations = section3.education

    useEffect(() => {
        // Send email
        emailjs.send("service_q88yhui", 'purchase_email', templateParams, 'as-ppNiv0lUVneY4A')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });

        // Send data to DB
        const customerInfo = new Parse.Object("CustomerInfo");

        customerInfo.set("fullName", fullName)
        customerInfo.set("email", email)
        customerInfo.set("location", location)
        customerInfo.set("template", template)
        customerInfo.set("jobData", jobData)
        customerInfo.set("otherInfo", otherInfo)
        customerInfo.set("workExperiences", workExperiences)
        customerInfo.set("educations", educations)

        async function postData() {
            try {
                let result = await customerInfo.save()
                console.log(result)
            } catch (error) {
                console.log(error)
            }
        }
        postData()

        // Reset Success Route
        const successRoute2 = parseInt(Math.random() * 1000000000)
        secureLocalStorage.setItem("successRoute", JSON.stringify(successRoute2))
    }, [])

    return (
        <div className="success">
            <div class="outer-container">
                <div class="inner-container">
                    <div class="card centered-content">
                        <div class="top">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="success-svg">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <h3 className="success-h3">
                                Your payment was successful!
                            </h3>
                            <p className="success-p">Check your email for further instuctions. If you did not receive an email, please check your spam and trash. If you still cannot find the email contact us at support@cvexpertise.co.za</p>
                        </div>
                        <div class="bottom">
                            <p className="success-p">You can now close this tab.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
