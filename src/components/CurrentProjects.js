import React from 'react'
import '../styles/CurrentProjects.css'

function CurrentProjects() {
  return (
    <div className='viewfinder'>
    
        <div className="current-project">
        <h2 id='current-title'>Current Projects</h2>
       <p>After building a cosmetic clone of Disney+, I am now very keen to build a proper streaming site of my own. My idea is to make a fictional site that streams old films which are in public domain. I am currently in the planning phase of this project, but this will either be a MERN or Angular project.</p>

        <p>I recently learned how to make an API (coming soon to the site!) and now I want to take on a bigger task. There is an API for all of the contestants and episodes on the American version of <a href='https://en.wikipedia.org/wiki/RuPaul%27s_Drag_Race' target='_blank' rel='noreferrer' ><em>RuPaul's Drag Race</em></a> and I would like to make something similar but for the alternative reality drag show <a href='https://en.wikipedia.org/wiki/The_Boulet_Brothers%27_Dragula' target='_blank' rel='noreferrer'><em>Dragula</em></a>. </p>

        <p>I am very interested in learning how to build apps from scratch following my experiences in getting Intrepid English's app uploaded to the Apple App Store. I am currently following the <a href='https://developer.android.com/courses/android-basics-compose/course' target='_blank' rel='noreferrer'>Android Developer course</a> on building an app in Kotlin with JetPack Compose and plan to move on to Flutter afterwards.</p>
        <br></br>
        </div>

    </div>
  )
}

export default CurrentProjects