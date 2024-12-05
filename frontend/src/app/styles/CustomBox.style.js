import { styled, createTheme, Box, fontSize, border, display, textAlign } from '@mui/system';
/* export const customTheme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Primary color for components
            contrastText: 'white', // Text color on primary components
        },
        background: {
            default: '#f0f0f0', // Background color for the app
            paper: '#ffffff', // Background for paper components
        },
        scrollbar: {
            track: '#e0e0e0', // Track background color
            thumb: '#1976d2', // Scrollbar thumb color
            thumbHover: '#1565c0', // Thumb color on hover
        },
    },
}); */

export const CustomBox = styled(Box)(({ theme, borderRadius, width, height, position, bottom, margin, overflow, paddingInline, paddingBlock, lineHeight, background, paddingBottom }) => ({
    width: width ? `${width}%` : 'none',
    height: height ? `${height}vh` : 'none',
    position: position ? `${position}` : 'none',
    bottom: bottom ? `${bottom}px` : 'none',
    margin: margin ? `${margin}` : 'none',
    overflow: overflow ? `${overflow}` : 'none',
    // scrollbarWidth: "none",
    paddingInline: paddingInline ? `${paddingInline}` : 'none',
    paddingBlock: paddingBlock ? `${paddingBlock}` : 'none',
    lineHeight: lineHeight ? `${lineHeight}` : 'none',
    borderRadius: borderRadius ? `${borderRadius}` : 'none',
    //right: Right ? `${Right}px` : 'none',
    paddingBottom: paddingBottom ? `${paddingBottom}` : "none",
    // border: "2px solid red",

    '&::-webkit-scrollbar': {
        width: '8px', // Width of the scrollbar
        height: '8px', // Height of the scrollbar (for horizontal scrollbars)
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: "#6c63ff", // Vibrant blue-violet color for the scrollbar thumb
        borderRadius: '10px', // Rounded corners for the scrollbar thumb
        border: `2px solid #e4e4e4`, // Light gray border for better contrast
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: "#f8f8f8", // Very light gray for the scrollbar track
        borderRadius: '10px', // Rounded corners for the track
    },
    '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: "#4b42d1", // Slightly darker shade for the thumb hover effect
    },
    '& .helperText': {
        fontSize: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%", /* Ensure it takes the full height of the parent */
        margin: "0", /* Remove default margins */
        textAlign: "center", /* Center text alignment */
        fontSize: " 1.8rem", /* Optional: Adjust font size */
        // border: "2px solid red"
    },
    '& .heading': {
        // border: "2px solid red",
        fontSize: "2rem",
        textAlign: "center",
        background: "rgba( 255, 255, 255, 0.1 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 7px )",
        borderRadius: "10px",
        paddingBlock: "0.76rem",
        width: "83%",
        margin: "auto"

    }

}));