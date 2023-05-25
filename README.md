# CV Writing Service Website

This repository contains the source code and assets for a CV writing service website. The website is designed to help customers create professional and effective CVs.

## Table of Contents

- [Summary](#summary)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Summary

The purpose of the CV Writing Service Website is to assist individuals, particularly students and those with entry-level professional experience, in creating visually appealing CVs. The website also removes the need for consultations with a CV writer by providing a comprehensive quiz that gathers all relevant information about their career, experience, education, and other details necessary for their CV. They can also choose from a selection of templates, which one they would like to be used for their CV. Once users have completed the quiz and submitted their information, the data can be processed and sent to a writer who can use it to begin writing the customer's CV right away.

## Features

* Beautiful Design: The website is visually appealing and feels professional. Through using dynamic content and animations, the website feels slick and modern.
* Fully Responsive: The website is designed to be fully responsive, ensuring a great user experience across all different devices and screen sizes.
* Quiz Component: The website utilizes a quiz, comprising multiple forms and fields to collect information from users about their career, experience, education and anything else related to their CVs. Upon completing the quiz and making the payment, all of the user's information will be collected from the local storage in their browser and sent to the backend.
* Contact Us Page: The website makes the communication between the user and support team simple and easy. Upon filling out the fields and submitting a query, the email will be sent directly to a specified email address for assistance.
* Automated Email Instructions: Upon completing the quiz and making the payment, users receive an automatic email containing further instructions, streamlining the process and ensuring a great user experience.
* Integrating Components and Libraries: The website makes use of various components and libraries, such as image carousels, FAQ components, and parallax scrolling effects to enhance the overall design and professional feel of the website.

## Technologies Used

* React.js: The website is built using React.js to create a well-designed user interface.
* React Router: React Router is used for navigation of the website, allowing for quick transitions and minimal loading time between different pages. However during production, I realized the limitations of client-side rendering used by React Router. In the future, I would prefer to use Next.js to gain the flexibitilty of both server-side rendering and client-side rendering.
* React Hook Form and Yup: For easy handling and validation of form data submitted by users, I utilized React Hook Form and Yup.
* PayFast Payment Integration: To receive payments the website utilizes PayFast payment integration, ensuring secure payment processing for users.
* Material-UI (MUI): MUI is used for the majority of the CSS styling, which provides a visually appealing design.
* Back4App API: Instead of creating a backend for my application from scratch, I utilized the Back4App API for backend operations. 
