import React, { useEffect, useState } from "react"
import { MarkdownWrapperContainer, MarkdownWrapperContent } from "./styles"


const MarkdownWrapper = ({ children }) => {
    return (
        <MarkdownWrapperContainer>
            <MarkdownWrapperContent>
                {children}
            </MarkdownWrapperContent>
        </MarkdownWrapperContainer>
    )
}


export default MarkdownWrapper
