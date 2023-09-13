import '../styles/Projects.css';
import { useState } from "react";



const HALLOWEEN = "HALLOWEEN"
const NOTE_PROJECT = "NOTE"
const FUR_PROJECT = "FUR"
const SWANSON = "SWANSON"



const Projects = () => {
    // const [isShowingHalloween, setIsShowingHalloween] = useState(false);
    // const [isShowingNote, setIsShowingNote] = useState(false);
    // const [isShowingFur, setIsShowingFur] = useState(false);
    // const [isShowingSwanson, setIsShowingSwanson] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null)
    const [isHiding, setIsHiding] = useState(false)

    const [isShowingProject, setIsShowingProject] = useState(false);

    function toggleShowProject() {
        setIsShowingProject((isShowingProject) => !isShowingProject);
    }


    function toggleShowHalloween() {
        // setIsShowingHalloween((isShowingHalloween) => !isShowingHalloween);
        toggleShowProject();
        setSelectedProject(HALLOWEEN)
        setIsHiding((isHiding) => !isHiding);
        console.log(selectedProject);
    }

    function toggleShowNote() {
        // setIsShowingNote((isShowingNote) => !isShowingNote);
        toggleShowProject();
        setSelectedProject(NOTE_PROJECT)
        setIsHiding((isHiding) => !isHiding);
    }

    function toggleShowFur() {
        setSelectedProject(FUR_PROJECT)
        toggleShowProject();
        // setIsShowingFur((isShowingFur) => !isShowingFur);
        setIsHiding((isHiding) => !isHiding);
    }

    function toggleShowSwanson() {
        toggleShowProject();
        // setIsShowingSwanson((isShowingSwanson) => !isShowingSwanson);
        setSelectedProject(SWANSON)
        setIsHiding((isHiding) => !isHiding);
    }

   

   

    return(
        <>
            <section className="page">
                <h1>Projects</h1>
                <div className="wrap">
                    <button><a onClick={toggleShowHalloween}>Halloween Hints</a></button>
                    <button><a onClick={toggleShowNote}>NoteClan</a></button>
                    <button><a onClick={toggleShowFur}>furFinder</a></button>
                    <button><a onClick={toggleShowSwanson}>Swansonator</a></button>
                </div>

                {selectedProject === HALLOWEEN && isShowingProject === true && 
                <div className="project">
                    <div className="gallery">
                        <div className="gallery_item">
                    <img src='./minis/minihalloweenhome.png' alt='Ritas black and orange halloween homepage. There is a picture of the 3 witches from MacScottishplay' loading='lazy' className="gallery_image"></img></div>

                    <div className="gallery_item">
                    <img src='./minis/minihalloweenmusic.png' alt='Ritas black and orange halloween music page. There is a Spotify widget of Ritas very own halloween playlist.' loading='lazy' className="gallery_image"></img>
                    </div>

                    <div className="gallery_item">
                    <img src='./minis/minihalloweengames.png' alt='Ritas black and orange halloween video games page.' loading='lazy' className="gallery_image"></img></div>

                    </div>

                    <div className="smolscreen">
                        <p><em>Scroll left to right to see more screenshots</em></p>
                    </div>

                    <p>This was the very first website that I built, before I had even started at CodeClan. Written in HTML and CSS, held together with Bootstrap. I really enjoyed making this site as it's all about my favourite day of the year - Halloween! </p></div>}
                
                {selectedProject === NOTE_PROJECT && isShowingProject === true &&
                <div className="project">
                <div className="gallery">

                    <div className="gallery_item">
                        <img id='image-1' src='./projectshots/noteclanhome.png' alt='Noteclan home' loading="lazy" className="gallery_image" /></div>

                        <div className="gallery_item">
                        <img id='image-2' src='./projectshots/noteclanstudios.png' alt='Note home' loading="lazy" className="gallery_image"/></div>

                        <div className="gallery_item">
                        <img id='image-3' src='./projectshots/noteclanform.png' alt='Phone home' loading="lazy" className="gallery_image"/></div>

                        <div className="gallery_item">
                        <img id='image-4' src='./projectshots/noteclanbookings.png' alt='Phone home' loading="lazy" className="gallery_image"/></div>

                    </div>

                    <div className="smolscreen">
                        <p><em>Scroll left to right to see more screenshots</em></p>
                    </div>

                <p>This was my first project at CodeClan, written in Python, Flask and MongoDB, inspired by my own struggles in booking rehearsal space for singing practice. This is a basic CRUD app with 90s-inspired styling.</p></div>}
                
                {selectedProject === FUR_PROJECT && isShowingProject === true &&
                <div className="project">
                <div className="gallery">

                    <div className="gallery_item">
                            <img id='image-1' src='./projectshots/home.png' alt='furFinder home' loading="lazy" className="gallery_image" />
                    </div>   

                    <div className="gallery_item">
                            <img id='image-2' src='./projectshots/bettercatcarousel.png' alt='Cat carousel' loading="lazy" className="gallery_image" />
                    </div> 

                    <div className="gallery_item">
                            <img id='image-3' src='./projectshots/dogcarousel.png' alt='Dog carousel' loading="lazy" className="gallery_image" />
                    </div>

                    <div className="gallery_item">
                    <img id='image-4' src='./projectshots/admin.png' alt='Admin' loading="lazy" className="gallery_image"/>
                    </div>

                    <div className="gallery_item">
                    <img id='image-5' src='./projectshots/popup.png' alt='Popup' loading="lazy" className="gallery_image"/>
                    </div>

                </div>

                <div className="smolscreen">
                        <p><em>Scroll left to right to see more screenshots</em></p>
                </div>

                <p>This was a group project written in React. It is a pretend animal adoption service designed to resemble Tinder. I was mainly responisble for the styling, writing up the animal database and writing the carousels which showed all available cats and dogs. My team and I got along extremely well, we were able to clearly and evenly divide up the tasks and we had fun! </p></div>}

                

                {selectedProject === SWANSON && isShowingProject === true &&
                <div className="project">
                <div className="gallery">

                <div className="gallery_item">
                    <img src='./projectshots/swanquote.png' alt='Orange page with Ron Swanson in centre. A random quote from the character is featured below' loading='lazy' className="gallery_image"></img>
                </div>


                <div className="gallery_item">
                <img src='./projectshots/swansearch.png' alt='Orange page with Ron Swanson in centre. A random quote from the character is featured below along with a keyword search.' loading='lazy' className="gallery_image"></img>

                </div>

                </div>

                <div className="smolscreen">
                        <p><em>Scroll left to right to see more screenshots</em></p>
                </div>

                    <p>I made this Ron Swanson quote generator one day over Christmas break to practice using RESTful APIs. The 'New Quote' button returns a new quote from the API and the search bar searches for quotes based on user input. I kept the styling simple to reflect the character. I had a lot of fun with this silly little project!</p></div>}

                {isShowingProject == false &&
                <div className="current-project">
                <h2 id='current-title'>Current Projects</h2>
                <p>I really enjoy building websites so I am currently working on building a DisneyPlus clone in Next.js and Tailwind.</p>

                <p>I recently learned how to make an API (coming soon to the site!) and now I want to take on a bigger task. There is an API for all of the contestants and episodes on the American version of <a><em>RuPaul's Drag Race</em></a> and I would like to make something similar but for the alternative reality drag show <a><em>Dragula</em></a>. </p>

                <p>I am very interested in learning how to build apps from scratch following my experiences in getting Intrepid English's app uploaded to the Apple App Store. I am currently following the <a href='https://developer.android.com/courses/android-basics-compose/course' target='_blank' rel='noreferrer'>Android Developer course</a> on building an app in Kotlin with JetPack Compose and plan to move on to Flutter afterwards.</p>
                <br></br>
                </div>
                }
                
                <br></br>
                <br></br>
                
            </section>
        </>
    )

}

export default Projects;