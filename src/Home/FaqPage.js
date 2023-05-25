import Faq from "react-faq-component"
import { Link } from "react-router-dom"

import "../styles/faqpage.css"
import { useEffect, useState } from "react"

const data = {
    rows: [
        {
            title: "How much does your CV writing service cost?",
            content: <p>We charge R499 for our service.</p>,
        },
        {
            title: "How long does it take until I receive my CV?",
            content: <p>We will deliver on all CVs within 3 days after ordering.</p>
        },
        {
            title: "How does the CV writing process work?",
            content: <p>To get started with our CV writing service, simply complete our online quiz and make a payment on our website. Once we receive your order, one of our writers will contact you via email to discuss your CV in more detail. If they require any additional information to create your CV that was not covered in the quiz, they will request it from you. Additionally, if you think of any other relevant details that you forgot to mention in the quiz, you can simply email them to your writer.</p>,
        },
        {
            title: "Do you write CVs for specific industries and job positions?",
            content: <p>Yes, to ensure that your CV is tailored to your specific needs, we have developed a comprehensive quiz that acquires the information we need about your industry, job position, skills, experience, and other relevant details. Additionally, we provide a section where you can add any other information that you think is relevant. We use the information gathered from the quiz and the additional information you provide to create a unique, customized CV that accurately represents you and your qualifications, while tailoring it to the standards in your industry.</p>
        },
        {
            title: "Can I request revisions to my CV?",
            content: <p>Yes, we offer revisions because we want you to be completely satisfied with your new CV. If you're not happy with the content, design or layout, you can request revisions from us. The first revision is completely free, and any subsequent revisions will cost R100 each.</p>,
        },
        {
            title: "Do you offer refunds?",
            content: <p>Yes, we offer a full refund within 48 hours of the completion of your CV. You can find more details about our <Link to="/cv-website/refund-policy">refund policy</Link> here.</p>,
        },
        {
            title: "Do you offer any additional services?",
            content: <p>Yes, we also offer two additional services: cover letter writing and LinkedIn profile optimization. While these services are still undergoing testing and development, we are happy to provide them if you are interested. To learn more about our cover letter writing and LinkedIn profile optimization services, please contact us at <a href="mailto:support@cvexpertise.co.za" target="_blank">support@cvexpertise.co.za</a>.</p>,
        },
    ]
}

export default function FaqPage() {

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

    const styles = {
        rowTitleTextSize: "26px",
        rowContentTextSize: "23px",
        rowContentPaddingBottom: "15px",
    }

    if (size.width <= 800) {
        styles.rowTitleTextSize = "21px";
        styles.rowContentTextSize = "18px";
        styles.rowContentPaddingBottom = "10px"
    }

    if (size.width <= 575) {
        styles.rowTitleTextSize = "17px";
        styles.rowContentTextSize = "16px";
        styles.rowContentPaddingBottom = "8px"
    }

    return (
        <div className="faq-page-home faq-page">
            <h2>Frequently Asked <span className="blue">Questions</span></h2>
            <div className="faq-component-container">
                <Faq data={data} className="faq-component" styles={styles} />
            </div>
        </div>
    )
}