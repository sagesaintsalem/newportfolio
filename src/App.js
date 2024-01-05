import '../src/styles/App.css';
import { motion, useScroll } from 'framer-motion';
import About from './components/About.js'
import Projects from './components/Projects';
import Toolbar from './components/Toolbar';
import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from '../src/theme/GlobalStyles';
import {useTheme} from '../src/theme/useTheme';
import Testimonials from './components/Testimonials';
import CurrentProjects from './components/CurrentProjects';

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

function App() {

  const { scrollYProgress } = useScroll()  

  

  return (
    <div id='app'>
    
          <GlobalStyles/>
          
            
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <Toolbar className="toolbar"/>
          
          <div className='topic'>
          <About />
          </div>
          
          <div className='topic'>
          <Projects />
          </div>

          <div className='topic'>
            <CurrentProjects />
          </div>
          
          <div className='topic'>
          <Testimonials />
          </div>
        
     
    
    </div>
  );
}

export default App;
