export const themeModes = {
    dark: "dark",
    light: "light"
}

const themeConfigs = {
    custom: ({ mode }) => {
       const customPalette = mode === themeModes.dark ? {
         primary: {
           main: "#ff0000",
           contrastText: "#ffffff"
         },
         secondary: {
           main: "#f44336",
           contrastText: "#ffffff"
         },
         background: {
           default: "#000000",
           paper: "#131313"
         }
       } : {
         primary: {
           main: "#ff0000"
         },
         secondary: {
           main: "#f44336"
         },
         background: {
           default: "grey"
         }
       };
   
       return {
         palette: {
           mode,
           ...customPalette
         },
         components: {
           MuiButton: {
             defaultProps: { disableElevation: true }
           }
         }
       };
    }
   };
   
   export default themeConfigs;