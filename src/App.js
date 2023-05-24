import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import secureLocalStorage from "react-secure-storage";

import RootLayout from './layouts/RootLayout';
import Home from "./pages/Home";
import Examples from './pages/Examples';
import Pricing from "./pages/Pricing";
import Checkout from './pages/Checkout';

import CookiePolicy from "./supportPages/CookiePolicy"
import TermsAndConditions from './supportPages/TermsAndConditions';
import Privacy from './supportPages/Privacy';
import Refund from './supportPages/Refund';
import StartQuiz, { startQuizLoader } from './pages/StartQuiz';
import QuizLayout from './layouts/QuizLayout';
import Section1 from './Quiz/Section1';
import Section2 from './Quiz/Section2';
import Section3 from './Quiz/Section3';
import Section4 from './Quiz/Section4';
import Section5 from './Quiz/Section5';
import Success from './pages/Success';
import Revisions from './supportPages/Revisions';
import Faqs from './pages/Faqs';
import Error404 from './pages/Error404';
import ContactUs from './pages/ContactUs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

var successRoute = secureLocalStorage.getItem("successRoute")

if (successRoute === null) {
    successRoute = parseInt(Math.random() * 1000000000)
    secureLocalStorage.setItem("successRoute", JSON.stringify(successRoute))
}

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} loader={() => successRoute} />
                <Route path="examples" element={<Examples />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="start-quiz" loader={startQuizLoader} element={<StartQuiz />} />
                <Route path={`success/${successRoute}`} element={<Success />} />
                <Route path="checkout" loader={() => successRoute} element={<Checkout />} />
                <Route path="faqs" element={<Faqs />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="quiz" element={<QuizLayout />}>
                    <Route index path="section1" element={<Section1 />} />
                    <Route path="section2" element={<Section2 />} />
                    <Route path="section3" element={<Section3 />} />
                    <Route path="section4" element={<Section4 />} />
                    <Route path="section5" element={<Section5 />} />
                </Route>
                <Route path="privacy-policy" element={<Privacy />} />
                <Route path="terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="refund-policy" element={<Refund />} />
                <Route path="revisions-policy" element={<Revisions />} />
                <Route path="cookie-policy" element={<CookiePolicy />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        )
    )


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <RouterProvider router={router} />
        </LocalizationProvider>
    );
}

export default App;

