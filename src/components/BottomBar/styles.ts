import React from 'react'
import styled from 'styled-components'
import { GoSettings } from "react-icons/go"
import { FaCodeBranch } from 'react-icons/fa'
import { mainIconColor } from "../../theme/index"

export const BottomBarWrapper = styled.div`
    left: 0;
    width: 100vw;
    bottom: 0;
    height: 24px;
    display: flex;
    position: fixed;
    background: #21252b;
    align-items: center;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    justify-content: space-between;
    align-content: flex-start;
    z-index: 3;
    flex-direction: row;
`

export const BottomBarIcon = styled(FaCodeBranch)`
    color: ${mainIconColor};
    margin-left: 6px;
`

export const BottomBarIconTag = styled.span`
    color: ${mainIconColor};
    font-size: 0.8rem;
    margin-left: 2px;
`
