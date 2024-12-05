import React from 'react'
import { CustomBox } from '../styles/CustomBox.style.js'

const CustomBoxComp = ({ Overflow,
    Width,
    Height,
    children,
    Position,
    Bottom,
    Margin,
    PaddingInline,
    PaddingBlock,
    lineHeight,
    resBg,
    BR,
    PaddingBottom
}) => {
    return (
        <CustomBox
            width={Width}
            height={Height}
            position={Position}
            bottom={Bottom}
            margin={Margin}
            overflow={Overflow}
            paddingInline={PaddingInline}
            paddingBlock={PaddingBlock}
            lineHeight={lineHeight}
            background={resBg}
            borderRadius={BR}
            paddingBottom={PaddingBottom}
        // Right={Right}


        >{children}</CustomBox>
    )
}

export default CustomBoxComp