import Card from "./Card";
import '../styles/Projects.css';
import { useState } from "react";
import styled from 'styled-components';


const ImgGrid = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 5px;
`

const HALLOWEEN = "HALLOWEEN"
const NOTE_PROJECT = "NOTE"
const FUR_PROJECT = "FUR"
const SWANSON = "SWANSON"



const Projects = () => {
    const [isShowingHalloween, setIsShowingHalloween] = useState(false);
    const [isShowingNote, setIsShowingNote] = useState(false);
    const [isShowingFur, setIsShowingFur] = useState(false);
    const [isShowingSwanson, setIsShowingSwanson] = useState(false);
    const [isShowingCurrent, setIsShowingCurrent] = useState(false);
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

    function toggleShowCurrent() {
        setIsShowingCurrent((isShowingCurrent) => !isShowingCurrent);
    }

    return(
        <>
            <section className="page">
                <Card><h1>Projects</h1></Card>
                <div className="wrap">
                    <Card><a onClick={toggleShowHalloween}>Halloween Hints</a></Card>
                    <Card><a onClick={toggleShowNote}>NoteClan</a></Card>
                    <Card><a onClick={toggleShowFur}>furFinder</a></Card>
                    <Card><a onClick={toggleShowSwanson}>Swansonator</a></Card>
                </div>

                {selectedProject === HALLOWEEN && isShowingHalloween === true && 
                <div className="project">
                    <ImgGrid>
                    <img src='./halloweenhome.png'></img>
                    <img src='./halloweenmusic.png'></img>
                    <img src='./halloweengames.png'></img>
                    </ImgGrid>
                    <Card>This was the very first website that I built, before I had even started at CodeClan. Written in HTML and CSS, held together with Bootstrap. I really enjoyed making this site as it's all about my favourite day of the year - Halloween! </Card></div>}
                
                {selectedProject === NOTE_PROJECT && isShowingNote === true &&
                <div className="project">
                <ImgGrid>
                <img src='./noteclanhome.png'></img>
                <img src='./ncstudios.png'></img>
                <img src='./ncform.png'></img>
                <img src='./ncbookings.png'></img>
                </ImgGrid>
                <Card>This was my first project at CodeClan, written in Python, Flask and MongoDB, inspired by my own struggles in booking rehearsal space for singing practice. This is a basic CRUD app with 90s-inspired styling.</Card></div>}
                
                {selectedProject === FUR_PROJECT && isShowingFur === true &&
                <div className="project">
                <ImgGrid>
                <img src='./home.png'></img>
                <img src='./bettercatcarousel.png'></img>
                <img src='./dogcarousel.png'></img>
                <img src='./admin.png'></img>
                <img src='./popup.png'></img>
                </ImgGrid>
                <Card>This was a group project written in React. It is a pretend animal adoption service designed to resemble Tinder. I was mainly responisble for the styling, writing up the animal database and writing the carousels which showed all available cats and dogs. My team and I got along extremely well, we were able to clearly and evenly divide up the tasks and we had fun! </Card></div>}

                

                {selectedProject === SWANSON && isShowingSwanson === true &&
                <div className="project">
                <ImgGrid>
                <img src='./swanquote.png'></img>
                <img src='./swansearch.png'></img>
                </ImgGrid>
                    <Card>I made this Ron Swanson quote generator one day over Christmas break to practice using RESTful APIs. The 'New Quote' button returns a new quote from the API and the search bar searches for quotes based on user input. I kept the styling simple to reflect the character. I had a lot of fun with this silly little project!</Card></div>}

                <div className="wrap">
                    <Card><a onClick={toggleShowCurrent}>Current Projects</a></Card>
                </div>

                {isShowingCurrent === true && 
                <div className="project">
                    <Card>I am very interested in learning how to build apps from scratch following my experiences in getting Intrepid English's app uploaded to the Apple App Store. I am currently following the <a href='https://developer.android.com/courses/android-basics-compose/course' target='_blank'>Android Developer course</a> on building an app in Kotlin with JetPack Compose and plan to move on to Flutter afterwards.</Card>
                </div>}
                
                
            </section>
        </>
    )

}

export default Projects;