import DelayLink from "./../DelayLink/index";
import React from 'react'
import styled from 'styled-components'
import { GoSettings } from "react-icons/go"
import { ReactComponent as CSharpIconComponent } from "./../../svg/file_type_csharp.svg"
import { NavLink as Link } from 'react-router-dom';
import { ActiveTab, InactiveTab, TopBarGray } from '../../theme';



export const TopBarTabWrapper = styled.div`
  display: flex;
  height: 45px;  
  min-width: 130% !important;
`;


export const CSharpIcon = styled(CSharpIconComponent)`
    height: 21px;
    padding-top: 0px;
    margin-right: 5px;
    margin-left: 4px;
    padding-bottom: 5px;
`;

export const TopBarWrapper = styled.div`
    top: 0;
    left: 0;
    width: calc(100% - 50px);
    position: sticky;
    background: ${TopBarGray};
    display: flex;
    flex-direction: column;
`

export const TopBarTab = styled(Link)`
  cursor: pointer;
  display: flex;
  font-size: 0.8rem;
  border-top: 4px solid #21252b;
  transition: background, border-color 250ms ease;
  border-right: 1px solid hsl(220, 13%, 17.1%);
  letter-spacing: 0.5px;
  padding: 0px 25px 0px 10px;
  text-decoration: none;
  align-content: flex-start;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #abb2bf;
  background: ${InactiveTab};

  &:hover{
    color: #f3f3f3;
    transition: color 500ms ease;
  }
  
  &.active{
    background: ${ActiveTab};
    border-bottom: 1px solid #ffffff85;
  }

  @media (max-width: 768){
    padding: 0px 10px 0px 10px;
  }
`
export const TopBarTabTag = styled.span`
  margin-left: 7px;
`

export const TopBarTabContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    overflow: auto;
`;

