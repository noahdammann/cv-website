import HowItWorks from "../Home/HowItWorks"
import Landing2 from "../Home/Landing2"
import Testimonial2 from "../Home/Testimonial2"
import "../styles/home.css"
import SeeExamples2 from "../Home/SeeExamples2"
import FaqPage from "../Home/FaqPage"
import { useEffect, useState } from "react"
import { Navigate, useLoaderData, useLocation } from "react-router-dom"
import Conversion from "../Home/Conversion"

export default function Home() {

    const successRoute = useLoaderData();

    const [isLoaded, setIsLoaded] = useState(false)
    const [navigateToCheckout, setNavigateToCheckout] = useState(false)
    const [navigateToSuccess, setNavigateToSuccess] = useState(false)

    const location = useLocation()

    useEffect(() => {
        if (location.hash === "/#/checkout") {
            setNavigateToCheckout(true)
        }
        if (location.hash === `/#/success/${successRoute}`) {
            setNavigateToSuccess(true)
        }
    }, [])

    useEffect(() => {
        const hasBeenLoaded = JSON.parse(sessionStorage.getItem("hasLoaded"))
        if (hasBeenLoaded) {
            setIsLoaded(true)
        } else {
            setTimeout(() => {
                const loader = document.querySelector(".loader")
                if (loader) {
                    document.querySelector(".loader").remove()
                    document.querySelector(".landing").classList.add("animate-landing")
                    document.querySelector(".product-info-container").classList.add("slide-text")
                    sessionStorage.setItem("hasLoaded", JSON.stringify(true))
                }
            }, 200)
        }
    }, [])

    return (
        <div>
            {navigateToCheckout && <Navigate to="/checkout" />}
            {navigateToSuccess && <Navigate to={"/success/" + successRoute} />}
            <div className={isLoaded ? "" : "loader"}></div>

            <div className="home">

                <Landing2 />

                <HowItWorks />

                <SeeExamples2 />

                <Testimonial2 />

                <Conversion />

                <FaqPage />

            </div>

        </div>

    )
}
