import React from 'react'
import '../styles/CurrentProjects.css'

function CurrentProjects() {
  return (
    <div className='viewfinder'>
    <h2 id='current-title'>Current Projects</h2>
        <div className="current-project">
        
        <div className='current-text'>
          <div id='in-progress'>
        

            <div id='tech-army'>
                <p>I am currently working at Leonardo through WithYouWithMe (WYWM) as a software developer! I trained in C++ and created a little project, Chataway, to demonstrate my abilities (see screenshot) </p>

                <p>I am working in embedded systems, which is very new to me. I'm excited about everything I'm going to learn! Other than that, I'm thinking of adding a small blog to this site so that I can post regular updates about my career. Stay tuned! </p>
            </div>
          </div>
        </div>
        

        <div className='cproject'>
          <span>
            <a href="https://github.com/sagesaintsalem/chataway" target='_blank' rel="noreferrer">
              <img src="./projectshots/exeinIMPROVEDaction.png" id='cproject' ></img>
            </a>
          </span>
        </div>
        </div>

    </div>
  )
}

export default CurrentProjects