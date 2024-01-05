import '../styles/Toolbar.css';



const Toolbar = () => {
    

    return (
        <div className="toolbar">
            <h1>Rita Toussaint</h1>

            <div className="contact">
                <div className='social-contact'>
                <a href='https://github.com/sagesaintsalem' target='_blank'>
                    <img src='./github.png' alt='Githubs famous squid-cat logo'></img></a>
                    
                <a href='https://www.linkedin.com/in/rita-toussaint' target='_blank'>
                    <img src='./linkedblack.png' alt='Linked In logo in black, shows the word in'></img></a>
                </div>
                <a
                href="/ToussaintCV-1.pdf"
                download="Rita-Toussaint-CV"
                target="_blank"
                rel="noreferrer">
                    <button id='cv-button'>My CV</button>
                </a>
            </div>
        </div>
    )
}

export default Toolbar;

