import React from "react"
import { Avatar, Box, Typography } from "@material-ui/core"
import styled, { css } from 'styled-components'
import { withTheme } from "@material-ui/core/styles";
import Bckgrnd from "../../img/background.jpg"

export const AvatarImg = withTheme(styled(Avatar)`
  &&&{
    width: ${props => props.theme.spacing(20)}px;
    height: ${props => props.theme.spacing(20)}px;
    margin: ${props => props.theme.spacing(20)};
  }
`)

export const MainContainer = styled(Box)`
  background-image: url(${Bckgrnd});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100%;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768){
        height: 100%
    }
`

export const MainBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; 
`

export const MainContent = styled.div`
  position: absolute;
  z-index: 3;
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20vh;
  z-index: 3;
`

export const Title = styled(Typography)`
  &&&{
    color: tan;
    margin-bottom: -1.8rem;
    font-size: 2.5rem;

    @media screen and (max-width: 768px){
      font-size: 2.0rem;
    }
  }
`

export const Subtitle = styled(Typography)`
  &&&{
    color: tomato;
    font-size:  1.9rem;

    @media screen and (max-width: 768px){
      font-size:  1.5rem;;
    }
  }
`
const ScrollButtonWrapper = () => {
  return (
    <div className="mouse_scroll">
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <div>
        <span className="m_scroll_arrows unu"></span>
        <span className="m_scroll_arrows doi"></span>
        <span className="m_scroll_arrows trei"></span>
      </div>
    </div>
  );
}

export const ScrollButton = styled(ScrollButtonWrapper)`
    
`

