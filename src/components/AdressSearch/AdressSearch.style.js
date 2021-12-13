import { makeStyles } from "@mui/styles";


export const useAdressSearchStyle = makeStyles({
    SearchBox: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    SubTitle: {
        textAlign: 'start',
    },

    ContentBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '70%', 
        height: '70%',

    },

    Form : {
        width: '70%',
        height: '70%',  
    },

    FormContent : {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },

    Buttons : {
        width: '50%',
        display: 'flex',
        
    }

})






