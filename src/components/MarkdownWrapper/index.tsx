import React, { useEffect, useState } from "react"
import { MarkdownWrapperContainer, MarkdownWrapperContent } from "./styles"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism/index'


const MarkdownWrapper = ({ markdownText }) => {
    return (
        <MarkdownWrapperContainer>
            <MarkdownWrapperContent>
                <SyntaxHighlighter
                    style={a11yDark}
                    language={"markdown"}
                    showInlineLineNumbers={true}
                    wrapLongLines={true}
                    showLineNumbers={true}
                    customStyle={{
                        margin: '0.2em 0px',
                        padding: '1em 0em',
                        alignSelf: 'flex-start',
                        marginBottom: '16px',
                        width: '100%'
                    }}
                >{markdownText}</SyntaxHighlighter>
            </MarkdownWrapperContent>
        </MarkdownWrapperContainer>
    )
}


export default MarkdownWrapper
