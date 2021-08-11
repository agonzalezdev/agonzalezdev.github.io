import React from 'react'
import styled from 'styled-components'
import { Button } from '../button'

export const SectionContainer = styled.div<{id, lightBg}>`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px){
        padding: 50px 0;
    }
`

export const SectionWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 90vh;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`

export const SectionRow = styled.div`
    align-items: center;
`

export const Column1 = styled.div<{fullWidth}>`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: ${({fullWidth}) => (fullWidth ? 'col1 col2' : 'col1')};
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2
`

export const TextWrapper = styled.div`
    max-width: 100%;
    padding-top: 10vh;
    padding-bottom: 60px;

    @media screen and (max-width: 768px){
        padding: 50px 0;
    }
`

export const TopLine = styled.p`
    color: red;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1<{lightText}>`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: red;
    letter-spacing: 1.4px;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};
    
    @media screen and (max-width: 480px){
        font-size: 32px
    }
`

export const Subtitle = styled.p<{darkText}>`
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`