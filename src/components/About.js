import Card from "./Card";
import '../styles/About.css';

const About = () => {

    return(
        <div className="about">
        <div className="title">
        <h1>Hi! Welcome to my site! </h1>
        </div>

        <div className='intro'>
          
            <p>I'm Rita Toussaint and I'm a CodeClan graduate, a career changer, and a web developer! 
                    I have a flair for front-end but I also have skills to share in back-end development too! I spend a lot of my time sharpening my skills, attending networking events and workshops, keeping my LinkedIn page up to date and building my portfolio site (psst - you’re already here!). Today, I am doing freelance work for English learning company, Intrepid English.</p>
                       
            <p>I know that this field will be a source of constant learning and I could not be more excited! Learning new things brings me such joy and inspires me. </p>

            <a
                href="/siteCV.pdf"
                download="Rita-Toussaint-CV"
                target="_blank"
                rel="noreferrer">
                    <button>My CV</button>
            </a>


            </div>
        </div>
    )
}

export default About;