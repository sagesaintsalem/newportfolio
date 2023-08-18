import Card from "./Card";
import '../styles/Projects.css';
import { useState } from "react";


const HALLOWEEN = "HALLOWEEN"
const NOTE_PROJECT = "NOTE"
const FUR_PROJECT = "FUR"
const SWANSON = "SWANSON"

const NOTE1 = "NOTE1"
const NOTE2 = "NOTE2"
const NOTE3 = "NOTE3"




const Projects = () => {
    const [isShowingHalloween, setIsShowingHalloween] = useState(false);
    const [isShowingNote, setIsShowingNote] = useState(false);
    const [isShowingFur, setIsShowingFur] = useState(false);
    const [isShowingSwanson, setIsShowingSwanson] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null)
    // const [showImage, setShowImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState('')


    function toggleShowHalloween() {
        setIsShowingHalloween((isShowingHalloween) => !isShowingHalloween);
        setSelectedProject(HALLOWEEN)
    }

    function toggleShowNote() {
        setIsShowingNote((isShowingNote) => !isShowingNote);
        setSelectedProject(NOTE_PROJECT)
    }

    function toggleShowFur() {
        setSelectedProject(FUR_PROJECT)
        setIsShowingFur((isShowingFur) => !isShowingFur);
    }

    function toggleShowSwanson() {
        setIsShowingSwanson((isShowingSwanson) => !isShowingSwanson);
        setSelectedProject(SWANSON)
    }

    function toggleShowImage(event) {
        console.log(event.currentTarget.id)
        let imageName = String(event.currentTarget.id);
        setSelectedImage(imageName);
      
        
    }

   

    return(
        <>
            <section className="page">
                <h1>Projects</h1>
                <div className="wrap">
                    <Card><a onClick={toggleShowHalloween}>Halloween Hints</a></Card>
                    <Card><a onClick={toggleShowNote}>NoteClan</a></Card>
                    <Card><a onClick={toggleShowFur}>furFinder</a></Card>
                    <Card><a onClick={toggleShowSwanson}>Swansonator</a></Card>
                </div>

                {selectedProject === HALLOWEEN && isShowingHalloween === true && 
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
                    <Card>This was the very first website that I built, before I had even started at CodeClan. Written in HTML and CSS, held together with Bootstrap. I really enjoyed making this site as it's all about my favourite day of the year - Halloween! </Card></div>}
                
                {selectedProject === NOTE_PROJECT && isShowingNote === true &&
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
                <Card>This was my first project at CodeClan, written in Python, Flask and MongoDB, inspired by my own struggles in booking rehearsal space for singing practice. This is a basic CRUD app with 90s-inspired styling.</Card></div>}
                
                {selectedProject === FUR_PROJECT && isShowingFur === true &&
                <div className="project">
                <div className="gallery">
                {/* <img src='./minis/home.png'></img>
                <img src='./minis/bettercatcarousel.png'></img>
                <img src='./minis/dogcarousel.png'></img>
                <img src='./minis/admin.png'></img>
                <img src='./minis/popup.png'></img> */}

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
                <Card>This was a group project written in React. It is a pretend animal adoption service designed to resemble Tinder. I was mainly responisble for the styling, writing up the animal database and writing the carousels which showed all available cats and dogs. My team and I got along extremely well, we were able to clearly and evenly divide up the tasks and we had fun! </Card></div>}

                

                {selectedProject === SWANSON && isShowingSwanson === true &&
                <div className="project">
                <div className="gallery">

                <div className="gallery_item">
                    <img src='./projectshots/swanquote.png' alt='Orange page with Ron Swanson in centre. A random quote from the character is featured below' loading='lazy' className="gallery_image"></img>
                </div>


                <div className="gallery_item">
                <img src='./projectshots/swansearch.png' alt='Orange page with Ron Swanson in centre. A random quote from the character is featured below along with a keyword search.' loading='lazy' className="gallery_image"></img>

                </div>
                
                </div>
                    <Card>I made this Ron Swanson quote generator one day over Christmas break to practice using RESTful APIs. The 'New Quote' button returns a new quote from the API and the search bar searches for quotes based on user input. I kept the styling simple to reflect the character. I had a lot of fun with this silly little project!</Card></div>}


                <div className="project">
                    <h2>Current Projects</h2>
                    I am very interested in learning how to build apps from scratch following my experiences in getting Intrepid English's app uploaded to the Apple App Store. I am currently following the <a href='https://developer.android.com/courses/android-basics-compose/course' target='_blank'>Android Developer course</a> on building an app in Kotlin with JetPack Compose and plan to move on to Flutter afterwards.
                    <br></br>
                </div>
                <br></br>
                <br></br>
                
            </section>
        </>
    )

}

export default Projects;