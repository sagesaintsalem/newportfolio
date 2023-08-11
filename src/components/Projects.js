import Card from "./Card";
import '../styles/Projects.css';
import { useState } from "react";

const NOTE_PROJECT = "NOTE"
const PIRATES_PROJECT = "PIRATES"
const FUR_PROJECT = "FUR"




const Projects = () => {
    const [isShowingNote, setIsShowingNote] = useState(false);
    const [isShowingFur, setIsShowingFur] = useState(false);
    const [isShowingPirates, setIsShowingPirates] = useState(false);
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

    function toggleShowPirates() {
        setIsShowingPirates((isShowingPirates) => !isShowingPirates);
        setSelectedProject(PIRATES_PROJECT)
    }

    function toggleShowCurrent() {
        setIsShowingCurrent((isShowingCurrent) => !isShowingCurrent);
    }

    return(
        <>
            <div className="wrap">
                <Card><a onClick={toggleShowNote}>NoteClan</a></Card>
                <Card><a onClick={toggleShowFur}>furFinder</a></Card>
                <Card><a onClick={toggleShowPirates}>arrrrRPG!</a></Card>
            </div>
            
            {selectedProject === NOTE_PROJECT && isShowingNote === true &&
            <div className="project">
            <Card>This was my first project at CodeClan, written in python, Flask and MongoDB.</Card></div>}
            
            {selectedProject === FUR_PROJECT && isShowingFur === true &&
            <div className="project">
            <Card>This was a group project written in React. We designed it to resemble Tinder.</Card></div>}

            {selectedProject === PIRATES_PROJECT && isShowingPirates === true &&
            <div className="project">
            <Card>A basic role-playing game about pirates written in React with a Java backend.</Card></div>}

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