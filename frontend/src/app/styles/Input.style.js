import { styled, createTheme } from '@mui/system';
export const customTheme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
            contrastText: 'white',
        },
    },
});

export const CustomInput = styled('input')(({ theme, width, Height }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    border: "2px solid pink",
    width: width ? `${width}%` : '0px',
    height: Height ? `${Height}%` : '0px',
    paddingBlock: "0.8rem",
    background: "#1e293b",
    border: 'none'
}));