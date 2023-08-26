import '../styles/ThemePicker.css';
import React, { useState, useEffect } from "react";
import _ from 'lodash';
import {useTheme} from '../theme/useTheme';
import { getFromLS } from '../storage';



const ThemePicker = (props) => {
    const themesFromStore = getFromLS('all-themes');
    const [data, setData] = useState(themesFromStore.data);
    const [themes, setThemes] = useState([]);
    const {setMode} = useTheme();

    const themeSwitcher = selectedTheme => {
        setMode(selectedTheme);
        props.setter(selectedTheme);
    };

    useEffect(() => {
        setThemes(_.keys(data));
    }, [data]);

    useEffect(() => {
        props.newTheme &&
            updateThemeCard(props.newTheme);
    }, [props.newTheme])

    const updateThemeCard = theme => {
        const key = _.keys(theme)[0];
        const updated = {...data, [key]:theme[key]};
        setData(updated);
    }

    const ThemeCard = props => {
        return(
            <>
                <button className='themedButton' onClick={ (theme) => themeSwitcher(props.theme) }
                    style={{backgroundColor: `${data[_.camelCase(props.theme.name)].colors.button.background}`, 
                    color: `${data[_.camelCase(props.theme.name)].colors.button.text}`,
                    fontFamily: `${data[_.camelCase(props.theme.name)].font}`}}>
                    {props.theme.name}
                </button>
                </>
        )
    }

    return (
        <>
            <div className='picker' >
            <h3>Themes</h3>
                <ul className='container'>
                    
                {
                themes.length > 0 && 
                    themes.map(theme =>(
                        <ThemeCard theme={data[theme]} key={data[theme].id} />
                    ))
            }
            
                </ul>
               <div>
                <a href='https://github.com/sagesaintsalem' target='_blank'><img src='./github.png' alt='Githubs famous squid-cat logo'></img></a>
                <a href='https://www.linkedin.com/in/rita-toussaint' target='_blank'><img src='./linkedblack.png' alt='Linked In logo in black, shows the word in'></img></a>
               </div>
                
            </div>

        </>
    )

}

export default ThemePicker;