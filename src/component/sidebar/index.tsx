import { IconButton } from '@material-ui/core';
import { MenuOpen } from '@material-ui/icons';
import React from 'react';
import { SidebarContainer, CloseIcon, Icon, SidebarLink, SidebarWrapper, SidebarMenu } from './sidebarStyles';

const Sidebar = ({ isOpen, toggleOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggleOpen}>
            <Icon onClick={toggleOpen}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="" onClick={toggleOpen}>Home</SidebarLink>
                    <SidebarLink to="stack" onClick={toggleOpen}>Stack</SidebarLink>
                    <SidebarLink to="portfolio" onClick={toggleOpen}>Portfolio</SidebarLink>
                    <SidebarLink to="contact" onClick={toggleOpen}>Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
