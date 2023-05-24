import { Stepper, Step, StepLabel } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import "../styles/quizlayout.css"

const steps = ["Career/Job", "Personal Details", "Education", "Work Experience", "Additional"]

export default function QuizLayout() {

    const currentPage = useLocation().pathname.slice(useLocation().pathname.length - 1)

    const [activeStep, setActiveStep] = useState(currentPage - 1);

    useEffect(() => {
        setActiveStep(currentPage - 1)
    }, [currentPage])

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

        <div className="quiz-layout">

            <div className="quiz-nav">
                <Stepper activeStep={activeStep} alternativeLabel>

                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (

                            size.width >= 500 ?
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step> :
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}></StepLabel>
                                </Step>

                        )
                    })}

                </Stepper>
            </div>

            <div className="form-wrapper">
                <div className="form-container">
                    <Outlet />
                </div>
            </div>

        </div>
    )
}
