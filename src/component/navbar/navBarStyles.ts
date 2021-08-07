import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { MenuOpen } from "@material-ui/icons";

export const Nav = styled.nav<{scrollNav}>`
    background: ${({scrollNav}) => (scrollNav ? '#565656' : 'black')};
    -webkit-transition: background-color 2s ease-out;
    -moz-transition: background-color 2s ease-out;
    -o-transition: background-color 2s ease-out;
    transition: background-color 2s ease-out;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    width: 100%;
    opacity: 0.6;
    top: 0;
    z-index: 100;

    @media screen and (max-width: 768px){
        transition: 0.8s all ease;
        height: 45px;
    }
`

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;

    @media screen and (max-width: 768px){
        transition: 0.8s all ease;
        height: 45px;
    }
`

export const NavLogo = styled(RouterLink)`
    color: #c50000;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: -8px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled(MenuOpen)`
&&&{
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: -8px;
        right: -9px;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
}
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 4px solid red;
    }
`