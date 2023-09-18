export const setToLS = (key, value) => {
  
    window.localStorage.setItem(key, JSON.stringify(value));
   
    
  }
  
  export const getFromLS = key => {
    const value = window.localStorage.getItem(key);

    // const reloadTheme =  window.location.reload();
  
    if (value) {
      return JSON.parse(value);
    } 
    
    
  }

  //These are simple utility functions to store data to the browser’s localStorage and to retrieve from there.