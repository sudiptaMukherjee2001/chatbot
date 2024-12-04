import { styled, createTheme, Box } from '@mui/system';
/* export const customTheme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
            contrastText: 'white',
        },
    },
}); */

export const CustomBox = styled(Box)(({ theme, width, height, position, bottom, margin }) => ({
    width: width ? `${width}%` : 'none',
    height: height ? `${height}vh` : 'none',
    position: position ? `${position}` : 'none',
    bottom: bottom ? `${bottom}px` : 'none',
    margin: margin ? `${margin}` : 'none',
    //right: Right ? `${Right}px` : 'none',

    border: "2px solid red"
}));