import { TextField } from "@material-ui/core"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useForm, useFieldArray, Controller } from "react-hook-form"

import "../styles/quizsection.css"
import { DatePicker } from "@mui/x-date-pickers"
import dayjs from "dayjs"

const emptyField = {
    jobTitle: "",
    company: "",
    startDate: null,
    endDate: null,
    reference: "",
    additionalInformation: ""
}

export default function Section4() {

    const prevFormData = JSON.parse(localStorage.getItem("section4"))
    const prevSectionData = JSON.parse(localStorage.getItem("section3"))
    const section2Data = JSON.parse(localStorage.getItem("section2"))

    prevFormData?.workExperiences.forEach(item => {
        item.startDate = dayjs(item.startDate)
        item.endDate = dayjs(item.endDate)
    })

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [prevCompleted, setPrevCompleted] = useState(true)

    useEffect(() => {
        if (!prevSectionData) {
            setPrevCompleted(false)
        }
    }, [])

    useEffect(() => {
        if (section2Data?.experience === "no" && !prevFormData) {
            remove(0)
        }
    }, [])

    const { register, control, clearErrors, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            workExperiences: prevFormData ? [...prevFormData.workExperiences] : [emptyField]
        }
    })
    const { fields, remove, append } = useFieldArray({
        control,
        name: "workExperiences",
        rules: { maxLength: 10 }
    })

    const onSubmit = (data) => {
        localStorage.setItem("section4", JSON.stringify(data))
        setIsSubmitted(true)
    }

    const addField = () => {
        clearErrors("workExperiences");
        append(emptyField);
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
        <form onSubmit={handleSubmit(onSubmit)}>
            {isSubmitted && <Navigate to="/quiz/section5" />}
            {!prevCompleted && <Navigate to="/quiz/section3" />}

            {fields.map((field, i) => {
                const fieldName = `workExperiences[${i}]`

                return (
                    <fieldset key={field.id}>

                        <div className="seperator-header">
                            <h3>Work Experience {i + 1}</h3>
                            {i === 0 && <p className="section2-explanation">Add a section for every job you have worked in</p>}
                        </div>

                        <TextField
                            label="Job Title *"
                            variant="outlined"
                            className="quiz-input-field"
                            defaultValue={prevFormData?.workExperiences?.[i]?.jobTitle}
                            helperText={errors.workExperiences?.[i]?.jobTitle ? "This field is required" : "e.g. Financial analyst internship"}
                            FormHelperTextProps={{
                                style: { color: errors.workExperiences?.[i]?.jobTitle ? "red" : "" }
                            }}
                            {...register(`${fieldName}.jobTitle`, { required: true, maxLength: 100 })}
                        />

                        <TextField
                            label="Name of Company *"
                            variant="outlined"
                            className="quiz-input-field"
                            defaultValue={prevFormData?.workExperiences?.[i]?.company}
                            helperText={errors.workExperiences?.[i]?.company ? "This field is required" : ""}
                            FormHelperTextProps={{
                                style: { color: errors.workExperiences?.[i]?.company ? "red" : "" }
                            }}
                            {...register(`${fieldName}.company`, { required: true, maxLength: 100 })}
                        />

                        <div className="date-fields">

                            <Controller
                                name={`${fieldName}.startDate`}
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) =>
                                    <DatePicker
                                        className="date-field quiz-input-field"
                                        label="Start Date *"
                                        views={["month", "year"]}
                                        slotProps={{
                                            textField: {
                                                helperText: errors.workExperiences?.[i]?.startDate ? <span className="error">This field is required</span> : ""
                                            }
                                        }}
                                        renderInput={(params) =>
                                            <TextField
                                                {...params}
                                            />}
                                        {...field}
                                    />
                                }
                            />

                            <Controller
                                name={`${fieldName}.endDate`}
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) =>
                                    <DatePicker
                                        className="date-field quiz-input-field"
                                        label="End Date *"
                                        views={["month", "year"]}
                                        slotProps={{
                                            textField: {
                                                helperText: errors.workExperiences?.[i]?.endDate ? <span className="error">This field is required</span> : ""
                                            }
                                        }}
                                        renderInput={(params) =>
                                            <TextField
                                                {...params}
                                            />}
                                        {...field}
                                    />
                                }
                            />
                        </div>

                        <TextField
                            label="Reference (optional)"
                            className="reference quiz-input-field"
                            variant="outlined"
                            defaultValue={prevFormData?.workExperiences?.[i]?.reference}
                            helperText={errors.workExperiences?.[i]?.reference ? "Maximum of 1000 characters" : "e.g. John Smith, johnsmith@gmail.com, Managing Director"}
                            FormHelperTextProps={{
                                style: { color: errors.workExperiences?.[i]?.reference ? "red" : "" }
                            }}
                            {...register(`${fieldName}.reference`, { maxLength: 1000 })}
                        />

                        <TextField
                            className="multiline quiz-input-field"
                            label="Additional Information (optional)"
                            variant="outlined"
                            multiline
                            minRows={4}
                            InputLabelProps={{
                                style: { paddingRight: size.width <= 365 ? "15px" : "", whiteSpace: "unset" }
                            }}
                            defaultValue={prevFormData?.workExperiences?.[i]?.additionalInformation}
                            helperText={errors.workExperiences?.[i]?.additionalInformation ? "Maximum of 10 000 characters" : "e.g. Special training you received or portfolio projects you worked on."}
                            FormHelperTextProps={{
                                style: { color: errors.workExperiences?.[i]?.additionalInformation ? "red" : "" }
                            }}
                            {...register(`${fieldName}.additionalInformation`, { maxLength: 10000 })}
                        />

                        <div className="remove-button-container">
                            <Button className="remove-field-button" onClick={() => remove(i)} variant="outlined" color="error">Remove Field</Button>
                        </div>

                    </fieldset>
                )
            })}

            {fields.length === 0 &&
                <div className="no-work-experience">
                    <h3>You have chosen to continue without any work experience</h3>
                    <p>Please click "next"</p>
                </div>}

            <div className="form-navigation">
                <Link to="/quiz/section3"><button className="prev">Prev</button></Link>
                <button className="next" type="submit">Next</button>
            </div>

            <div className="field-handler">
                <Button id="add-field-button2" onClick={() => addField()} variant="outlined">Add Work Experience</Button>
            </div>

        </form>
    )
}
