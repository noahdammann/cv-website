import { yupResolver } from "@hookform/resolvers/yup"
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from "@material-ui/core"
import { useState, useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { Link, Navigate } from "react-router-dom"
import * as yup from "yup"
import Parse from 'parse/dist/parse.min.js';

import "../styles/quizsection.css"

const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const phoneRegExp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

const schema = yup.object().shape({
    fullName: yup.string().required().max(200),
    email: yup.string().max(200).test("email", "Email is not valid", (value) => {
        return emailRegExp.test(value)
    }),
    address: yup.string().required().max(1000),
    phone: yup.string().test("phoneNumber", "Phone number is not valid", (value) => {
        if (!value.length) return true // attachment is optional
        return phoneRegExp.test(value)
    }),
    race: yup.string().required().oneOf(["white", "black", "coloured", "indian"]),
    gender: yup.string().required().oneOf(["male", "female", "other"]),
    education: yup.string().required().oneOf(["yes", "no"]),
    experience: yup.string().required().oneOf(["yes", "no"])
})

export default function Section2() {

    Parse.initialize("STIwJi4FxePuDpJNN5z36ei73m4cO9zPkWmgek3s", "O1IGWGssZIfE6LhQu21zgBaaLaVi3DJLiyWfK3qf"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = "https://parseapi.back4app.com/";

    const prevFormData = JSON.parse(localStorage.getItem("section2"))
    const prevSectionData = JSON.parse(localStorage.getItem("section1"))
    const [prevCompleted, setPrevCompleted] = useState(true)

    useEffect(() => {
        if (!prevSectionData) {
            setPrevCompleted(false)
        }
    }, [])

    const [isSubmitted, setIsSubmitted] = useState(false)
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { race: prevFormData ? prevFormData.race : "", gender: prevFormData ? prevFormData.gender : "", education: prevFormData ? prevFormData.education : "", experience: prevFormData ? prevFormData.experience : "" }
    })

    const onSubmit = async (data) => {

        const lead = new Parse.Object("Leads");

        lead.set("name", data.fullName)
        lead.set("email", data.email)
        if (data?.phone) {
            lead.set("phone", data.phone)
        }

        async function postData() {
            try {
                let result = await lead.save()
                console.log(result)
            } catch (error) {
                console.log(error)
            }
        }
        postData()

        localStorage.setItem("section2", JSON.stringify(data))
        setIsSubmitted(true)
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
            {isSubmitted && <Navigate to="/quiz/section3" />}
            {!prevCompleted && <Navigate to="/quiz/section1" />}

            <div className="seperator-header">
                <h3>Personal Details</h3>
                <p>Tell us about yourself</p>
            </div>

            <TextField
                label="Full Name *"
                variant="outlined"
                className="quiz-input-field"
                defaultValue={prevFormData?.fullName}
                helperText={errors.fullName ? "This field is required" : ""}
                FormHelperTextProps={{
                    style: { color: errors.fullName ? "red" : "" }
                }}
                {...register("fullName")}
            />

            <TextField
                label="Email Address *"
                variant="outlined"
                className="email-address quiz-input-field"
                defaultValue={prevFormData?.email}
                helperText={errors.email ? "Please provide a valid email" : ""}
                FormHelperTextProps={{
                    style: { color: errors.email ? "red" : "" }
                }}
                {...register("email")}
            />

            <TextField
                label="Cellphone Number (optional)"
                className="phone-number quiz-input-field"
                variant="outlined"
                InputLabelProps={{
                    style: { paddingRight: size.width <= 335 ? "15px" : "", marginTop: size.width <= 335 ? "-10px" : "", whiteSpace: "unset" }
                }}
                defaultValue={prevFormData?.phone}
                helperText={errors.phone ? "Phone number is not valid" : "If you leave this blank, we'll leave a space for it on your CV"}
                FormHelperTextProps={{
                    style: { color: errors.phone ? "red" : "" }
                }}
                {...register("phone")}
            />

            <TextField
                label="Location *"
                variant="outlined"
                className="street-address quiz-input-field"
                defaultValue={prevFormData?.address}
                helperText={errors.address ? "This field is required" : "e.g. Sandton, Johannesburg, Gauteng"}
                FormHelperTextProps={{
                    style: { color: errors.address ? "red" : "" }
                }}
                {...register("address")}
            />

            <Controller
                name="gender"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <FormControl {...field} className="quiz-input-field">
                        <FormLabel id="radio-label">What is your gender? *</FormLabel>
                        <RadioGroup
                            defaultValue={prevFormData?.gender}
                            row={size.width > 775 ? true : size.width < 685 ? true : false}
                        >
                            <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                            <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                            <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
                        </RadioGroup>
                        <FormHelperText error>{errors.gender ? "This field is required" : ""}</FormHelperText>
                    </FormControl>
                )}
            />

            <Controller
                name="race"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <FormControl {...field} className="quiz-input-field">
                        <FormLabel id="radio-label">What is your race? *</FormLabel>
                        <RadioGroup
                            defaultValue={prevFormData?.race}
                            row={size.width > 775 ? true : size.width < 685 ? true : false}
                        >
                            <FormControlLabel value="black" control={<Radio color="primary" />} label="Black" />
                            <FormControlLabel value="white" control={<Radio color="primary" />} label="White" />
                            <FormControlLabel value="coloured" control={<Radio color="primary" />} label="Coloured" />
                            <FormControlLabel value="indian" control={<Radio color="primary" />} label="Indian" />
                        </RadioGroup>
                        <FormHelperText error>{errors.race ? "This field is required" : ""}</FormHelperText>
                    </FormControl>
                )}
            />

            <div className="seperator-header">
                <h3>Education and Experience</h3>
                <p>Fill in the details below</p>
            </div>

            <Controller
                name="education"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <FormControl {...field} className="quiz-input-field">
                        <FormLabel id="radio-label">Do you have any formal education? *</FormLabel>
                        <RadioGroup
                            defaultValue={prevFormData?.education}
                            row
                        >
                            <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
                        </RadioGroup>
                        <FormHelperText error>{errors.education ? "This field is required" : ""}</FormHelperText>
                    </FormControl>
                )}
            />

            <Controller
                name="experience"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <FormControl {...field} className="quiz-input-field">
                        <FormLabel id="radio-label">Do you have any work experience? *</FormLabel>
                        <RadioGroup
                            defaultValue={prevFormData?.experience}
                            row
                        >
                            <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
                        </RadioGroup>
                        <FormHelperText error>{errors.experience ? "This field is required" : ""}</FormHelperText>
                    </FormControl>
                )}
            />

            <div className="form-navigation">
                <Link to="/quiz/section1"><button className="prev">Prev</button></Link>
                <button className="next" type="submit">Next</button>
            </div>

        </form>
    )
}
