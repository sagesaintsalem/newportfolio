import ThemePicker from "./ThemePicker";
import '../styles/Toolbar.css';
import { useState } from "react";
import ClickAwayListener from 'react-click-away-listener';
import { motion, animate } from "framer-motion";
import { TiThMenuOutline } from 'react-icons/ti'

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
                <span><motion.svg className="borger" 
                alt='3 transparent rectangles signifying a menu' 
                onClick={toggleMenu}
                animate={{color: showMenu ? '#FFEA00':"#000000"}}>
                    <TiThMenuOutline />
                </motion.svg>
                
                    {showMenu === true && 
                    
                        <ThemePicker setter={toolbarSetter} newTheme={toolbarNewTheme} />
                    
                    }
                </span>
            </ClickAwayListener>
        </div>
    )
}

export default Toolbar;

