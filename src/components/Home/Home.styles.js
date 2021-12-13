import { makeStyles } from "@mui/styles";
import aside from '../../assets/aside-background.jpg'


export const useHomeStyles = makeStyles({
   
    asideBackground: {
        width: '60%',
        backgroundImage: `url(${aside})`,
        backgroundSize : 'cover'
    },

    contentOptions: {
        padding: '30px',
        height: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    tittle: {
       color: '#353839',
    },

    parag: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        color: '#353839',
        fontSize: '15px'
,        height: '30%',
    },

    submit: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    }

})
