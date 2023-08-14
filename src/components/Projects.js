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


const NOTE_PROJECT = "NOTE"
const FUR_PROJECT = "FUR"
const SWANSON = "SWANSON"



const Projects = () => {
    const [isShowingNote, setIsShowingNote] = useState(false);
    const [isShowingFur, setIsShowingFur] = useState(false);
    const [isShowingSwanson, setIsShowingSwanson] = useState(false);
    const [isShowingCurrent, setIsShowingCurrent] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null)



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
            <div className="wrap">
                <Card><a onClick={toggleShowNote}>NoteClan</a></Card>
                <Card><a onClick={toggleShowFur}>furFinder</a></Card>
                <Card><a onClick={toggleShowSwanson}>Swansonator</a></Card>
            </div>
            
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
                <Card>Learning Kotlin and C# so I can build Android apps and figure out what the Hell C# is.</Card>
            </div>}
            
        </>
    )

}

export default Projects;