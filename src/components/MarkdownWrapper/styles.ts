import React from "react"
import { Avatar, Box, Typography } from "@material-ui/core"
import styled, { css } from 'styled-components'
import { BackgroundColor } from "./../../theme/index";


export const MarkdownWrapperContainer = styled.div`
  background: ${BackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 6px;
  flex-direction: column;  
  justify-content: flex-start;
  min-height: 85vh;
  max-height: 90vh;


  @media (max-width: 768px){
        height: 98%;
  }
`
export const MarkdownWrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (max-width: 768px){
        font-size: 0.7rem;
  }
`

export const MarkdownTitle = styled.span`
    color: #569cd6;
    font-weight: bold;
`

