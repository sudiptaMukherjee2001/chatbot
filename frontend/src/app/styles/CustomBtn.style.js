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

export const CustomBtn = styled(Button)(({ theme, width, fontWeight }) => ({
    width: width ? `${width}%` : "0px",
    fontWeight: fontWeight ? `${fontWeight}` : 0,
    border: "3px solid red"
}));