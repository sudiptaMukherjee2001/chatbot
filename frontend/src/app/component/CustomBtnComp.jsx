import React from 'react'
import { CustomBtn } from '../styles/CustomBtn.style.js'

const CustomBtnComp = ({ children, Width, fontWeight, OnclickFunc, Color, BackgroundColor }) => {
    return (
        <CustomBtn
            width={Width}
            fontWeight={fontWeight}
            onClick={OnclickFunc}
            color={Color}
            backgroundColor={BackgroundColor}

        >{children}</CustomBtn>
    )
}

export default CustomBtnComp