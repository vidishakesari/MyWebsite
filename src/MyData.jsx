import React from "react";
import php from '../src/Image/download (2).jpg';
import reactjs from '../src/Image/download (3).jpg';
import angular from '../src/Image/images (3).jpg';

const MyData = [

    {
        
        imgsrc : php ,
        title :"Website By SQL and PHP",
        link : "https://www.makeuseof.com/tag/build-simple-php-website/",
        text : "Various options have been available for web development over the years. It started with plain HTML, then HTML with CSS embedded or a CSS file reference. ",
    },

    {
        
        imgsrc : reactjs,
        title :"Website By Reactjs and Nodejs",
        link : "https://www.geeksforgeeks.org/how-to-create-a-website-in-react-js/",
        text : "ReactJS is an open-source, component-based front-end library responsible only for the view layer of the application. It is maintained by Facebook.", 

    },

    {
        
        imgsrc : angular,
        title :"Website By Angular",
        link : "https://www.creativebloq.com/how-to/how-to-build-a-full-page-website-in-angular",
        text : "Angular is often thought of as a framework that comes from the enterprise side of the tracks and generally enjoys the company of line of business applications.",
    }
];

export default MyData;