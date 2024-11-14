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
                    Hello, my name is Mekala Mallikarjuna, and I hold a B.Tech degree in Computer Science and Engineering with a specialization in Artificial Intelligence. I am passionate about technology and have developed a strong foundation in both front-end and back-end development.

In terms of technical skills, I am proficient in front-end technologies like HTML, CSS, and JavaScript, which I use to create interactive and user-friendly websites. On the back-end, I have experience working with programming languages such as C and Java, and I am well-versed in database management using SQL.

I am eager to continue learning and applying my skills in real-world projects, and I am always looking for opportunities to grow and contribute to innovative solutions in the tech industry.

Feel free to reach out to me at 6304716656 if you would like to discuss potential collaborations or opportunities.
        </p>
                    
        </div>
    </>
    );
}

export default Home;
