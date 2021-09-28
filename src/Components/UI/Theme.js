import { createTheme } from "@material-ui/core";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export default createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        },

    },
    typography: {
        tab: {
            fontFamily: "Roboto", 
            textTransform: 'none',
            fontWeight: '700',
            fontSize: '1rem',
            minWidth: 10,
        },
        estimate: {
            fontFamily: 'Pacifico',
            fontSize: '1rem',
            textTransform: 'none',
            height: '45px',
            color: 'white',
        }
    }
})