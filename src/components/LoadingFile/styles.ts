import React from 'react'
import styled from 'styled-components'
import { GoSettings } from "react-icons/go"
import { FaCodeBranch } from 'react-icons/fa'
import { BackgroundColor, mainIconColor } from "../../theme/index"

export const LoadingWrapper = styled.div`
    width: 98%;
    height: 100%;
    background: ${BackgroundColor};
    display: flex;
    justify-content: center;
    padding: 0px 6px;
    overflow-y: scroll;
    flex-direction: column;  
    justify-content: flex-start;
    color: white;
    align-items: flex-start;
    
    -webkit-transition: all 0.5s ease 0.5s; 
    -moz-transition: all 0.5s ease 0.5s;
    -o-transition: all 0.5s ease 0.5s; 
    -ms-transition: all 0.5s ease 0.5s; 
    transition: all 0.5s ease 0.5s;
    transition: opacity 1s ease-out;

    @media (max-width: 768px){
        font-size: 0.8rem;
    }
`

export const FakeEditorWrapper = styled.pre`
    display: flex;
    flex-direction: column;
    color: rgb(248, 248, 242);
    background: rgb(43, 43, 43);
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    text-align: left;
    width: 100%;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    overflow-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    padding: 1em 0em;
    margin: 0.2em 0px;
    border-radius: 0.3em;
    overflow: inherit;

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