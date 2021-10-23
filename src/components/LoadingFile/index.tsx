import React, { useEffect, useState } from "react"
import { LoadingWrapper, FakeEditorWrapper, FakeEditorWrapperLine, FakeEditorWrapperLineNumber } from "./styles"
import Typed from "react-typed"
import { useAppSelector } from "../../app/hooks"

const LoadingFile = ({ show }) => {

    const LoadingMessages = [
        "Requesting data..",
        "Fetching from the server..",
        "Reading file..",
        "Opening file..",
        "Loading data.."
    ]


    return (
        <LoadingWrapper style={{ display: `${show ? 'flex' : 'none'}` }}>
            <FakeEditorWrapper>
                {LoadingMessages.map((message, i) => (
                    <>
                        <FakeEditorWrapperLine>
                            <FakeEditorWrapperLineNumber>{i + 1}</FakeEditorWrapperLineNumber>
                            <span>
                                <Typed
                                    strings={[message]}
                                    typeSpeed={Math.floor(Math.random() * 10) + 5}
                                    backSpeed={Math.floor(Math.random() * 10) + 5}
                                    loop={true}
                                    showCursor={true}
                                />
                            </span>
                        </FakeEditorWrapperLine>
                    </>
                ))}
            </FakeEditorWrapper>
        </LoadingWrapper>
    )
}
export default LoadingFile
