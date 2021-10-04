import { createTheme } from "@material-ui/core";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686"

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
        },
        h2: {
            fontFamily: "Roboto",
            fontWeight: '700',
            fontSize: '2.5rem',
            color: arcBlue,
            lineHeight: 1.5,
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: '2.5rem',
            color: arcBlue
        },
        h4: {
            fontFamily: "Roboto",
            fontSize: '1.75rem',
            color: arcBlue,
            fontWeight: '700',
        },
        subtitle1: {
            fontSize: '1.25rem',
            fontWeight: '300',
            color: arcGrey,
        },
        subtitle2: {
            color: "#fff",
            fontSize: '1.25rem',
            fontWeight: '300'
        },
        learnButton: {
            borderColor: arcBlue,
            color: arcBlue,
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
        }
    }
})