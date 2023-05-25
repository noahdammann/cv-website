import { useEffect, useState } from "react";
import { NavLink, Outlet, ScrollRestoration, useLocation } from "react-router-dom";

export default function RootLayout() {

    const [toggled, setToggled] = useState(false)
    const [showRootLayout, setShowRootLayout] = useState(true)

    const handleScroll = () => {
        if (window.scrollY > 0) {
            document.querySelector("#navbar-container").classList.add("isScrolled")
            document.querySelector("#navbar-container").classList.remove("notScrolled")
        } else {
            document.querySelector("#navbar-container").classList.add("notScrolled")
            document.querySelector("#navbar-container").classList.remove("isScrolled")
        }
        if (toggled) {
            setToggled(false)
            handleHandburger();
        }
    }

    useEffect(() => {
        if (toggled) {
            document.querySelector("#navbar-container").classList.add("isScrolled")
            document.querySelector("#navbar-container").classList.remove("notScrolled")
        }
        if (!toggled && window.scrollY === 0) {
            document.querySelector("#navbar-container").classList.add("notScrolled")
            document.querySelector("#navbar-container").classList.remove("isScrolled")
        }
    }, [toggled])

    const handleHandburger = () => {
        if (!toggled) {
            document.querySelector(".menu").style.width = "100%";
            document.querySelectorAll(".menu-item").forEach(item => {
                item.style.marginLeft = "0";
            })
        }
        if (toggled) {
            document.querySelector(".menu").style.width = "0%"
            document.querySelectorAll(".menu-item").forEach(item => {
                item.style.marginLeft = "200px";
            })
        }
        setToggled(!toggled)
    }

    document.addEventListener("scroll", handleScroll)

    const location = useLocation()

    useEffect(() => {
        if (location.pathname.slice(0, 9) === "/success/") {
            setShowRootLayout(false)
        } else {
            setShowRootLayout(true)
        }
    }, [])

    return (
        <div>
            <div className="root-layout">

                <ScrollRestoration getKey={(location, matches) => {
                    const paths = ["/", "/examples", "/pricing"];
                    return paths.includes(location.pathname)
                        ? location.pathname
                        : location.key
                }} />

                <header id="navbar-container" className={showRootLayout ? "" : "navbar-hide"}>
                    <nav>
                        <div className="logo-container">
                            <div id="logo">
                                <div id="logo-underline"></div>
                                <h2 id="icon">CVE</h2>
                                <h3>CV Expertise</h3>
                            </div>
                        </div>

                        <div
                            className={toggled ? 'hamburger close' : 'hamburger'}
                            onClick={handleHandburger}
                        >
                            <span className="meat"></span>
                            <span className="meat"></span>
                            <span className="meat"></span>
                            <span className="meat"></span>
                            <span className="meat"></span>
                        </div>

                        <div className="menu">
                            <NavLink to="/cv-website" onClick={handleHandburger} className="menu-item">Home</NavLink>
                            <NavLink to="/cv-website/examples" onClick={handleHandburger} className="menu-item">Examples</NavLink>
                            <NavLink to="/cv-website/pricing" onClick={handleHandburger} className="menu-item">Pricing</NavLink>
                            <NavLink to="/cv-website/start-quiz" onClick={handleHandburger} className="menu-item">Quiz</NavLink>
                        </div>

                        <div className="links-container">
                            <NavLink to="/cv-website" className="testing-a">Home</NavLink>
                            <NavLink to="/cv-website/examples" className="testing-a">Examples</NavLink>
                            <NavLink to="/cv-website/pricing" className="testing-a">Pricing</NavLink>
                            <NavLink to="/cv-website/start-quiz" className="testing-a">Quiz</NavLink>
                        </div>
                    </nav>
                </header>

                <main>
                    <Outlet />
                </main>

                <footer className={showRootLayout ? "" : "footer-hide"}>
                    <div className="footer-columns">

                        <div className="footer-column">
                            <h3>Pages</h3>
                            <NavLink to="/cv-website">Home</NavLink>
                            <NavLink to="/cv-website/examples">Examples</NavLink>
                            <NavLink to="/cv-website/pricing">Pricing</NavLink>
                            <NavLink to="/cv-website/start-quiz">Quiz</NavLink>
                            <NavLink to="/cv-website/faqs">FAQ</NavLink>
                        </div>

                        <div className="footer-column">
                            <h3>Support</h3>
                            <NavLink to="/cv-website/privacy-policy">Privacy Policy</NavLink>
                            <NavLink to="/cv-website/terms-and-conditions">Terms & Conditions</NavLink>
                            <NavLink to="/cv-website/revisions-policy">Revisions Policy</NavLink>
                            <NavLink to="/cv-website/refund-policy">Refund Policy</NavLink>
                            <NavLink to="/cv-website/cookie-policy">Cookie Policy</NavLink>
                        </div>

                        <div className="footer-column">
                            <h3>Contact</h3>
                            <NavLink to="/cv-website/contact-us">Contact Us</NavLink>
                            <a href="mailto:support@cvexpertise.com" target="_blank">support@cvexpertise.com</a>
                        </div>

                        <div className="footer-column">
                            <h3>About</h3>
                            <p>We're more than just an CV writing service - we're a team who genuinely care about helping you succeed. We believe that a well-written CV can make all the difference in landing a job. Let us help you take that next step in your career journey.</p>
                        </div>

                        <p className="copyright">@ Copyright 2023. All Rights Reserved.</p>

                    </div>
                </footer>
            </div>
        </div>
    )
}
