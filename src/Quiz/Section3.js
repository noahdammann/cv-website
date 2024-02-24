import { FormControl, TextField } from "@material-ui/core"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useForm, useFieldArray, Controller } from "react-hook-form"

import "../styles/quizsection.css"
import { DatePicker } from "@mui/x-date-pickers"
import dayjs from "dayjs"

const emptyBlock = {
    degree: "",
    institution: "",
    startDate: null,
    endDate: null,
    reference: "",
    additionalInformation: ""
}

export default function Section3() {

    const prevFormData = JSON.parse(localStorage.getItem("section3"))
    const prevSectionData = JSON.parse(localStorage.getItem("section2"))

    prevFormData?.education.forEach(item => {
        item.startDate = dayjs(item.startDate)
        item.endDate = dayjs(item.endDate)
    })

    console.log(prevFormData)

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [prevCompleted, setPrevCompleted] = useState(true)

    useEffect(() => {
        if (!prevSectionData) {
            setPrevCompleted(false)
        }
    }, [])

    useEffect(() => {
        if (prevSectionData?.education === "no" && !prevFormData) {
            removeBlock(0)
        }
    }, [])

    const { register, control, clearErrors, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            education: prevFormData ? [...prevFormData.education] : [emptyBlock]
        }
    })
    const { fields, remove, append } = useFieldArray({
        control,
        name: "education",
        rules: { maxLength: 10 }
    })

    const onSubmit = (data) => {
        localStorage.setItem("section3", JSON.stringify(data))
        setIsSubmitted(true)
    }

    const addBlock = () => {
        clearErrors();
        append(emptyBlock)
    }

    const removeBlock = (i) => {
        remove(i)
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
            {isSubmitted && <Navigate to="/quiz/section4" />}
            {!prevCompleted && <Navigate to="/quiz/section2" />}

            {fields.map((field, i) => {
                const fieldName = `education[${i}]`

                return (
                    <div className="section-form" key={field.id}>
                        <div className="seperator-header">
                            <h3>Education {i + 1}</h3>
                            {i === 0 && <p className="section2-explanation">Add your qualifications and educational background</p>}
                        </div>
                        <TextField
                            label="Name of Degree/Diploma/Certificate *"
                            InputLabelProps={{
                                style: { paddingRight: size.width <= 405 ? "5px" : size.width <= 845 && size.width >= 775 ? "20px" : "", marginTop: size.width <= 405 ? "-10px" : size.width <= 845 && size.width >= 775 ? "-10px" : "", whiteSpace: size.width <= 340 ? "" : "unset" },
                                shrink: size.width <= 340 ? true : undefined
                            }}
                            className="degree quiz-input-field"
                            defaultValue={prevFormData?.education?.[i]?.degree}
                            helperText={errors.education?.[i]?.degree ? "This field is required" : "e.g. High School Diploma"}
                            FormHelperTextProps={{
                                style: { color: errors.education?.[i]?.degree ? "red" : "" }
                            }}
                            {...register(`${fieldName}.degree`, { required: true, maxLength: 100 })}
                        />

                        <TextField
                            label="University/School *"
                            variant="outlined"
                            className="institution quiz-input-field"
                            defaultValue={prevFormData?.education?.[i]?.institution}
                            helperText={errors.education?.[i]?.institution ? "This field is required" : ""}
                            FormHelperTextProps={{
                                style: { color: errors.education?.[i]?.institution ? "red" : "" }
                            }}
                            {...register(`${fieldName}.institution`, { required: true, maxLength: 100 })}

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
                                                helperText: errors.education?.[i]?.startDate ? <span className="error">This field is required</span> : ""
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
                                                helperText: errors.education?.[i]?.endDate ? <span className="error">This field is required</span> : ""
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
                            defaultValue={prevFormData?.education?.[i]?.reference}
                            helperText={errors.education?.[i]?.reference ? "Maximum of 1000 characters" : "e.g. Ryan Smith, ryansmith@gmail.com, Dean of the Faculty of Engineering"}
                            FormHelperTextProps={{
                                style: { color: errors.education?.[i]?.reference ? "red" : "" }
                            }}
                            {...register(`${fieldName}.reference`, { maxLength: 1000 })}
                        />
                        <TextField
                            className="multiline quiz-input-field"
                            label="Additional Information (optional)"
                            variant="outlined"
                            InputLabelProps={{
                                style: { paddingRight: size.width <= 365 ? "15px" : "", whiteSpace: "unset" }
                            }}
                            multiline
                            minRows={4}
                            defaultValue={prevFormData?.education?.[i]?.additionalInformation}
                            helperText={errors.education?.[i]?.additionalInformation ? "Maximum of 10 000 characters" : "e.g. Noteworthy projects, extracurricular activities, achievements etc."}
                            FormHelperTextProps={{
                                style: { color: errors.education?.[i]?.additionalInformation ? "red" : "" }
                            }}
                            {...register(`${fieldName}.additionalInformation`, { maxLength: 10000 })}

                        />
                        <div className="remove-button-container">
                            <Button className="remove-field-button" onClick={() => remove(i)} variant="outlined" color="error">Remove Field</Button>
                        </div>

                    </div>
                )
            })}
            {fields.length === 0 &&
                <div className="no-work-experience">
                    <h3>You have chosen to continue without any education</h3>
                    <p>Please click "next"</p>
                </div>}
            <div className="form-navigation">
                <Link to="/quiz/section2"><button className="prev">Prev</button></Link>
                <button className="next" type="submit">Next</button>
            </div>
            <div className="field-handler">
                <Button id="add-field-button" onClick={addBlock} variant="outlined">Add Education</Button>
            </div>
        </form>
    )
}
