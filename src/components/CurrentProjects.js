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
                <p>I am also a member of the Scottish Tech Army, which is a nonprofit which aims to provide voluntary tech services to charities. I am currently revamping a charity's website design and I worked in a team to build an interactive map for Scottish Tech Army to showcase their projects! → </p>
            </div>
          </div>
        </div>
        

        <div className='map'>
          <span>
            <a href="https://www.scottishtecharmy.org/our-projects" target='_blank' rel="noreferrer">
              <img src="/map2.png" id="map" alt='A small screenshot of a black and white map with colourful markers'></img>
            </a>
          </span>
        </div>
        </div>

    </div>
  )
}

export default CurrentProjects