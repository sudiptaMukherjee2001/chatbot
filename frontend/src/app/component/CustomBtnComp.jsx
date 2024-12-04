import React from 'react'
import { CustomBtn } from '../styles/CustomBtn.style.js'

const CustomBtnComp = ({ children, Width, fontWeight, OnclickFunc }) => {
    return (
        <CustomBtn
            width={Width}
            fontWeight={fontWeight}
            onClick={OnclickFunc}

        >{children}</CustomBtn>
    )
}

export default CustomBtnComp