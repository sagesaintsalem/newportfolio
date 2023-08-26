import ThemePicker from "./ThemePicker";
import '../styles/Toolbar.css';
import { useState } from "react";
import ClickAwayListener from 'react-click-away-listener';
import { motion, animate } from "framer-motion";

const Toolbar = (props) => {
    const toolbarSetter = props.setter
    const toolbarNewTheme = props.newTheme

    const [showMenu, setShowMenu] = useState(false)

  

    function toggleMenu () {
        setShowMenu((showMenu) => !showMenu)
    }

    const handleClickAway = () => {
		setShowMenu(false);
	};

    return (
        <div className="toolbar">
            <h1>Rita Toussaint</h1>

            <ClickAwayListener onClickAway={handleClickAway}>
                <span><motion.img className="borger" 
                src='./borger.png' 
                alt='3 transparent rectangles signifying a menu' 
                onClick={toggleMenu}
                animate={{rotate: showMenu ? 90:0}}
                >
                </motion.img>
                
                    {showMenu === true && 
                    
                        <ThemePicker setter={toolbarSetter} newTheme={toolbarNewTheme} />
                    
                    }
                </span>
            </ClickAwayListener>
        </div>
    )
}

export default Toolbar;