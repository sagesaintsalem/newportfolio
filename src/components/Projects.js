import '../styles/Projects.css';
import { useState } from "react";



const HALLOWEEN = "HALLOWEEN"
const NOTE_PROJECT = "NOTE"
const FUR_PROJECT = "FUR"
const SWANSON = "SWANSON"
const DIDNEY = "DIDNEY"



const Projects = () => {
  
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

   function toggleShowDidney() {
    toggleShowProject();
    setSelectedProject(DIDNEY)
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
                    <button><a onClick={toggleShowDidney}>Disney+ Clone</a></button>
                </div>

                {selectedProject === HALLOWEEN && isShowingProject === true && 
                <div className="project">
                    <div className="gallery">
                        <div className="gallery_item">
                    <img src='./halloweenhome.png' alt='Ritas black and orange halloween homepage. There is a picture of the 3 witches from MacScottishplay' loading='lazy' className="gallery_image"></img></div>

                    <div className="gallery_item">
                    <img src='./halloweenmusic.png' alt='Ritas black and orange halloween music page. There is a Spotify widget of Ritas very own halloween playlist.' loading='lazy' className="gallery_image"></img>
                    </div>

                    <div className="gallery_item">
                    <img src='./halloweengames.png' alt='Ritas black and orange halloween video games page.' loading='lazy' className="gallery_image"></img></div>

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


                {selectedProject === DIDNEY && isShowingProject === true && 
                <div className='project'>
                <div className='gallery'>

                    <div className='gallery_item'>
                        <img src='./projectshots/didneyclontop.png' alt='The top of the Disney+ clone is shown. A slider component with big film posters goes along the top of the screen, all of which grow slightly on hover and provide a small blurb for each film.'loading='lazy' className="gallery_image"></img>
                    </div>

                    <div className='gallery_item'>
                        <img src='./projectshots/didneyclonmid.png' alt='The rest of the Disney+ clone is shown. A slider component with small film and TV posters goes along the top of the screen, all of which grow slightly on hover.'loading='lazy' className="gallery_image"></img>
                    </div>

                    <div className='gallery_item'>
                        <img src='./projectshots/didneyoverlay.png' alt='Each movie or show in the Disney+ clone can be clicked on. When clicked, each item displays another picture from the film or show and an overview upon a blue-indigo gradient. This example shows the overview for a Spiderman film. ' loading='lazy' className="gallery_image" />
                    </div>

                    <div className='gallery_item'>
                        <span>
                            <a href='https://youtu.be/bsp8EUTfjUw' target="_blank" rel="noreferrer" >
                            <img src='./projectshots/Click4vid.png' alt='Click here for a video demonstration!' loading='lazy' className="gallery_image" />
                            </a>
                        </span>
                    </div>

                </div>

                <div className="smolscreen">
                        <p><em>Scroll left to right to see more screenshots</em></p>
                </div>

                <p>Using React, Tailwind and Vite, I set out to make a simple copy of Disney's UI, albeit with some changes. I used TMDB's API to populate the page with films and TV Shows, though I was not able to show trailers for each as none of the objects provided by the API had a trailer. This project helped me to learn Tailwind and it is now my favourite styling framework!</p>
                    
                    </div>}
                
            </section>
        </>
    )

}

export default Projects;