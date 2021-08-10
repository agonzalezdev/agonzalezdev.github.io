import { IconButton } from '@material-ui/core';
import { MenuOpen } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import { RootState } from '../../app/store';
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem } from './navBarStyles';
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const NavBar = ({ toggleOpen }) => {
    const count = useSelector((state: RootState) => state.slide.value)
    const dispatch = useDispatch();

    const [activeSlide, setActiveSlide] = useState(0);

    const GoToSlide = (slideNr) => {
        //@ts-ignore
        fullpage_api.moveTo(slideNr);
    }

    useEffect(() => {
        console.log(activeSlide);
    }, [activeSlide])

    return (
        <>
            <Nav scrollNav={count == 1}>
                <NavBarContainer>
                    <NavLogo to='/' onClick={() => GoToSlide(1)} className={count == 1 ? "active" : ""} >
                        AG
                    </NavLogo>
                    <MobileIcon onClick={toggleOpen}>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem >
                            <NavLinks
                                onClick={() => GoToSlide(2)}
                                className={count == 2 ? "active" : ""}
                            >
                                <AiOutlineFundProjectionScreen
                                    style={{ marginBottom: "2px" }}
                                />{" "}
                                Stack</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                onClick={() => GoToSlide(3)}
                                className={count == 3 ? "active" : ""}
                            >
                                <CgFileDocument style={{ marginBottom: "2px" }} />
                                Currículum</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>
                                <AiOutlineUser style={{ marginBottom: "2px" }} />
                            Contacto</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar
