import { Grid } from "@material-ui/core";
import React from "react";
import StackItem from "./stackItem";
import {
    SiDotNet, SiCsharp, SiTypescript, SiRedis, SiKubernetes, SiRabbitmq,
    SiNuget, SiPostgresql, SiMicrosoftsqlserver, SiJson,
    SiGnubash
} from "react-icons/si";
import {
    FaNode, FaReact, FaDocker, FaJenkins
} from "react-icons/fa";
import { DiGit, DiDotnet } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlineApi } from "react-icons/ai";
import { GrGraphQl } from "react-icons/gr";

const TechStacks = () => (
    <Grid container justifyContent="center" spacing={0}>
        <StackItem xs={6} md={3} tooltip="Dotnet Framework">
            <SiDotNet />
        </StackItem>
        <StackItem xs={6} md={3} tooltip="NodeJS">
            <FaNode />
        </StackItem>
        <StackItem xs={6} md={3} tooltip=".NET CORE 2,3 & 5">
            <DiDotnet />
        </StackItem>
        <StackItem xs={6} md={3} tooltip="C# 6+">
            <SiCsharp />
        </StackItem>
        <StackItem xs={6} md={3} tooltip="Javascript">
            <IoLogoJavascript />
        </StackItem>
        <StackItem xs={6} md={3} tooltip="TypeScript">
            <SiTypescript />
        </StackItem>
        <StackItem xs={6} md={3} tooltip="ReactJS">
            <FaReact />
        </StackItem>
        <StackItem xs={6} md={3} tooltip="Github, Gitlab">
            <DiGit />
        </StackItem>
        <StackItem xs={6} md={3} tooltip="Redis">
            <SiRedis />
        </StackItem>
        <StackItem xs={6} md={3} tooltip="Docker, docker-compose with YAML">
            <FaDocker />
        </StackItem>
        <StackItem xs={6} md={3} tooltip="Kubernetes">
            <SiKubernetes />
        </StackItem>
        <StackItem xs={6} md={3} tooltip="RabbitMQ ">
            <SiRabbitmq />
        </StackItem>
        <StackItem xs={6} md={3} tooltip="PostgreSQL">
            <SiPostgresql />
        </StackItem>
        <StackItem xs={6} md={3} tooltip="MSSQL ">
            <SiMicrosoftsqlserver />
        </StackItem>
        <StackItem xs={6} md={3} tooltip="Jenkins ">
            <FaJenkins />
        </StackItem>
        <StackItem xs={6} md={3} tooltip="JSON ">
            <SiJson />
        </StackItem>
        <StackItem xs={6} md={3} tooltip="API Rest">
            <AiOutlineApi />
        </StackItem>
        <StackItem xs={6} md={3} tooltip="GraphQL ">
            <GrGraphQl />
        </StackItem>
        <StackItem xs={6} md={3} tooltip="Bash scripting ">
            <SiGnubash />
        </StackItem>
        <StackItem xs={6} md={3} tooltip="NuGet">
            <SiNuget />
        </StackItem>
    </Grid>
);

const StackData = {
    id: 'stack',
    lightBg: false,
    ligthText: false,
    topLine: 'Stack',
    headLine: 'Stack tecnológicos',
    description: 'He utilizado los siguientes lenguajes, herramientas y frameworks durante mi trayectoria profesional',
    imgStart: false,
    //img: NetNodeImg,
    alt: 'stack',
    primary: true,
    darkText: false,
    children: (<>
        <TechStacks />
    </>)
}

export default StackData;