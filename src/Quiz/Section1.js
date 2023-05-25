import { TextField, FormControlLabel, Checkbox, MenuItem } from "@material-ui/core"
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"

import "../styles/quizsection.css"
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const schema = yup.object().shape({
    jobTitle: yup.string().min(1).max(200),
    desiredIncome: yup.string().required().oneOf(["R0 - R4 000", "R4 000 - R6 000", "R6 000 - R8 000", "R8 000 - R12 000", "R12 000 - R20 000", "R20 000 - R50 000", "R50 000 +"]),
    generalSkills: yup.array().min(2),
    moreGeneralSkills: yup.string().max(1000),
    technicalSkills: yup.array().min(1),
    moreTechnicalSkills: yup.string().max(1000)
})

const skillList = ["Charismatic", "Cooperative", "Creative", "Disciplined", "Goal-oriented", "Hard-working", "Independent", "Intelligent", "Leader", "Problem-solver", "Quick learner", "Resilient", "Team player", "Well-organized", "Willing to learn"]
const technicalSkillsList = ["Email communication skills", "Microsoft Word proficient", "Microsoft Excel proficient", "Basic computer skills", "Presentation skills", "Customer service skills", "Sales and Marketing skills", "Negotiation skills"]

export default function Section1() {

    const prevFormData = JSON.parse(localStorage.getItem("section1"))

    const [isSubmitted, setIsSubmitted] = useState(false)

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { desiredIncome: prevFormData ? prevFormData.desiredIncome : "" }
    })
    const onSubmit = (data) => {
        localStorage.setItem("section1", JSON.stringify(data))
        setIsSubmitted(true);
    }

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
        <form className="section-form" onSubmit={handleSubmit(onSubmit)}>
            {isSubmitted && <Navigate to="/cv-website/quiz/section2" />}

            <div className="seperator-header">
                <h3>Job Information</h3>
                <p>Fill in the details about your desired job</p>
            </div>

            <TextField
                label="What Job are you Seeking? *"
                variant="outlined"
                className="quiz-input-field"
                defaultValue={prevFormData?.jobTitle}
                InputLabelProps={{
                    style: { paddingRight: size.width <= 330 ? "50px" : "", marginTop: size.width <= 330 ? "-10px" : "", whiteSpace: "unset" }
                }}
                FormHelperTextProps={{
                    style: { color: errors.jobTitle ? "red" : "" }
                }}
                helperText={errors.jobTitle ? "This field is required" : ""}
                {...register("jobTitle")}
            />

            <Controller
                name="desiredIncome"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="What monthly salary do you want? *"
                        variant="outlined"
                        className="quiz-input-field"
                        InputLabelProps={{
                            style: { paddingRight: size.width <= 405 ? "40px" : size.width <= 830 && size.width >= 685 ? "50px" : "", marginTop: size.width <= 405 ? "-10px" : size.width <= 830 && size.width >= 685 ? "-10px" : "", whiteSpace: "unset" }
                        }}
                        select
                        defaultValue={prevFormData?.desiredIncome}
                        helperText={errors.desiredIncome ? "This field is required" : ""}
                        FormHelperTextProps={{
                            style: { color: errors.desiredIncome ? "red" : "" }
                        }}
                    >

                        <MenuItem value="R0 - R4 000">
                            R0 - R4 000
                        </MenuItem>
                        <MenuItem value="R4 000 - R6 000">
                            R4 000 - R6 000
                        </MenuItem>
                        <MenuItem value="R6 000 - R8 000">
                            R6 000 - R8 000
                        </MenuItem>
                        <MenuItem value="R8 000 - R12 000">
                            R8 000 - R12 000
                        </MenuItem>
                        <MenuItem value="R12 000 - R20 000">
                            R12 000 - R20 000
                        </MenuItem>
                        <MenuItem value="R20 000 - R50 000">
                            R20 000 - R50 000
                        </MenuItem>
                        <MenuItem value="R50 000 +">
                            R50 000 +
                        </MenuItem>

                    </TextField >
                )}
            />

            <div className="seperator-header">
                <h3>General Skills</h3>
                {errors.generalSkills ? <p className="error">Please select at least 2 skills that best represent you</p> : <p>Check the skills that you think represent you best</p>}
            </div>
            <div className="checkbox-container">
                {skillList.map((skill) => {
                    for (let i = 0; i < prevFormData?.generalSkills?.length; i++) {
                        if (skill === prevFormData.generalSkills[i]) {
                            return (
                                <FormControlLabel key={skill} control={<Checkbox color="primary" defaultChecked {...register("generalSkills")} value={skill} />} label={skill} />
                            )
                        }
                    }
                    return (
                        <FormControlLabel key={skill} control={<Checkbox color="primary" {...register("generalSkills")} value={skill} />} label={skill} />
                    )
                })}
            </div>
            <TextField
                className="multiline quiz-input-field"
                label="List any other general skills you have (optional)"
                InputLabelProps={{
                    style: { paddingRight: size.width <= 520 ? "15px" : "", marginTop: size.width <= 520 ? "-10px" : "", whiteSpace: "unset" }
                }}
                variant="outlined"
                defaultValue={prevFormData?.moreGeneralSkills}
                helperText={errors.moreGeneralSkills ? "Maximum length of 1000 characters" : ""}
                FormHelperTextProps={{
                    style: { color: errors.moreGeneralSkills ? "red" : "" }
                }}
                {...register("moreGeneralSkills")}
            />
            <div className="seperator-header">
                <h3>Technical Skills</h3>
                {errors.technicalSkills ? <p className="error">Please select at least 1 skill</p> : <p>Check the skills that you have</p>}
            </div>
            <div className="checkbox-container2">
                {technicalSkillsList.map((skill) => {
                    for (let i = 0; i < prevFormData?.technicalSkills?.length; i++) {
                        if (skill === prevFormData.technicalSkills[i]) {
                            return (
                                <FormControlLabel key={skill} control={<Checkbox color="primary" defaultChecked {...register("technicalSkills")} value={skill} />} label={skill} />
                            )
                        }
                    }
                    return (
                        <FormControlLabel key={skill} control={<Checkbox color="primary" {...register("technicalSkills")} value={skill} />} label={skill} />
                    )
                })}
            </div>
            <TextField
                className="multiline quiz-input-field"
                label="List any other technical skills you have (optional)"
                InputLabelProps={{
                    style: { paddingRight: size.width <= 535 ? "15px" : "", marginTop: size.width <= 535 ? "-10px" : "", whiteSpace: "unset" }
                }}
                variant="outlined"
                defaultValue={prevFormData?.moreTechnicalSkills}
                helperText={errors.moreTechnicalSkills ? "Maximum length of 1000 characters" : "e.g. A web developer would write something like: HTML, CSS, JavaScript, jQuery, React, etc."}
                FormHelperTextProps={{
                    style: { color: errors.moreTechnicalSkills ? "red" : "" }
                }}
                {...register("moreTechnicalSkills")}
            />

            <div className="form-navigation">
                <button className="next" type="submit">Next</button>
            </div>
        </form>
    )
}
