import React from 'react'
import styled from 'styled-components'
import { ActiveTab, InactiveTab, TopBarGray } from '../../theme';

export const BreadcrumbWrapper = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    position: sticky;
    background: ${ActiveTab};
    display: flex;
    flex-direction: column;
`
export const BreadcrumbTag = styled.span`
  color: white;
    margin-left: 10px;
    font-size: 13px;
    margin-top: 3px;
`
export const BreadcrumbIcon = styled.div`
  &&&{
    height: 10px;
    display: inline-block;
  }
`