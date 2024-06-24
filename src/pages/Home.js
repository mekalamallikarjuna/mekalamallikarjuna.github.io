// Home.js
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import DarkVariantExample from '../components/carousels/DarkVariantExample';

const Home = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Home");
    return (
    <>
        <DarkVariantExample/>
        <h3>Home:</h3>
        <div style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">
        
        <p>
        I'm a Full Stack Ruby On Rails Developer, Freelancer, Software Trainer. I have total 6+ years
         of experience on IT industry & 3+ years of Non-IT experience with Ruby On Rails with React JS technologies in various domains.
         I have been working in software industry for the past 5+ years. I worked 2 years as a 
         Software Trainer. I worked 1+ years as a Freelancer. Before I worked 1 years as a Ruby on Rails 
         Developer. I have solid fundamentals of programming languages, front-end, back-end, testing and deployment environments.
         I am looking forward to a new challenge role with my experience and passion.
        </p>
        </div>
    </>
    );
}

export default Home;
