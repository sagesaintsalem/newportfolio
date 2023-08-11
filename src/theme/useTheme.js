import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../storage.js';
import _ from 'lodash';

export const useTheme = () => {
  const themes = getFromLS('all-themes');
  const [theme, setTheme] = useState(themes.data.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = mode => {
    setToLS('theme', mode)
    setTheme(mode);
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.data, 'font'));
    return allFonts;
  }

    useEffect(() => {
    const localTheme = getFromLS('theme');
        localTheme ? setTheme(localTheme) : setTheme(themes.data.light);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode, getFonts };
};

//This custom React hook returns the selected theme from localStorage and a boolean to indicate if the theme is loaded correctly from storage. It also exposes a function, setMode, to apply a theme programmatically.