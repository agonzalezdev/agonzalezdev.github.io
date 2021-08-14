import React from "react"
import { Avatar, Box, Typography } from "@material-ui/core"
import styled, { css } from 'styled-components'
import { BackgroundColor } from "./../../theme/index";


export const MarkdownWrapperContainer = styled.div`
  height: 94vh;
  background: ${BackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 6px;
  overflow-y: scroll;
  flex-direction: column;  
  justify-content: flex-start;


  @media (max-width: 768px){
        height: 100%
    }
`
export const MarkdownWrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const MarkdownTitle = styled.span`
    color: #569cd6;
    font-weight: bold;
`

