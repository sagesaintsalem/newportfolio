
import Card from "./Card";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash';
import {useTheme} from '../theme/useTheme';
import { getFromLS } from '../storage';

const Picker = styled.div`
    background-color: rgba(189, 195, 199, 0.75);
    position: absolute;
    top: 6em;
    right: 5px;
    z-index: 10;
    padding: 2em;
    color: black;
    text-align: center;
    font-size: 20px;
    backdrop-filter: blur(4px);
`

const ThemedButton = styled.button`
    border: 0;
    display: inline-block;
    padding: 1em 2em;
    font-size: 16px;
    border-radius: 8px;
    margin-top: 5px;
    width: 100%;
    cursor: pointer;
    
`;

const Container = styled.ul`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(1, 2fr);
    grid-template-rows: repeat(4, 2fr);
    padding: 0.5rem;
    
`;



const ThemePicker = (props) => {
    const themesFromStore = getFromLS('all-themes');
    const [data, setData] = useState(themesFromStore.data);
    const [themes, setThemes] = useState([]);
    const {setMode} = useTheme();

    const themeSwitcher = selectedTheme => {
        console.log(selectedTheme);
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
                <ThemedButton onClick={ (theme) => themeSwitcher(props.theme) }
                    style={{backgroundColor: `${data[_.camelCase(props.theme.name)].colors.button.background}`, 
                    color: `${data[_.camelCase(props.theme.name)].colors.button.text}`,
                    fontFamily: `${data[_.camelCase(props.theme.name)].font}`}}>
                    {props.theme.name}
                </ThemedButton>
                </>
        )
    }

    return (
        <>
            <Picker>
            <h3>Themes</h3>
                <Container>
                    
                {
                themes.length > 0 && 
                    themes.map(theme =>(
                        <ThemeCard theme={data[theme]} key={data[theme].id} />
                    ))
            }
                </Container>
            </Picker>

        </>
    )

}

export default ThemePicker;