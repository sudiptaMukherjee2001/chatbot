import { Button } from '@mui/material';
import { styled, createTheme, } from '@mui/system';
/* export const customTheme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
            contrastText: 'white',
        },
    },
}); */

export const CustomBtn = styled(Button)(({ theme, width, fontWeight, color, backgroundColor }) => ({
    width: width ? `${width}%` : "0px",
    fontWeight: fontWeight ? `${fontWeight}` : 0,
    color: color ? `${color}` : "none",
    backgroundColor: backgroundColor ? `${backgroundColor}` : "none",
    // border: "3px solid red"
    paddingBlock: "0.5rem",

}));