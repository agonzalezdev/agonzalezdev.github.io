import { BackgroundColor } from "./../../theme/index";
import React from "react"
import { Avatar, Box, Typography } from "@material-ui/core"
import styled, { css } from 'styled-components'
import { withTheme } from "@material-ui/core/styles";



export const AvatarImg = withTheme(styled(Avatar)`
  &&&{
    width: ${props => props.theme.spacing(20)}px;
    height: ${props => props.theme.spacing(20)}px;

    @media (max-width: ${768}px) {
      width: ${props => props.theme.spacing(17)}px;
      height: ${props => props.theme.spacing(17)}px;
  } 
  }
`)

export const MainContainer = styled(Box)`
  height: 100vh;
  background: ${BackgroundColor};
  position: absolute;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;

  @media (max-width: ${768}px) {
      padding: 0;
  } 
`


export const MainContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${768}px) {
    top: 20%;
  } 
`

export const Title = styled(Typography)`
  &&&{
    color: #c2c2c2;
    margin-bottom: -1.8rem;
    font-size: 2.1rem;

    @media (max-width: 768px){
      font-size: 1.5rem;
    }
  }
`

export const Subtitle = styled(Typography)`
  &&&{
    color: #909295;
    font-size:  1.7rem;
    overflow: hidden; 
    white-space: nowrap;

    @media (max-width: 768px){
      font-size:  1.2rem;
      margin-top: 10px;
    }
  }
`

