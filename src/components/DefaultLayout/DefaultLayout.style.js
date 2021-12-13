import { makeStyles } from "@mui/styles";


export const useDefaultStyles = makeStyles({
    root: {
        width : '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(to top right, #1A4CAB, #10BDBB)',
    },

    box: {
        width: '65rem',
        height: '45rem',
        backgroundColor: 'white',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.61)',
        borderRadius: '10px',

    },

    content: {
        borderRadius:  '10px',
        width: '100%',
        height: '100%',
        padding: '10px',
        backgroundColor: '#eeefea'
    },

})
