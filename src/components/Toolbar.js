import ThemePicker from "./ThemePicker";
import '../styles/Toolbar.css';
import { useState } from "react";

const Toolbar = (props) => {
    const toolbarSetter = props.setter
    const toolbarNewTheme = props.newTheme

    const [showMenu, setShowMenu] = useState(false)

    function toggleMenu () {
        setShowMenu((showMenu) => !showMenu)
    }

    return (
        <div className="toolbar">
            <h1>Rita Toussaint</h1>
            <a><img src='./borger.png' onClick={toggleMenu}></img>
                {showMenu === true && <ThemePicker setter={toolbarSetter} newTheme={toolbarNewTheme} /> }
            </a>

        </div>
    )
}

export default Toolbar;