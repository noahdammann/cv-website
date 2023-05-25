import { yupResolver } from "@hookform/resolvers/yup"
import { Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from "@material-ui/core"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Link, Navigate } from "react-router-dom"
import * as yup from "yup"
import Parse from 'parse/dist/parse.min.js';

import "../styles/quizsection.css"

import simple1 from "../images/simple1-1.jpg"
import simple2 from "../images/simple2-1.jpg"
import simple3 from "../images/simple3-1.jpg"

import traditional1 from "../images/traditional1-1.jpg"
import traditional2 from "../images/traditional2-1.jpg"
import traditional3 from "../images/traditional3-1.jpg"

import modern1 from "../images/modern1-1.jpg"
import modern2 from "../images/modern2-1.jpg"
import modern3 from "../images/modern3-1.jpg"

const languagesList = ["Afrikaans", "English", "German", "Ndebele", "Northorn Sotho", "Southern Sotho", "Swati", "Tsonga", "Tswana", "Venda", "Xhosa", "Zulu"]

const schema = yup.object().shape({
    template: yup.string().required().oneOf(["simple1", "simple2", "simple3", "traditional1", "traditional2", "traditional3", "modern1", "modern2", "modern3"]),
    profilePicture: yup.mixed().test("fileSize", "Only files up to 1MB are permitted", (value) => {
        if (!value.length) return true // attachment is optional
        return value[0].size < 2000000
    }),
    previousCv: yup.mixed().test("fileSize", "Only files up to 1MB are permitted", (value) => {
        if (!value.length) return true // attachment is optional
        return value[0].size < 2000000
    }),
    hobbies: yup.string().required().max(3000),
    languages: yup.array().min(1),
    moreLanguages: yup.string().max(1000),
    additionalInformation: yup.string().max(1000)
})

export default function Section5() {

    Parse.initialize("STIwJi4FxePuDpJNN5z36ei73m4cO9zPkWmgek3s", "O1IGWGssZIfE6LhQu21zgBaaLaVi3DJLiyWfK3qf"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = "https://parseapi.back4app.com/";

    const prevFormData = JSON.parse(localStorage.getItem("section5"))
    const prevSectionData = JSON.parse(localStorage.getItem("section4"))
    const section2 = JSON.parse(localStorage.getItem("section2"))
    const prevProfilePicture = JSON.parse(localStorage.getItem("profilePicture"))
    const prevPreviousCv = JSON.parse(localStorage.getItem("previousCv"))

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [profilePictureUploaded, setProfilePictureUploaded] = useState(prevProfilePicture)
    const [previousCvUploaded, setPreviousCvUploaded] = useState(prevPreviousCv)
    const [prevCompleted, setPrevCompleted] = useState(true)

    useEffect(() => {
        if (!prevSectionData) {
            setPrevCompleted(false)
        }
    }, [])

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { template: prevFormData ? prevFormData.template : "", languages: prevFormData ? prevFormData.languages : "" }
    })

    const onSubmit = async (data) => {

        var profilePictureFile = document.getElementById("profile-picture").files[0];
        var previousCvFile = document.getElementById("previous-cv").files[0];

        var CustomerFiles = Parse.Object.extend("CustomerFiles");
        var customerFiles = new CustomerFiles();

        if (profilePictureFile) {
            var profilePicture = new Parse.File(profilePictureFile.name, profilePictureFile);
            customerFiles.set("profilePicture", profilePicture);
        }
        if (previousCvFile) {
            var previousCv = new Parse.File(previousCvFile.name, previousCvFile);
            customerFiles.set("previousCv", previousCv);
        }

        if (profilePictureFile || previousCvFile) {
            customerFiles.set("name", section2.fullName);
            try {
                await customerFiles.save();
            } catch (error) {
                console.log("Error saving customer files:", error);
            }
        }

        if (profilePictureFile) {
            setProfilePictureUploaded(profilePictureFile.name)
            localStorage.setItem("profilePicture", JSON.stringify(profilePictureFile.name));
        }
        if (previousCvFile) {
            setPreviousCvUploaded(previousCvFile.name)
            localStorage.setItem("previousCv", JSON.stringify(previousCvFile.name));
        }

        localStorage.setItem("section5", JSON.stringify(data));
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
        <form className="section-form" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            {isSubmitted && <Navigate to="/cv-website/checkout" />}
            {!prevCompleted && <Navigate to="/cv-website/quiz/section4" />}

            <div className="seperator-header">
                <h3>Template</h3>
                {errors.template ? <p className="error">This field is required</p> : <p>Choose your template. You can take a closer look <Link to="/cv-website/examples" target="_blank">here</Link></p>}
            </div>

            <Controller
                name="template"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <FormControl {...field} className="multiline">
                        <RadioGroup
                            defaultValue={prevFormData?.template}
                            row
                            className="choose-template-wrapper"
                        >
                            <h3 className="choose-template-header">Simple:</h3>
                            <FormControlLabel value="simple1" className="choose-template-form-control" control={<Radio color="primary" />} label={<img src={simple1} alt="simple template 1" className="choose-template-image" />} labelPlacement="top" />
                            <FormControlLabel value="simple2" className="choose-template-form-control" control={<Radio color="primary" />} label={<img src={simple2} alt="simple template 2" className="choose-template-image" />} labelPlacement="top" />
                            <FormControlLabel value="simple3" className="choose-template-form-control" control={<Radio color="primary" />} label={<img src={simple3} alt="simple template 3" className="choose-template-image" />} labelPlacement="top" />
                            <h3 className="choose-template-header">Traditional:</h3>
                            <FormControlLabel value="traditional1" className="choose-template-form-control" control={<Radio color="primary" />} label={<img src={traditional1} alt="traditional template 1" className="choose-template-image" />} labelPlacement="top" />
                            <FormControlLabel value="traditional2" className="choose-template-form-control" control={<Radio color="primary" />} label={<img src={traditional2} alt="traditional template 2" className="choose-template-image" />} labelPlacement="top" />
                            <FormControlLabel value="traditional3" className="choose-template-form-control" control={<Radio color="primary" />} label={<img src={traditional3} alt="traditional template 3" className="choose-template-image" />} labelPlacement="top" />
                            <h3 className="choose-template-header">Modern:</h3>
                            <FormControlLabel value="modern1" className="choose-template-form-control" control={<Radio color="primary" />} label={<img src={modern1} alt="modern template 1" className="choose-template-image" />} labelPlacement="top" />
                            <FormControlLabel value="modern2" className="choose-template-form-control" control={<Radio color="primary" />} label={<img src={modern2} alt="modern template 2" className="choose-template-image" />} labelPlacement="top" />
                            <FormControlLabel value="modern3" className="choose-template-form-control" control={<Radio color="primary" />} label={<img src={modern3} alt="modern template 3" className="choose-template-image" />} labelPlacement="top" />
                        </RadioGroup>
                    </FormControl>
                )}
            />

            <div className="seperator-header">
                <h3>Upload files</h3>
                <p>You don't have to upload files, only if you want to</p>
            </div>

            <TextField
                label="Upload a photo of yourself (optional)"
                id="profile-picture"
                InputLabelProps={{
                    shrink: true,
                }}
                className="file-upload quiz-input-field"
                type="file"
                hidden
                variant="outlined"
                helperText={errors?.profilePicture ? "Only files up to 2MB are permitted" : profilePictureUploaded ? `File received: ${profilePictureUploaded}` : "Please ensure filenames do not contain numbers or special characters"}
                FormHelperTextProps={{
                    style: { color: errors?.profilePicture ? "red" : profilePictureUploaded ? "#4BB543" : "" }
                }}
                {...register("profilePicture")}
            />

            <TextField
                label="Upload a copy of a previous CV (optional)"
                id="previous-cv"
                InputLabelProps={{
                    shrink: true,
                }}
                className="file-upload quiz-input-field"
                type="file"
                hidden
                variant="outlined"
                helperText={errors?.previousCv ? "Only files up to 2MB are permitted" : previousCvUploaded ? `File received: ${previousCvUploaded}` : "Please ensure filenames do not contain numbers or special characters"}
                FormHelperTextProps={{
                    style: { color: errors?.previousCv ? "red" : previousCvUploaded ? "#4BB543" : "" }
                }}
                {...register("previousCv")}
            />

            <div className="seperator-header">
                <h3>Languages</h3>
                {errors.languages ? <p className="error">Please select at least 1 language</p> : <p>Select the languages you can speak</p>}
            </div>
            <div className="checkbox-container">
                {languagesList.map((language) => {
                    for (let i = 0; i < prevFormData?.languages?.length; i++) {
                        if (language === prevFormData?.languages?.[i]) {
                            return (
                                <FormControlLabel key={language} control={<Checkbox color="primary" defaultChecked {...register("languages")} value={language} />} label={language} />
                            )
                        }
                    }
                    return (
                        <FormControlLabel key={language} control={<Checkbox color="primary" {...register("languages")} value={language} />} label={language} />
                    )
                })}
            </div>
            <TextField
                className="multiline quiz-input-field"
                label="List any other languages you speak (optional)"
                InputLabelProps={{
                    style: { paddingRight: size.width <= 515 ? "15px" : "", marginTop: size.width <= 515 ? "-10px" : "", whiteSpace: "unset" }
                }}
                variant="outlined"
                defaultValue={prevFormData?.moreLanguages}
                helperText={errors.moreLanguages ? "Maximum length of 1000 characters" : ""}
                FormHelperTextProps={{
                    style: { color: errors.moreLanguages ? "red" : "" }
                }}
                {...register("moreLanguages")}
            />

            <div className="seperator-header">
                <h3>Hobbies</h3>
                <p>Tell us about yourself as a person, what are your hobbies?</p>
            </div>

            <TextField
                className="multiline quiz-input-field"
                multiline
                minRows={4}
                label="Tell us about yourself"
                InputLabelProps={{
                    style: { paddingRight: "25px" }
                }}
                variant="outlined"
                defaultValue={prevFormData?.hobbies}
                helperText={errors.hobbies ? "This field is required" : ""}
                FormHelperTextProps={{
                    style: { color: errors.hobbies ? "red" : "" }
                }}
                {...register("hobbies")}
            />

            <div className="seperator-header">
                <h3>Additional Information (optional)</h3>
                <p>Whatever else you think is relevant and would like to add</p>
            </div>

            <TextField
                className="multiline quiz-input-field"
                multiline
                minRows={4}
                label="Anything else you'd like added (optional)"
                InputLabelProps={{
                    style: { paddingRight: size.width <= 475 ? "15px" : "", whiteSpace: "unset" }
                }}
                variant="outlined"
                defaultValue={prevFormData?.additionalInformation}
                helperText={errors.additionalInformation ? "Maximum of 1 000 characters" : "Anything you'd like to add that you think would help contribute to your CV. e.g. licenses, additional references etc."}
                FormHelperTextProps={{
                    style: { color: errors.additionalInformation ? "red" : "" }
                }}
                {...register("additionalInformation")}
            />
            <div className="form-navigation">
                <Link to="/cv-website/quiz/section4"><button className="prev">Prev</button></Link>
                <button className="next" type="submit">Next</button>
            </div>
        </form >
    )
}
