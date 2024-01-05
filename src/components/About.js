import '../styles/About.css';


const About = () => {

    return(
        <div className="about">
            <div className="title">
            <img src="./newchilli.png"></img>
            
                <div className='intro'>
                <h1>I&apos;m Rita Toussaint, I'm a CodeClan graduate, a career changer, and a web developer! </h1>

                <div className='project-link'>
                <a href="#projects">My Projects →</a>
                </div>

                
                    
                </div>
            </div>
            <div className='more-info'>
            <p className='about-me'>
                            I have a flair for front-end but I also have skills to share in back-end development too! I spend a lot of my time sharpening my skills, attending networking events and workshops, keeping my LinkedIn page up to date and building my portfolio site (psst - you&apos;re already here!). Today, I am doing freelance work for English learning company, Intrepid English, and volunteering with the Scottish Tech Army.</p>
            <div className='skills-and-stack'>
                    <div className='stack'>
                    <p className='list-title'>Stack</p>
                    <ul className='list'>
                      <li >React</li>
                      <li >Next.js</li>
                      <li >Tailwind</li>
                      <li >Bootstrap</li>
                      <li >Javascript</li>
                      <li >Python</li>
                      <li >Java</li>
                      <li >Axios</li>
                      <li >Framer Motion</li>
                      <li>SQL</li>
                      <li>PostGres</li>
                      <li>MongoDB</li>
                    </ul>
                    </div>

                    <div className='skills'>
                    <p className='list-title'>Skills</p>
                    <ul className='list'>
                      <li >French</li>
                      <li >Agile</li>
                      <li >Teaching</li>
                      <li >App Publishing</li>
                      <li >Neurodiversity Advocacy</li>
                    </ul>
                    </div>
                  </div>  
            </div>
        
        </div>
    )
}

export default About;