import React from 'react'
import styled, { css } from 'styled-components'
import { GoSettings } from "react-icons/go"
import { Link } from 'react-router-dom';
import { mainIconColor, inactiveGray, LeftBarGray } from "../../theme/index"

export const LeftBarWrapper = styled.div`
    top: 0;
    left: 0;
    width: 50px;
    min-width: 45px;
    display: flex;
    background: ${LeftBarGray};
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    z-index: 2;
    height: 100vh;
`


const baseLeftBarButtonStyles = css`
    color: ${mainIconColor};
    cursor: pointer;
    transition: color 100ms ease;
    margin-bottom: 10px;
    font-size: 1.8rem;
    margin-top: 1vh;  
`;

export const LeftBarButton = styled.div`
    ${baseLeftBarButtonStyles}
`;

export const LeftBarHomeButton = styled(Link)`
    margin-top: 2vh;
    ${baseLeftBarButtonStyles}
`;


export const OptionsButton = styled(GoSettings)`
    color: ${mainIconColor};
    cursor: pointer;
    transition: color 100ms ease;
    margin-bottom: 30px;
    font-size: 1.8rem;
    margin-top: 1vh;
    display: flex;
    padding: 10px 0;
    align-items: center;
    flex-direction: column;
    @media (max-width: 768px){
        padding: 0px 0;
    }
`

export const Divider = styled.span`
    width: 95%;
    height: 1px;
    background: hsl(220, 12.8%, 31%);
    margin-top: 4px;
    margin-bottom: 12px;
`
export const FeaturedStack = styled.span`
    display: flex;
    padding: 10px 0;
    align-items: center;
    flex-direction: column;
    @media (max-width: 768px){
        padding: 0px 0;
    }
`
export const FeaturedStackItem = styled.span<{ tooltip }>`
    color: #9599a0;
    cursor: pointer;
    transition: color 100ms ease;
    margin-bottom: 10px;
    font-size: 1.8rem;
    margin-top: 1vh;
`
