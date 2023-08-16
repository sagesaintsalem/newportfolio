import Card from "./Card";
import '../styles/Projects.css';
import { useState } from "react";


const HALLOWEEN = "HALLOWEEN"
const NOTE_PROJECT = "NOTE"
const FUR_PROJECT = "FUR"
const SWANSON = "SWANSON"



const Projects = () => {
    const [isShowingHalloween, setIsShowingHalloween] = useState(false);
    const [isShowingNote, setIsShowingNote] = useState(false);
    const [isShowingFur, setIsShowingFur] = useState(false);
    const [isShowingSwanson, setIsShowingSwanson] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null)


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
                    <div className="imgwrap">
                    <img src='./minis/minihalloweenhome.png'></img>
                    <img src='./minis/halloweenmusic.png'></img>
                    <img src='./minis/minihalloweengames.png'></img>
                    </div>
                    <Card>This was the very first website that I built, before I had even started at CodeClan. Written in HTML and CSS, held together with Bootstrap. I really enjoyed making this site as it's all about my favourite day of the year - Halloween! </Card></div>}
                
                {selectedProject === NOTE_PROJECT && isShowingNote === true &&
                <div className="project">
                <div className="imgwrap">
                <img src='./minis/noteclanhome.png'></img>
                <img src='./minis/ncstudios.png'></img>
                <img src='./minis/ncform.png'></img>
                <img src='./minis/ncbookings.png'></img>
                </div>
                <Card>This was my first project at CodeClan, written in Python, Flask and MongoDB, inspired by my own struggles in booking rehearsal space for singing practice. This is a basic CRUD app with 90s-inspired styling.</Card></div>}
                
                {selectedProject === FUR_PROJECT && isShowingFur === true &&
                <div className="project">
                <div className="imgwrap">
                <img src='./minis/home.png'></img>
                <img src='./minis/bettercatcarousel.png'></img>
                <img src='./minis/dogcarousel.png'></img>
                <img src='./minis/admin.png'></img>
                <img src='./minis/popup.png'></img>
                </div>
                <Card>This was a group project written in React. It is a pretend animal adoption service designed to resemble Tinder. I was mainly responisble for the styling, writing up the animal database and writing the carousels which showed all available cats and dogs. My team and I got along extremely well, we were able to clearly and evenly divide up the tasks and we had fun! </Card></div>}

                

                {selectedProject === SWANSON && isShowingSwanson === true &&
                <div className="project">
                <div className="imgwrap">
                <img src='./minis/swanquote.png'></img>
                <img src='./minis/swansearch.png'></img>
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