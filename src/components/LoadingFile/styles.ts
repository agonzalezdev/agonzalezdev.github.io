import React from 'react'
import styled from 'styled-components'
import { GoSettings } from "react-icons/go"
import { FaCodeBranch } from 'react-icons/fa'
import { BackgroundColor, mainIconColor } from "../../theme/index"

export const LoadingWrapper = styled.div`
    width: 100%;
    height: 94vh;
    background: ${BackgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 6px;
    overflow-y: scroll;
    flex-direction: column;  
    justify-content: flex-start;
    color: white;

  @media (max-width: 768){
    }
`

export const FakeEditorWrapper = styled.pre`
    color: rgb(248, 248, 242);
    background: rgb(43, 43, 43);
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    overflow-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    padding: 1em 0em;
    margin: 0.2em 0px;
    overflow: auto;
    border-radius: 0.3em;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 94vh;

  @media screen and (max-width: 768){
        height: 100%
    }
`

export const FakeEditorWrapperLine = styled.code`
    color: rgb(248, 248, 242);
`

export const FakeEditorWrapperLineNumber = styled.span`
    display: inline-block;
    min-width: 1.25em;
    padding-right: 1em;
    text-align: right;
    user-select: none;
    color: rgb(212, 208, 171);
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    overflow-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    background: none;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 1em;
`