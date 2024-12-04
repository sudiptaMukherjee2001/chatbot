import React from 'react'
import { CustomBox } from '../styles/CustomBox.style.js'

const CustomBoxComp = ({ Width, Height, children, Position, Bottom, Margin }) => {
    return (
        <CustomBox
            width={Width}
            height={Height}
            position={Position}
            bottom={Bottom}
            margin={Margin}
        // Right={Right}


        >{children}</CustomBox>
    )
}

export default CustomBoxComp