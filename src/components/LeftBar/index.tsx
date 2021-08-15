import React from "react"
import { AiFillHome } from "react-icons/ai"
import { DiDotnet } from "react-icons/di"
import { FaDocker, FaNode } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { SiCsharp, SiDotNet, SiPostgresql, SiTypescript } from "react-icons/si"
import { LeftBarWrapper, LeftBarHomeButton, OptionsButton, Divider, FeaturedStack } from "./styles"
import ReactTooltip from 'react-tooltip'
import FeaturedStackItem from "./featuredStackItem"


const LeftBar = () => (

    <LeftBarWrapper>
        <LeftBarHomeButton to={"/"} >
            <AiFillHome />
        </LeftBarHomeButton>
        <Divider />
        <FeaturedStack>
            <FeaturedStackItem tooltip=".NET & .NET Core 3+">
                <SiDotNet />
            </FeaturedStackItem>
            <FeaturedStackItem tooltip="C#">
                <SiCsharp />
            </FeaturedStackItem>
            <FeaturedStackItem tooltip="Javascript">
                <IoLogoJavascript />
            </FeaturedStackItem>
            <FeaturedStackItem tooltip="NodeJS">
                <FaNode />
            </FeaturedStackItem>
            <FeaturedStackItem tooltip="Typescript">
                <SiTypescript />
            </FeaturedStackItem>
            <FeaturedStackItem tooltip="Docker">
                <FaDocker />
            </FeaturedStackItem>
            <FeaturedStackItem tooltip="PostgreSQL">
                <SiPostgresql />
            </FeaturedStackItem>
        </FeaturedStack>
        <Divider />
        <OptionsButton />

    </LeftBarWrapper>

)

export default LeftBar