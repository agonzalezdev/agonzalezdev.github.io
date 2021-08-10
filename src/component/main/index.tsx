import React, { useState } from "react"
import { Avatar, Box, Grid, Typography } from "@material-ui/core"
import { Apps, AssignmentInd, ContactMail, Home } from "@material-ui/icons"
import CVImg from "../../img/cv_img.jpg"
import styled, { css } from 'styled-components'
import { withTheme } from "@material-ui/core/styles";
import Typed from "react-typed"
import { AvatarImg, MainBackground, MainContainer, MainContent, ScrollButton, Subtitle, Title } from "./mainStyles"
import DynamicBackground from "../dynamicBackground"
import { Button } from "../shared/button"


const MainBlock = () => {

  const [response, setResponse] = useState(null);

  return (
    <>
      <MainContainer>
        <MainBackground />
        <MainContent>
          <Grid container justify={"center"}>
            <AvatarImg src={CVImg} alt="Alex González" />
          </Grid>
          <Title>
            <Typed
              strings={["Alex González"]}
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


          {/* <Button to="signup" primary={true} big={true} dark={true} fontBig={true}>Ver mi CV</Button> */}
        </MainContent>
        <ScrollButton />
      </MainContainer>
    </>
  )
}

export default MainBlock;