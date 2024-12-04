import React, { useRef } from 'react'
import { CustomInput, customTheme } from '../styles/Input.style.js'
import { ThemeProvider } from '@mui/system'

const CustomInputComp = ({ Width, Height, inputRef }) => {

    return (
        <ThemeProvider theme={customTheme}>
            <CustomInput type="text" width={Width} Height={Height} ref={inputRef} />
        </ThemeProvider>
    )
}

export default CustomInputComp