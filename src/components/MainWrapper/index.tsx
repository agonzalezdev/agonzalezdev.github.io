import React, { useState } from "react"
import { Avatar, Box, Grid, Typography } from "@material-ui/core"
import { Apps, AssignmentInd, ContactMail, Home } from "@material-ui/icons"
import CVImg from "../../img/cv_img.jpg"
import styled, { css } from 'styled-components'
import { withTheme } from "@material-ui/core/styles";
import Typed from "react-typed"
import { AvatarImg, MainContainer, MainContent, Subtitle, Title } from "./styles"


const MainWrapper = () => (
    <MainContainer>
        <MainContent>
            <Grid container justifyContent={"center"}>
                <AvatarImg src={CVImg} alt="Alex González" />
            </Grid>
            <Title>
                <Typed
                    strings={["Hi! I'm Alex Gonzalez"]}
                    typeSpeed={40}
                    loop={false}
                    showCursor={false}
                />
            </Title>
            {/* <p>{response}: </p> */}
            <br />
            <Subtitle>
                <Typed
                    strings={["C# | .NET  | NodeJS", "React | TypeScript | Javascript", "Docker | Kubernetes | RabbitMQ ", "GIT | Jenkins | Redis", "Agile | Scrum | Kanban", "- Fullstack Developer -"]}
                    typeSpeed={40}
                    backSpeed={10}
                />
            </Subtitle>
        </MainContent>
    </MainContainer>
)


export default MainWrapper
